// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Insert here your FIREBASE_API_KEY",
  authDomain: "Insert here your FIREBASE_AUTH_DOMAIN",
  projectId: "Insert here your FIREBASE_PROJECT_ID",
  storageBucket: "Insert here your FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "Insert here your FIREBASE_MESSAGING_SENDER_ID",
  appId: "Insert here your FIREBASE_APP_ID",
  measurementId: "Insert here your FIREBASE_MEASUREMENT_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
