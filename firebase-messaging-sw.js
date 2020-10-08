importScripts('https://www.gstatic.com/firebasejs/7.22.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.22.1/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyAojM5xILvGUjp-RWYHV-sdNAGnr2Lgjn4",
    authDomain: "portal-initiations.firebaseapp.com",
    projectId: "portal-initiations",
    messagingSenderId: "218153097513",
    appId: "1:218153097513:web:9a6160162eab56229bbf38"
  };

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();
