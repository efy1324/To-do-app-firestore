import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5iBpn0KGhnjFdqBDBP84eK_kFubsX3FM",
  authDomain: "todo-f2cec.firebaseapp.com",
  projectId: "todo-f2cec",
  storageBucket: "todo-f2cec.appspot.com",
  messagingSenderId: "959495097259",
  appId: "1:959495097259:web:b57722d08c006fff4ae0ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)