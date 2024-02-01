# config.py
import os

class Config:
    MONGO_URI = os.environ.get('MONGO_URI') or 'mongodb://localhost:27017/overlays'
    UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'photos')

