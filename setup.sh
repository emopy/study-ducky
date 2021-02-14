#!/bin/bash

git clone https://github.com/miguelgrinberg/react-flask-app
cd react-flask-app
npm i
cd api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..

# After this, in two different terminals run (make sure you are using virtualenv)
# yarn start
# yarn start-api
# You should be able to access the react app at localhost:3000
# Another server should be set up at localhost:5000 for the Flask backend
# If it works, you can delete .git and add it to the git repo
