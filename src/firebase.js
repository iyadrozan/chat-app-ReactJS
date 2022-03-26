import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAVT67ah1sOprPhLX6HsKB_tOfzYlIYQAI',
  authDomain: 'bakuchat-prototype.firebaseapp.com',
  projectId: 'bakuchat-prototype',
  storageBucket: 'bakuchat-prototype.appspot.com',
  messagingSenderId: '28642135819',
  appId: '1:28642135819:web:09528307d9116057abdc0e',
  measurementId: 'G-3VRVF8ZFQ9',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
