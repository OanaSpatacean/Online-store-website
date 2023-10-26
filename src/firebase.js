import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy59PxupveHthuzVqv3mhNO7TxGqB0MeI",
  authDomain: "online-store-product-details.firebaseapp.com",
  projectId: "online-store-product-details",
  storageBucket: "online-store-product-details.appspot.com",
  messagingSenderId: "919342920839",
  appId: "1:919342920839:web:d4b9b6ab6424315ed77422",
  measurementId: "G-74C8N9H02C"
}; 

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


/*
//ASTA E BAZA DE DATE IN ALT PROIECT PT LOGIN
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const firebaseConfig2 = {
    apiKey: "AIzaSyBhK02qL8wqTzD4QvkOuU4hWJ6K6XzsW8I",
    authDomain: "online-store-login-c5e8d.firebaseapp.com",
    projectId: "online-store-login-c5e8d",
    storageBucket: "online-store-login-c5e8d.appspot.com",
    messagingSenderId: "683724731825",
    appId: "1:683724731825:web:d61f7ee8df1b0b359b3990",
    measurementId: "G-95H7QEB2H9"
  };
  

const app2 = initializeApp(firebaseConfig2);
const db = getFirestore(app2); 

export { db };*/