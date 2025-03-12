// older/Legacy (Compat) Firebase SDK
//  ;
// import "firebase/compat/auth"
// import "firebase/compat/firestore"

// Modular Firebase SDK setup
import { initializeApp } from "firebase/app";
// Auth
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYyBMnDKmzF3yKUFM8qxEQ-X4SmxSj2dY",
  authDomain: "clone-398a2.firebaseapp.com",
  projectId: "clone-398a2",
  storageBucket: "clone-398a2.firebasestorage.app",
  messagingSenderId: "764399763271",
  appId: "1:764399763271:web:f2b6f719636a4fbc64d662",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Older SDK
// export const db = app.firestore();

// Initialize Authentication and Firestore using the Modular SDK
export const auth = getAuth(app);
export const db = getFirestore(app);
