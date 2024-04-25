// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeJHen1KDST1-HMTPCBasMHVtie0y22fQ",
  authDomain: "webb-shop-ac315.firebaseapp.com",
  projectId: "webb-shop-ac315",
  storageBucket: "webb-shop-ac315.appspot.com",
  messagingSenderId: "1005886233938",
  appId: "1:1005886233938:web:d3894f948b9ce288c22e8b",
  measurementId: "G-92C4VKLWYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}