// firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const provider = new GoogleAuthProvider(); // Google auth provider
const db = getFirestore(app); // Firestore database

// Exports
export { app, auth, provider, db };
