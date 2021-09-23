// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0VCAZREqY44utBYarAhyZnKPEvwAeJ6U",
  authDomain: "challenge-108f0.firebaseapp.com",
  projectId: "challenge-108f0",
  storageBucket: "challenge-108f0.appspot.com",
  messagingSenderId: "809017470608",
  appId: "1:809017470608:web:742d846734b332bd627215",
  measurementId: "G-6C81RZX87Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };