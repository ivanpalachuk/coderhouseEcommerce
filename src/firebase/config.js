
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAihH_RRraVKY64m4h2Jw2ugvh0wHGQbJw",
    authDomain: "catitostore-5f7af.firebaseapp.com",
    projectId: "catitostore-5f7af",
    storageBucket: "catitostore-5f7af.appspot.com",
    messagingSenderId: "813370009617",
    appId: "1:813370009617:web:e345382e363ff3a12869b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function iniFirebase() {
    return app
}


