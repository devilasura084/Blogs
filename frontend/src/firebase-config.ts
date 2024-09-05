// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW1x77yumxT41CZaZG_U9Kpvl1bb-MMbc",
  authDomain: "blogs-5162f.firebaseapp.com",
  projectId: "blogs-5162f",
  storageBucket: "blogs-5162f.appspot.com",
  messagingSenderId: "526715614179",
  appId: "1:526715614179:web:5be078843e5dfb9d22a6d6",
  measurementId: "G-BQK3CW4W20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider;