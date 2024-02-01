# /backend/app/routes.py
from flask import request, jsonify
from app import app, mongo

@app.route('/api/overlays', methods=['POST'])
def create_overlay():
    data = request.get_json()
    position = data.get('position')
    size = data.get('size')
    content = data.get('content')

    overlay = {
        'position': position,
        'size': size,
        'content': content
    }

    result = mongo.db.overlays.insert_one(overlay)
    return jsonify({'message': 'Overlay created successfully', 'id': str(result.inserted_id)}), 201

@app.route('/api/overlays', methods=['GET'])
def get_overlays():
    overlays = list(mongo.db.overlays.find({}, {'_id': 0}))
    return jsonify(overlays), 200
