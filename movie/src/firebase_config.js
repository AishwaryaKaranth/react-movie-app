import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBVC6nQUxm4rKVPIUk99YAYld85U4zVsw0",
    authDomain: "movie-db-a40e8.firebaseapp.com",
    projectId: "movie-db-a40e8",
    storageBucket: "movie-db-a40e8.appspot.com",
    messagingSenderId: "459657868162",
    appId: "1:459657868162:web:7cd21e63edf3d4cf4b559b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore()
  export default {db};