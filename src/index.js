import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSlxo6j4xmQZIkn_UIhjDU1dfcuu8lwIQ",
    authDomain: "cart-project-1026.firebaseapp.com",
    projectId: "cart-project-1026",
    storageBucket: "cart-project-1026.appspot.com",
    messagingSenderId: "303355439357",
    appId: "1:303355439357:web:2d80d1f01ba67e0a6a3694"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db
const db = firebaseApp.firestore();

export { db };

ReactDOM.render(<App />, document.getElementById("root"));

