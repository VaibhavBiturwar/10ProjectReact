// cSpell:disable
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzuieoyTzKAjsLUuY4yhdAeGKaP784_yc",
  authDomain: "vite-contact-eddf1.firebaseapp.com",
  projectId: "vite-contact-eddf1",
  storageBucket: "vite-contact-eddf1.appspot.com",
  messagingSenderId: "126033991493",
  appId: "1:126033991493:web:97a07886702631ac51d02c",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
