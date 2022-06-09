// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDBZj0PoUQhZAY8WTTUqNjvK8UULgO_a0",
    authDomain: "e-shop-mern-clone.firebaseapp.com",
    projectId: "e-shop-mern-clone",
    storageBucket: "e-shop-mern-clone.appspot.com",
    messagingSenderId: "520681085040",
    appId: "1:520681085040:web:58c642d61c0e6a4b613cb5",
    measurementId: "G-0TPEDFMK6N"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app
