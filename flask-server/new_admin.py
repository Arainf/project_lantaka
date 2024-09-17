import bcrypt
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from conn import conn  # Importing the SQLite connection from conn.py


