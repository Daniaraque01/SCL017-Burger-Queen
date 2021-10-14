// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqlyoJTF7i4hZxZDRuPJWJ2Z7ERpDSi18",
  authDomain: "sushisankun.firebaseapp.com",
  projectId: "sushisankun",
  storageBucket: "sushisankun.appspot.com",
  messagingSenderId: "753703020391",
  appId: "1:753703020391:web:a1197c367e5a1b9d8771c2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore();