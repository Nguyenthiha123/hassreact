import firebase from 'firebase/app';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCPEpYMl3wrUTOFimtdVfUu9JTYDeVdNNA",
    authDomain: "asmreact-71d2c.firebaseapp.com",
    databaseURL: "https://asmreact-71d2c.firebaseio.com",
    projectId: "asmreact-71d2c",
    storageBucket: "asmreact-71d2c.appspot.com",
    messagingSenderId: "264464648316",
    appId: "1:264464648316:web:580ab77d17e4438f29e1f9",
    measurementId: "G-XDCZ4FYZN6"
};



firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();
export { storage, firebase as default };