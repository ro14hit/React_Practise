// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("pepsi",import.meta.env.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogzee-a0eae.firebaseapp.com",
  projectId: "blogzee-a0eae",
  storageBucket: "blogzee-a0eae.appspot.com",
  messagingSenderId: "385990003190",
  appId: "1:385990003190:web:a41083a5972321c88fdfd7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);