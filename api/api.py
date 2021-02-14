import time
import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from keywordextractor import Keywordextractor

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
        print("key:", key)
        print("val:", val)
        data[key] = val

    if('file' not in request.files):
        return {"status": "ERR_MISSING_FILE"}

    f = request.files['file']
    lpath = '.' + os.sep + str(hash(f))

    f.save(lpath)
    data['file'] = f

    keywordextractor = Keywordextractor(lpath)
    keywords = keywordextractor.get_keywords()
    print(keywords)

    os.remove(lpath)
    return { "keywords": keywords }

@app.route('/api/uploadvideo', methods=['POST'])
def handleUploadVideo():
    data = dict()
    for key, val in request.form.items():
        print("key:", key)
        print("val:", val)
        data[key] = val

    if('file' not in request.files):
        return {"status": "ERR_MISSING_FILE"}

    f = request.files['file']
    lpath = '.' + os.sep + str(hash(f))

    f.save(lpath)
    data['file'] = f

    os.remove(lpath)
    return { "keywords": keywords }
