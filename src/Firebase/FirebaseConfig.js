// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBPdP0ElSA6ZBYSGhsbbf_9AovTqZfPKQ",
    authDomain: "toy-cars-pro.firebaseapp.com",
    projectId: "toy-cars-pro",
    storageBucket: "toy-cars-pro.appspot.com",
    messagingSenderId: "464130520936",
    appId: "1:464130520936:web:91e5a433cef463bbb288dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;