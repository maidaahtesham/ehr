// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP2Csq6Dq6xhzB42KAPLOsooXqdbBIz64",
  authDomain: "electronic-health-record-c32cc.firebaseapp.com",
  databaseURL: "https://electronic-health-record-c32cc-default-rtdb.firebaseio.com",
  projectId: "electronic-health-record-c32cc",
  storageBucket: "electronic-health-record-c32cc.firebasestorage.app",
  messagingSenderId: "519074780627",
  appId: "1:519074780627:web:1c6f2a56033136886fcb26",
  measurementId: "G-GGMD7S2EV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
