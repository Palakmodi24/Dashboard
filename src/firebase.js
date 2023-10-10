// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCG0PfU6-0Pb1AWUdwDgIiXY6hOvdPCmJ8",
  authDomain: "dashboard-be043.firebaseapp.com",
  projectId: "dashboard-be043",
  storageBucket: "dashboard-be043.appspot.com",
  messagingSenderId: "764867181749",
  appId: "1:764867181749:web:251261aa1d0a84053a12fc",
  measurementId: "G-7HHTENG6XP"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };