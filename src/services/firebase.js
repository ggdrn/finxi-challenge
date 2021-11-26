import firebase from "firebase";

let config = ({
    apiKey: "AIzaSyDY7lHAdr-Zkk9PYmmBb2bjmvgYRlITrBQ",
    authDomain: "finxi-challange.firebaseapp.com",
    databaseURL: "https://finxi-challange.firebaseio.com",
    projectId: "finxi-challange",
    storageBucket: "finxi-challange.appspot.com",
    messagingSenderId: "229285285401",
    appId: "1:229285285401:web:04c4b28dcb933405b46488",
    measurementId: "G-0VWHFGJSJF"
});

firebase.initializeApp(config);

export const fire = firebase;
export const db = firebase.firestore();
export const authLogin = firebase.auth();

db.settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

db.enablePersistence().catch(function (err) {
    console.log(err.code, "firestore");
});
