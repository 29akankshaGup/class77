import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDSF-2crdJkLH3C5PwXb4X1AXgE37DuEwM",
    authDomain: "booksantaapp-fe96e.firebaseapp.com",
    projectId: "booksantaapp-fe96e",
    storageBucket: "booksantaapp-fe96e.appspot.com",
    messagingSenderId: "717658012980",
    appId: "1:717658012980:web:9c4519e1944abe0706b961"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();