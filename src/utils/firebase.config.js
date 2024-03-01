// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJlRs4Bx8rfFJjdBpt1Y8vspPQc3QSW1c",
    authDomain: "fixnest-e746a.firebaseapp.com",
    projectId: "fixnest-e746a",
    storageBucket: "fixnest-e746a.appspot.com",
    messagingSenderId: "383372135603",
    appId: "1:383372135603:web:1901da80cbd1680ec4f4c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;