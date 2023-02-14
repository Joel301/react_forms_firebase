// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
if (REACT_APP_FIREBASECONFIG) {
   firebaseConfig = JSON.parse(REACT_APP_FIREBASECONFIG)
} else {
   import firebaseConfig from "./firebase.config.json"
}

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()