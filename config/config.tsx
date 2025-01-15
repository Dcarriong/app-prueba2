// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqAaHr4brPqcJ_EYESOJP7Xn91rhS1gu0",
  authDomain: "dc-prueba-5abc8.firebaseapp.com",
  databaseURL: "https://dc-prueba-5abc8-default-rtdb.firebaseio.com/",
  projectId: "dc-prueba-5abc8",
  storageBucket: "dc-prueba-5abc8.firebasestorage.app",
  messagingSenderId: "49077637247",
  appId: "1:49077637247:web:e860145b7ac5aac4adaf4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app)
