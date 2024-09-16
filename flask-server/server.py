from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from conn import conn  # Importing the SQLite connection from conn.py

# Create a cursor object using the imported connection
cursor = conn.cursor()

# Execute a sample query to check the connection
# Replace 'some_table' with the actual table name you want to query
cursor.execute('SELECT * FROM users')
results = cursor.fetchall()
print(results)  # Print the query results to verify connection


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../../database/lantakaDB.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = data['password']
    
    existing_user = users.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({"message": "User already exists"}), 409
    
    new_user = users(username=username, password=password)
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"message": "User registered successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['email']
    password = data['password']
    
    user = users.query.filter_by(username=username, password=password).first()
    
    if user:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)
