// firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBKe1gXMPtujzHOIliHA6l4ED1HhvHhRiM",
  authDomain: "fir-test-ac5c1.firebaseapp.com",
  projectId: "fir-test-ac5c1",
  storageBucket: "fir-test-ac5c1.firebasestorage.app",
  messagingSenderId: "117133927399",
  appId: "1:117133927399:web:62ae7a0d12a365786e1342"
};

// Initialize Firebase app (singleton pattern)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firebase services
const auth = getAuth(app); // Firebase authentication
const googleProvider = new GoogleAuthProvider(); // Google auth provider
const facebookProvider = new FacebookAuthProvider(); // Google auth provider
const db = getFirestore(app); // Firestore database

export { app, auth, googleProvider, db, facebookProvider };
