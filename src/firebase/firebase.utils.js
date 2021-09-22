import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBH1ZP8-4JJZulcxYW2DuyIwC4l7un3OQ8",
  authDomain: "crwn-db-c8d3a.firebaseapp.com",
  projectId: "crwn-db-c8d3a",
  storageBucket: "crwn-db-c8d3a.appspot.com",
  messagingSenderId: "27314385940",
  appId: "1:27314385940:web:9a2274a3f505c5bc48a301",
  measurementId: "G-516V8J5KQ4",
};

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error while creating new user", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;