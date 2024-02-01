# /backend/app/routes.py
import os
from flask import request, jsonify, current_app
from werkzeug.utils import secure_filename
from app import app, mongo

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/overlays', methods=['POST'])
def create_overlay():
    try:
        data = request.form.to_dict()
        position = data.get('position')
        size = data.get('size')
        content = data.get('content')

        # Check if the 'logo' file is included in the request
        if 'logo' in request.files and allowed_file(request.files['logo'].filename):
            logo_file = request.files['logo']
            filename = secure_filename(logo_file.filename)
            logo_path = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
            logo_file.save(logo_path)
        else:
            logo_path = None

        overlay = {
            'position': position,
            'size': size,
            'content': content,
            'logo_path': logo_path
        }

        result = mongo.db.overlays.insert_one(overlay)
        return jsonify({'message': 'Overlay created successfully', 'id': str(result.inserted_id)}), 201
    except Exception as e:
        print(f"Error creating overlay: {str(e)}")
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/api/overlays', methods=['GET'])
def get_overlays():
    overlays = list(mongo.db.overlays.find({}, {'_id': 0}))
    return jsonify(overlays), 200