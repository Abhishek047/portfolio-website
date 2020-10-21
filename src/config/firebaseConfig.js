import * as firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyD-HPmW5lXW7G2Ha0J0JLXnRRRvvWR40ZI",
  authDomain: "my-portfolio-edd60.firebaseapp.com",
  databaseURL: "https://my-portfolio-edd60.firebaseio.com",
  projectId: "my-portfolio-edd60",
  storageBucket: "my-portfolio-edd60.appspot.com",
  messagingSenderId: "927673314838",
  appId: "1:927673314838:web:276b4a9d18737d24184f37",
  measurementId: "G-JHLDVBFV92"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firebaseStore = firebase.storage();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseFireStore, firebaseStore, timestamp };