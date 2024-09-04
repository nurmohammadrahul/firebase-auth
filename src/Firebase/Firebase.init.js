// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhOLXz2qK6bXJAGa9M_4JgUC6716M7CL8",
  authDomain: "fir-auth-51841.firebaseapp.com",
  projectId: "fir-auth-51841",
  storageBucket: "fir-auth-51841.appspot.com",
  messagingSenderId: "901364465779",
  appId: "1:901364465779:web:fc4e89617cb8c9663f2a06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);