import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDTaYwkI-onUTZvenj6OIxJRP5SKaBDr5s",
    authDomain: "crwn-db-85b6c.firebaseapp.com",
    databaseURL: "https://crwn-db-85b6c.firebaseio.com",
    projectId: "crwn-db-85b6c",
    storageBucket: "crwn-db-85b6c.appspot.com",
    messagingSenderId: "434696355663",
    appId: "1:434696355663:web:5a101ce9429f8dc9f7cf3a",
    measurementId: "G-G67KNXFWD2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
