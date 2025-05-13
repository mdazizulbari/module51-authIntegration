// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCegy_CBxFCHiZSm-KvsNChrhYt66WB9ZQ",
  authDomain: "module51-authintegration.firebaseapp.com",
  projectId: "module51-authintegration",
  storageBucket: "module51-authintegration.firebasestorage.app",
  messagingSenderId: "807258412326",
  appId: "1:807258412326:web:5e839ff99d2373e8d09de7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
