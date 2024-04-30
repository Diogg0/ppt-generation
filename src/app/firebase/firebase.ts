// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5JRYg4oetpUDcS5ovfl7XOgTA8yNaaio",
  authDomain: "mini-project-9d5ad.firebaseapp.com",
  projectId: "mini-project-9d5ad",
  storageBucket: "mini-project-9d5ad.appspot.com",
  messagingSenderId: "369242932100",
  appId: "1:369242932100:web:a47459cc5ae8809be6d3d1"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

const firestore = getFirestore(app);

export { auth, firestore, app };