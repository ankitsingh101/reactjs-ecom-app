import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCStKRSqnDamb8CFHAcuFnmSCSTK3u87Aw",
  authDomain: "crwn-db-69d1d.firebaseapp.com",
  databaseURL: "https://crwn-db-69d1d.firebaseio.com",
  projectId: "crwn-db-69d1d",
  storageBucket: "crwn-db-69d1d.appspot.com",
  messagingSenderId: "781459866538",
  appId: "1:781459866538:web:4d2a88c15b04f9e89761d3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
