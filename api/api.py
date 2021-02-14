import time
import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from keywordextractor import Keywordextractor
from video2pdf import Video2PDF
from SearchKeyword import searchKeyword
from Note import Note

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/api/uploadpdf', methods=['POST'])
def handleUploadFile():
    data = dict()
    for key, val in request.form.items():
        data[key] = val

    if('file' not in request.files):
        return {"status": "ERR_MISSING_FILE"}

    f = request.files['file']

    lpath = '.' + os.sep + str(hash(f)) + ".pdf"
    f.save(lpath)

    note = Note(data['title'], data['description'], data['school'], 0, True, False, False, data['fileurl'], lpath)

    os.remove(lpath)
    return { "status": "SUCCESS" }

@app.route('/api/uploadvideo', methods=['POST'])
def handleUploadVideo():
    data = dict()
    for key, val in request.form.items():
        data[key] = val

    if('file' not in request.files):
        return {"status": "ERR_MISSING_FILE"}

    f = request.files['file']

    lpath = '.' + os.sep + str(hash(f)) + ".mp4"
    f.save(lpath)

    note = Note(data['title'], data['description'], data['school'], 0, False, True, False, data['fileurl'], lpath)

    os.remove(lpath)
    return { "status": "SUCCESS" }
