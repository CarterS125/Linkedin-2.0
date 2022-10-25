import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBEnvQrohICBTQKe75hdQ18jLIDAPu54E",
  authDomain: "linkedin-clone-yt.firebaseapp.com",
  projectId: "linkedin-clone-yt",
  storageBucket: "linkedin-clone-yt.appspot.com",
  messagingSenderId: "230998605524",
  appId: "1:230998605524:web:afd1819d86f44eb47c8541",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
