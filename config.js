import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAerYPm3-YOub4Sou0NA_we5084hkbV1Ak",
    authDomain: "booksanta-39d37.firebaseapp.com",
    databaseURL: "https://booksanta-39d37.firebaseio.com",
    projectId: "booksanta-39d37",
    storageBucket: "booksanta-39d37.appspot.com",
    messagingSenderId: "849866934103",
    appId: "1:849866934103:web:eddbe926cd230717e4a012"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();