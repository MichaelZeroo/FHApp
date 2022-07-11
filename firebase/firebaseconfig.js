// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCV2axNKDNlGHjnYg-ZyMn-hsqKToDghI",
  authDomain: "franklinhospitalapp.firebaseapp.com",
  projectId: "franklinhospitalapp",
  storageBucket: "franklinhospitalapp.appspot.com",
  messagingSenderId: "736901386042",
  appId: "1:736901386042:web:bd92aa5f6405e2a24a0a03",
  measurementId: "G-G4K0FQFE3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
//const analytics = getAnalytics(app);