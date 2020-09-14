import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD_wotG10nScPZ9qpglJzf4c4jLNjFVcZk",
  authDomain: "my-facebook-eebf2.firebaseapp.com",
  databaseURL: "https://my-facebook-eebf2.firebaseio.com",
  projectId: "my-facebook-eebf2",
  storageBucket: "my-facebook-eebf2.appspot.com",
  messagingSenderId: "169322810175",
  appId: "1:169322810175:web:47a73f6d9e4c9f651da18a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
