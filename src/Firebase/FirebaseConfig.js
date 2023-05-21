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
    appId: "1:464130520936:web:179fa160d3e13f2cb288dd"
};

// apiKey: import.meta.env.VITE_apiKey,
// authDomain: import.meta.env.VITE_authDomain,
// projectId: import.meta.env.VITE_projectId,
// storageBucket: import.meta.env.VITE_storageBucket,
// messagingSenderId: import.meta.env.VITE_messagingSenderId,
// appId: import.meta.env.VITE_appId

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;