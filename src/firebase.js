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
