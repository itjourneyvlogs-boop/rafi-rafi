// firebase.js
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc, 
  onSnapshot 
} from "firebase/firestore";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyCSqfS3Z89seoNl5oUXtJEs50PbqsiwNFg",
  authDomain: "nssh-it-system.firebaseapp.com",
  projectId: "nssh-it-system",
  storageBucket: "nssh-it-system.firebasestorage.app",
  messagingSenderId: "38557193454",
  appId: "1:38557193454:web:020f9ed1c6548401e4cfff"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { 
  db, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc, 
  onSnapshot 
};