
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkqX0WKI2eWqupR-iEgNCTm5Amuz0ZcK4",
  authDomain: "exclusive-1.firebaseapp.com",
  projectId: "exclusive-1",
  storageBucket: "exclusive-1.appspot.com",
  messagingSenderId: "975181578415",
  appId: "1:975181578415:web:f9fece82c16dea5677945a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app)

export {auth, storage}