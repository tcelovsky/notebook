// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHIA3Hb9uVM_fwNUhcAFUEjnXM5OMQ6As",
  authDomain: "notebook-95b08.firebaseapp.com",
  projectId: "notebook-95b08",
  storageBucket: "notebook-95b08.appspot.com",
  messagingSenderId: "439282287522",
  appId: "1:439282287522:web:21419463da93d7889fa8fb",
  measurementId: "G-1WDH7C8ZWJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
