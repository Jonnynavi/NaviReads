// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX7GD-xNeO6UUwNC4jaNO6piZaWlZbmZ4",
  authDomain: "navireads.firebaseapp.com",
  projectId: "navireads",
  storageBucket: "navireads.firebasestorage.app",
  messagingSenderId: "575406755573",
  appId: "1:575406755573:web:399ca2c24e4a8967677fbc",
  measurementId: "G-ERRSZ2KJ7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };