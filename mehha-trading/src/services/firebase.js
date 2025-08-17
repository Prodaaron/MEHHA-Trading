// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuHqu_5SRz2QWFLA0j5aNU07B9M4AyZ2M",
  authDomain: "mehha-db.firebaseapp.com",
  projectId: "mehha-db",
  storageBucket: "mehha-db.firebasestorage.app",
  messagingSenderId: "1011415226817",
  appId: "1:1011415226817:web:e9c9071a41135454857740",
  measurementId: "G-J7PKEJHWFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);