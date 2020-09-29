 import firebase from 'firebase'
 import firestore from 'firebase/firestore'

 // Your web app's Firebase configuration
 var config = {
     apiKey: "AIzaSyBRrMzUGMYpVhjwsAZ-BHAb9_otF9Wf_yw",
     authDomain: "ninja-chat-9bf81.firebaseapp.com",
     databaseURL: "https://ninja-chat-9bf81.firebaseio.com",
     projectId: "ninja-chat-9bf81",
     storageBucket: "ninja-chat-9bf81.appspot.com",
     messagingSenderId: "1016153808343",
     appId: "1:1016153808343:web:f83845a45d3ee5e4033f92"
 };
 // Initialize Firebase
 const firebaseApp = firebase.initializeApp(config);
 export default firebaseApp.firestore()