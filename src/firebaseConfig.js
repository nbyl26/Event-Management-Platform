import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxRb_ukxMwJ6bNS7mQJUmclgeQcg4e9s4",
  authDomain: "event-management-platfor-1cc78.firebaseapp.com",
  projectId: "event-management-platfor-1cc78",
  storageBucket: "event-management-platfor-1cc78.firebasestorage.app",
  messagingSenderId: "414599503021",
  appId: "1:414599503021:web:7796b37350091878c7fa24",
  measurementId: "G-TVDXL40CN6",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
