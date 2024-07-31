// src/libs/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDF8eOXKQNJc7PFe_59z1djCsfpU2CRb44",
    authDomain: "pcf-ae.firebaseapp.com",
    projectId: "pcf-ae",
    storageBucket: "pcf-ae.appspot.com",
    messagingSenderId: "1011868543052",
    appId: "1:1011868543052:web:43536b57da839bcd7eace9",
    measurementId: "G-HS436L9DWH"
  };


// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL };