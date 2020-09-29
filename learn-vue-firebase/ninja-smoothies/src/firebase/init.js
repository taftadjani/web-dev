import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBwgAyqjjQAHn768hqETXpwC5RbZEFgA6A",
    authDomain: "ninja-smoothies-83040.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-83040.firebaseio.com",
    projectId: "ninja-smoothies-83040",
    storageBucket: "ninja-smoothies-83040.appspot.com",
    messagingSenderId: "272652187880",
    appId: "1:272652187880:web:9b182d8fdb4808393ab15d"
};

const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()