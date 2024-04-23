let firebase = require('firebase');

let firebaseConfig = {
    apiKey: "AIzaSyAT9Pp_W1HJw6UTz4GClQzdtkkJDlSA45k",
    authDomain: "project-519f1.firebaseapp.com",
    databaseURL: "https://project-519f1-default-rtdb.firebaseio.com",
    projectId: "project-519f1",
    storageBucket: "project-519f1.appspot.com",
    messagingSenderId: "328122352043",
    appId: "1:328122352043:web:a9d87200c5bd59f19152ee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


module.exports = firebase;