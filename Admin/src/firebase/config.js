// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKpnpQYP0y43HKhDwJ1M_B3OAdhbj9ReA",
    authDomain: "prueba7am.firebaseapp.com",
    projectId: "prueba7am",
    storageBucket: "prueba7am.firebasestorage.app",
    messagingSenderId: "73840572354",
    appId: "1:73840572354:web:594226c0277f97bdbd485b",
    measurementId: "G-T3LJMPMY94"
  };
  

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
