// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth' 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqjMixumkqzL_qz0WG84A0z_BIc7JbfCo",
  authDomain: "react-native-login-70ae5.firebaseapp.com",
  projectId: "react-native-login-70ae5",
  storageBucket: "react-native-login-70ae5.appspot.com",
  messagingSenderId: "193533309175",
  appId: "1:193533309175:web:5653cb0fd16fafebaae3f2",
  measurementId: "G-VXLNTVRGKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);