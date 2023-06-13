import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA0zLnsAAwHJk3SFLAI_RZo748ZTTZ4tR0",
  authDomain: "disneyclone-27897.firebaseapp.com",
  projectId: "disneyclone-27897",
  storageBucket: "disneyclone-27897.appspot.com",
  messagingSenderId: "165959585339",
  appId: "1:165959585339:web:c154975494a616d55a161e",
  measurementId: "G-PL93YX2YHM"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
