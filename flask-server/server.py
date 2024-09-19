import os
import bcrypt
import base64
from flask import Flask, request, jsonify
from waitress import serve
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from conn import conn  # Importing the SQLite connection from conn.py

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../../database/lantakaDB.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define the Administrator model
class administrator(db.Model):  # Renamed class to follow PEP 8 naming conventions
    admin_id = db.Column(db.Integer, primary_key=True)
    admin_role = db.Column(db.String(50), nullable=False)  # New column for role
    admin_email = db.Column(db.String(100), unique=True, nullable=False)
    admin_img = db.Column(db.LargeBinary, nullable=True)  # Blob for image
    admin_firstName = db.Column(db.String(100), nullable=False)
    admin_surName = db.Column(db.String(100), nullable=False)
    admin_password = db.Column(db.String(100), nullable=False)
   



# Register route
@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    firstName = request.form['firstName']
    surName = request.form['surName']
    password = request.form['password']

    # Hash the password using bcrypt
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Fetch the image file from the form data
    image_file = request.files.get('profileImage')
    admin_img = None
    if image_file:
        admin_img = image_file.read()  # Read image file as binary for storing in the database

    # Check if the user already exists
    existing_user = administrator.query.filter_by(admin_email=username).first()
    if existing_user:
        return jsonify({"message": "User already exists"}), 409

    # Create a new administrator instance
    new_admin = administrator(
        admin_email=username,
        admin_img=admin_img,
        admin_firstName=firstName,
        admin_surName=surName,
        admin_password=hashed_password.decode('utf-8')  # Save the hashed password
    )
    db.session.add(new_admin)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@app.route('/api/profile/<int:admin_id>', methods=['GET'])
def get_admin_profile(admin_id):
    admin = administrator.query.get(admin_id)
    if admin:
        # Convert the blob (admin.admin_img) to a base64 string
        if admin.admin_img:
            image_blob = base64.b64encode(admin.admin_img).decode('utf-8')
            image_url = f"data:image/jpeg;base64,{image_blob}"  # Assuming it's a JPEG, adjust if needed
        else:
            image_url = None  # Or a default image

        profile_data = {
            "id": admin.admin_id,
            "email": admin.admin_email,
            "firstName": admin.admin_firstName,
            "imageUrl": image_url,  # Send the base64 string to the frontend
            "role": admin.admin_role  # Include role in profile data
        }
        return jsonify(profile_data), 200
    else:
        return jsonify({"error": "Admin not found"}), 404

    

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']
    
    # Find the user by email (admin_email)
    user = administrator.query.filter_by(admin_email=email).first()
    
    if user and bcrypt.checkpw(password.encode('utf-8'), user.admin_password.encode('utf-8')):
        return jsonify({
            "message": "Login successful",
            "admin_id": user.admin_id,
            "role": user.admin_role  # Include role in the response
        }), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

mode = 'dev'


if __name__ == '__main__':
    if (mode == 'dev'):
        app.run(debug=True)
    else:
        serve(app, host='localhost',port=5000, threads=1)
