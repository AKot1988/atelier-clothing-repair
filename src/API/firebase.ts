// Import the functions you need from the SDKs you need
import {collection, getFirestore, getDocs} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKutrkgTz3FJ-P7pUqLOBW_4Kknf6LvJs",
  authDomain: "atelierclothingrepair.firebaseapp.com",
  projectId: "atelierclothingrepair",
  storageBucket: "atelierclothingrepair.firebasestorage.app",
  messagingSenderId: "432849750130",
  appId: "1:432849750130:web:025a4d3e3fb53f98b79aeb",
  measurementId: "G-67C2MGHYBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

