import firebase from "firebase";
import "@firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXbP_jietrX-a6SekKOEaoM9eTURcmh4A",
  authDomain: "minigh-64100.firebaseapp.com",
  databaseURL: "https://minigh-64100.firebaseio.com",
  projectId: "minigh-64100",
  storageBucket: "minigh-64100.appspot.com",
  messagingSenderId: "1042856346176",
  appId: "1:1042856346176:web:8ee5e6e6733642b05255a5",
  measurementId: "G-SX4WXCLY3Q"
});

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
