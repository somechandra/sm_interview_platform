// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSA2u3VhdKrLIQE4qzkHHRHnMmbgTvfIc",
  authDomain: "interviewpro-2db10.firebaseapp.com",
  projectId: "interviewpro-2db10",
  storageBucket: "interviewpro-2db10.firebasestorage.app",
  messagingSenderId: "739618142543",
  appId: "1:739618142543:web:1023470963d6fa452eed3a",
  measurementId: "G-LCEVH89RDD",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
