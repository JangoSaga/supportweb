import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBbaGMFMqn00hBWMI4MvyfvF-qyVfFzTBE",
  authDomain: "support-website-f30d3.firebaseapp.com",
  projectId: "support-website-f30d3",
  storageBucket: "support-website-f30d3.firebasestorage.app",
  messagingSenderId: "857633245800",
  appId: "1:857633245800:web:e77a74f870fac76d8689dd",
  measurementId: "G-58X4HM4T9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
