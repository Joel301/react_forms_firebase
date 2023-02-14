// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore"
import firebaseConfigObject from "./firebase.config.json"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
initializeApp(
   REACT_APP_FIREBASECONFIG                     //firebase config from enviroment
      ? JSON.parse(REACT_APP_FIREBASECONFIG)
      : firebaseConfigObject);                  //firebase config from local json
export const db = getFirestore()