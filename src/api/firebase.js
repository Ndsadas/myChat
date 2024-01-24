import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCujZb_3t1gCmEdijUwLAXoc67GUH-vjno",
  authDomain: "mychat-a8dc4.firebaseapp.com",
  databaseURL: "https://mychat-a8dc4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mychat-a8dc4",
  storageBucket: "mychat-a8dc4.appspot.com",
  messagingSenderId: "37919663582",
  appId: "1:37919663582:web:eb9e950efa6a926833294f",
  measurementId: "G-NQZY00MEJJ"
};

export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase)
export const database = getDatabase(firebase)