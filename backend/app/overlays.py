# /backend/app/overlays.py
from flask_pymongo import PyMongo

class Overlay:
    def __init__(self, position, size, content):
        self.position = position
        self.size = size
        self.content = content

    def to_dict(self):
        return {
            'position': self.position,
            'size': self.size,
            'content': self.content
        }
