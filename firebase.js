import firebase from "firebase";
// import { initializeApp } from "firebase/app";

//web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVC4eg-uarPHwGzxEz59pzEO0D0AI4f0s",
    authDomain: "whatsapp-2-1040a.firebaseapp.com",
    projectId: "whatsapp-2-1040a",
    storageBucket: "whatsapp-2-1040a.appspot.com",
    messagingSenderId: "803503608683",
    appId: "1:803503608683:web:89b83425ffa095f908322e"
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    auth,
    provider
}