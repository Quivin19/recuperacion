// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7bBN0lLbrr9q2llHchhOkNqjv52_Xk8U",
  authDomain: "recuperacion-8e33f.firebaseapp.com",
  projectId: "recuperacion-8e33f",
  storageBucket: "recuperacion-8e33f.appspot.com",
  messagingSenderId: "762604654328",
  appId: "1:762604654328:web:52b8706e9e7c70e293350d",
  measurementId: "G-62R8WVT26Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);