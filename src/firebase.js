import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDfdiyvHaVaza0GQmY2cPIdsY_AbuZXVpA",
  authDomain: "realtor-b848d.firebaseapp.com",
  projectId: "realtor-b848d",
  storageBucket: "realtor-b848d.appspot.com",
  messagingSenderId: "921352993502",
  appId: "1:921352993502:web:36a3dd1291f964745aa04f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()