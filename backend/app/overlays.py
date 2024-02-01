# /backend/app/overlays.py
from flask_pymongo import PyMongo

class Overlay:
    def __init__(self, position, size, content, logo_path=None):
        self.position = position
        self.size = size
        self.content = content
        self.logo_path = logo_path

    def to_dict(self):
        return {
            'position': self.position,
            'size': self.size,
            'content': self.content,
            'logo_path': self.logo_path
        }
