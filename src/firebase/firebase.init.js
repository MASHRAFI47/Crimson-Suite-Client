// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa_PpXU7b0YadtlwBPOV-PAsSQizA3nGo",
  authDomain: "crimson-suite.firebaseapp.com",
  projectId: "crimson-suite",
  storageBucket: "crimson-suite.appspot.com",
  messagingSenderId: "221238696711",
  appId: "1:221238696711:web:0df87a5e89617f82d743a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;