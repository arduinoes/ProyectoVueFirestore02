import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC-yjMEOwF0FAyC4Dsi3IqZcHqoZit4gyI",
    authDomain: "tiendaarduinoes.firebaseapp.com",
    projectId: "tiendaarduinoes",
    storageBucket: "tiendaarduinoes.appspot.com",
    messagingSenderId: "386838491375",
    appId: "1:386838491375:web:518d05af8440e82cb6ab1a",
    measurementId: "G-L90G5CE35V"
  };

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth, storage };

createApp(App).use(store).use(router).mount('#app')

