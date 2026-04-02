from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import subprocess

app = Flask(__name__)
CORS(CORS) # React eriþimi için

ARCHIVE_DIR = "./projects_archive"

@app.route('/')
def home():
    return jsonify({"status": "Quantum AI Online", "files_archived": len(os.listdir(ARCHIVE_DIR))})

@app.route('/api/execute', methods=['POST'])
def execute_script():
    data = request.json
    script_name = data.get('script_name') # Çalýþtýrýlacak dosya adý
    script_path = os.path.join(ARCHIVE_DIR, script_name)
    
    if os.path.exists(script_path):
        try:
            # Arka planda scripti çalýþtýr
            subprocess.Popen(["python", script_path])
            return jsonify({"msg": f"{script_name} baþlatýldý."}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    return jsonify({"error": "Dosya bulunamadý"}), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
