// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAPea3wEV4-HpuE7RdI3TAfbpcP09pAqI",
  authDomain: "dimplom-fc21c.firebaseapp.com",
  projectId: "dimplom-fc21c",
  storageBucket: "dimplom-fc21c.appspot.com",
  messagingSenderId: "1071946100983",
  appId: "1:1071946100983:web:f25c0b6b89d1d659b163f2",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
const db = getFirestore(app);

const auth = getAuth(app);

export const categoryCollection = collection(db, "categories");
export const productsCollection = collection(db, "products");
export const ordersCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const signIn = () => signInWithPopup(auth, provider);
export const signOff = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);
