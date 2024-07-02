import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDBpj3K6H5P9T04JNlQef8tDl-Eb8-8ki4",
  authDomain: "clone-d02f5.firebaseapp.com",
  projectId: "clone-d02f5",
  storageBucket: "clone-d02f5.appspot.com",
  messagingSenderId: "639725957425",
  appId: "1:639725957425:web:b8c3fe2b3cf40b7fd34010",
  measurementId: "G-GCZ9X4GEHJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
