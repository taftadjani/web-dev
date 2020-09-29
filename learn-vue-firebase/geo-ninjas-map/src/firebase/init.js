import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyDicuWVm_qk7b7MTAsiuju8ErPcKPKChMM",
    authDomain: "geo-ninjas-a35cf.firebaseapp.com",
    databaseURL: "https://geo-ninjas-a35cf.firebaseio.com",
    projectId: "geo-ninjas-a35cf",
    storageBucket: "geo-ninjas-a35cf.appspot.com",
    messagingSenderId: "164384618078",
    appId: "1:164384618078:web:f5f88d71acf81cc03a66cf"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()