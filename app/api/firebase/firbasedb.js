// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPK2RR9efGGfTUjh3xf5IBX3Hx4O15rbQ",
  authDomain: "zizonbeat.firebaseapp.com",
  projectId: "zizonbeat",
  storageBucket: "zizonbeat.appspot.com",
  messagingSenderId: "553427904813",
  appId: "1:553427904813:web:124d4d3b3cf1008e428ba4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };