// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLinOJO1X_oTxywLwRBibKPSHfCxbqjGU",
    authDomain: "petproject-27a6b.firebaseapp.com",
    projectId: "petproject-27a6b",
    storageBucket: "petproject-27a6b.appspot.com",
    messagingSenderId: "370622855585",
    appId: "1:370622855585:web:56788af6dc5825bd9eb3e0",
    measurementId: "G-TXHJM4CZ3Z"
   
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


export default app;
