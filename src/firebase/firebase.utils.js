import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAd3LhXofILGGyW8rOgtTjnKkzAoFovbxM",
  authDomain: "crwn-db-2c9ab.firebaseapp.com",
  projectId: "crwn-db-2c9ab",
  storageBucket: "crwn-db-2c9ab.appspot.com",
  messagingSenderId: "768750482185",
  appId: "1:768750482185:web:86dca66a7879475a9959d8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
