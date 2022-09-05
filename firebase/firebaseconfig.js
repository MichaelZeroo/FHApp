// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQtmc-jklH9CIOakRD9anvh1qrY0BTQZY",
  authDomain: "franklin-hospital.firebaseapp.com",
  projectId: "franklin-hospital",
  storageBucket: "franklin-hospital.appspot.com",
  messagingSenderId: "303845554210",
  appId: "1:303845554210:web:1a3dc989ac6937f158727b",
  measurementId: "G-9C7MZRDT9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
//const analytics = getAnalytics(app);