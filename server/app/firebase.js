// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqLf5HUA4Hm2l6IKSqXsNV38gRlfB8Sy8",
    authDomain: "thingortwo-test.firebaseapp.com",
    projectId: "thingortwo-test",
    storageBucket: "thingortwo-test.appspot.com",
    messagingSenderId: "317859902931",
    appId: "1:317859902931:web:02563091f796787218ab26"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getFirestore();
export default database;