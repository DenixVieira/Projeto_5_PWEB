
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBhVA1uSSuARL3x-9UNep8YK15sXxpXSUw",
  authDomain: "projetopweb-cd15d.firebaseapp.com",
  projectId: "projetopweb-cd15d",
  storageBucket: "projetopweb-cd15d.appspot.com",
  messagingSenderId: "798520436648",
  appId: "1:798520436648:web:4eee8a6cae6b6952dc5f9d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)