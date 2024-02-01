# /backend/app/__init__.py
from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS  # Add this line
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)  # Add this line to enable CORS
mongo = PyMongo(app)

from app import routes
