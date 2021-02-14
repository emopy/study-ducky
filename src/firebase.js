import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-cyuJcQIX96w3BYa8sSd7j4Lqt20reYk",
  authDomain: "treehacks-951cf.firebaseapp.com",
  projectId: "treehacks-951cf",
  storageBucket: "treehacks-951cf.appspot.com",
  messagingSenderId: "1082749061729",
  appId: "1:1082749061729:web:d9d7c3b891c8d327d83820"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
