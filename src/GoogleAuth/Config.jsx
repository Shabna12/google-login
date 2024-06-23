import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyCVIyA43CSYK-UQEsl8MDySlHetJRxzsG0",
    authDomain: "login-6bc38.firebaseapp.com",
    projectId: "login-6bc38",
    storageBucket: "login-6bc38.appspot.com",
    messagingSenderId: "776059679989",
    appId: "1:776059679989:web:451108774a584cdd8b01bc",
    measurementId: "G-X044S3BL06"
};


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth, provider};