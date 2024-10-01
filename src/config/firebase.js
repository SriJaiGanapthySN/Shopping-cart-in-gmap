import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCRCWQFX2x15A8lC6j2-BAJjdXNMz8EnRQ",
    authDomain: "shopon-31559.firebaseapp.com",
    projectId: "shopon-31559",
    storageBucket: "shopon-31559.appspot.com",
    messagingSenderId: "142862392446",
    appId: "1:142862392446:web:d4a79497d5528d5f958c2f",
    measurementId: "G-91Z6MGD7JV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
