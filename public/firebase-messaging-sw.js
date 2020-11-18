importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBhPtazrwmEdlG_HgEnfkgsJ5-pP1hmHvw",
    authDomain: "push-49ddc.firebaseapp.com",
    databaseURL: "https://push-49ddc.firebaseio.com",
    projectId: "push-49ddc",
    storageBucket: "push-49ddc.appspot.com",
    messagingSenderId: "878289771070",
    appId: "1:878289771070:web:97ba453625666dabd54f6f"
});

const messaging = firebase.messaging();