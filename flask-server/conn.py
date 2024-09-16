import sqlite3
import os

# Define the path to the database file
DATABASE_PATH = os.path.join(os.path.dirname(__file__), '../database/lantakaDB.db')

# Create a connection to the database
conn = sqlite3.connect(DATABASE_PATH)
print("Database connection successful!")
