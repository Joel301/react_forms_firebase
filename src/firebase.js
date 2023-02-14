// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore"
// import firebaseConfigObject from "./firebase.config.json"


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

const { VITE_API_FIREBASECONFIG } = import.meta.env
const firebaseConfigObject = JSON.parse(VITE_API_FIREBASECONFIG)


initializeApp(firebaseConfigObject);                  //firebase config from local json
export const db = getFirestore()
