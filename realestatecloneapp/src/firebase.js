// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOqL2RKeQh0rXN-dO8fR_gV7uVEc6bBnc",
  authDomain: "realestate-react-firebase.firebaseapp.com",
  projectId: "realestate-react-firebase",
  storageBucket: "realestate-react-firebase.appspot.com",
  messagingSenderId: "74748969749",
  appId: "1:74748969749:web:57565387d6dc3145dc9f1c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
