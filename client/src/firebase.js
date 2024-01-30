// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-70846.firebaseapp.com",
  projectId: "mern-estate-70846",
  storageBucket: "mern-estate-70846.appspot.com",
  messagingSenderId: "571885316198",
  appId: "1:571885316198:web:305446f7a648a25cf7e5a7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
