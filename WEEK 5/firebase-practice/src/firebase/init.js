// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhDC5ThoBhJHC5wRZKcs2Gi1VYgkODCA8",
  authDomain: "fir-practice-c081f.firebaseapp.com",
  projectId: "fir-practice-c081f",
  storageBucket: "fir-practice-c081f.appspot.com",
  messagingSenderId: "464059878728",
  appId: "1:464059878728:web:a43cfaf4cb364cf1c7f77d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();