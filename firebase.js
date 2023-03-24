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
  apiKey: "AIzaSyD5s2yaIL-4Y4vQrSCxattMbgSP6KcbuMY",
  authDomain: "expo-webrtc.firebaseapp.com",
  projectId: "expo-webrtc",
  storageBucket: "expo-webrtc.appspot.com",
  messagingSenderId: "873013349706",
  appId: "1:873013349706:web:38a4ba283c2011737785b3",
  measurementId: "G-K94JN450WQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
