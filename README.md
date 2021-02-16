# StudyDucky
<p align="center">  
  <img src="https://raw.githubusercontent.com/gracejiang/study-ducky/master/images/logo.png" alt="">
</p>

Your study companion.

## Inspiration
As students in a virtual learning environment, it is often hard to keep up with lectures, notes, and assignments. If something didn't make sense in notes, it was often a hassle to find the corresponding timestamp in lecture videos. If something didn't make sense in the lecture, it was a hassle to find corresponding lecture notes. We created StudyDucky as a platform to address this by streamlining the studying process and compiling online resources from institutions across the country. Users can upload lecture videos and auto-generate corresponding notes, or upload lecture notes and receive their corresponding mentions in a lecture video. Furthermore, the platform aggregates these crowdsourced study materials and can recommend relevant lectures, notes, and problems, as well as supports a search engine for these resources. 

<p align="center">  
  <img src="https://raw.githubusercontent.com/gracejiang/study-ducky/master/images/splash.png" alt="">
</p>

We envision StudyDucky to be the ultimate study platform: providing **relevant and helpful resources** as well as **summarizing long lectures** and **pinpointing areas of interests** within videos. Online instruction offers the unique opportunity to take advantage of digital resources through intelligent analysis and sharing of study material.

<p align="center">  
  <img src="https://raw.githubusercontent.com/gracejiang/study-ducky/master/images/explore.png" alt="">
</p>

## What it does

<p align="center">  
  <img src="https://raw.githubusercontent.com/gracejiang/study-ducky/master/images/search.png" alt="">
</p>

StudyDucky is a notesharing platform for students. It allows users to upload lecture notes and videos to its platform, where a corresponding set of notes will be automatically generated. Alternatively, users can upload their own notes and StudyDucky will generate a set of PDF notes using a machine learning backend, highlighting corresponding text portions in the lecture video for quick references. These study materials are saved such that users can search StudyDucky's library of lectures, notes, and problems from users and institutions across the world. 

<p align="center">  
  <img src="https://raw.githubusercontent.com/gracejiang/study-ducky/master/images/details.png" alt="">
</p>

## How we built it
StudyDucky's frontend is built using React and it is connected to its backend using Flask. The backend is built using Google Cloud’s Speech API and ReportLab to translate video to written notes. These are then parsed through a Rapid Automatic Keyword Extraction (RAKE) algorithm to generate relevant keywords. These can then be referenced back to the video to highlight sections of the video that correspond to keywords. Video, text, and generated data is stored using Firestore..

## Setup
If on Linux/MacOS:
```
chmod +x setup.sh
./setup.sh
```
Otherwise, follow code in Bash script.

Afterwards, to start the app, in two different terminals:
```
# Start the React server on localhost:3000
yarn start
# Start the Flask server on localhost:5000
yarn start-api
```

## Challenges we ran into
We spent considerable effort getting keyword extraction to work using NLP and being able to quickly store and retrieve data in Firestore. Furthermore, we encountered many integration issues when trying to tie the frontend to the backend. 

## Accomplishments that we're proud of
We are proud of being able to coordinate a large amount of APIs and tools together (RAKE, Google Cloud NLP and Speech, React, Flask) and integrate it seamlessly into a final product. Furthermore, we are proud of our UI/UX design and providing an engaging user experience.

## What we learned
We learned much about Natural Language Processing and being able to extract meaningful entities from large amounts of academic text and video. Furthermore, we learned how to use React to build a frontend for ease of use on the web.

## What's next for StudyDucky
We are hoping to expand our user base to compile a more complete database of study materials. Furthermore, we hope to refine our NLP algorithms to generate more specific and targeted insights.


