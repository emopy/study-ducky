#!/bin/bash

npm install
cd api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..
