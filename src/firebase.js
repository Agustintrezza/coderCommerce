// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAspIaACto_JDKC21Eoi63piwnWMxY7wNc",
  authDomain: "fir-auth-c901e.firebaseapp.com",
  projectId: "fir-auth-c901e",
  storageBucket: "fir-auth-c901e.appspot.com",
  messagingSenderId: "29568644232",
  appId: "1:29568644232:web:bdddf462e6dbb708da1b3d",
  measurementId: "G-B1N9MB3TLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

export default app