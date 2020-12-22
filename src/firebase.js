import firebase from "firebase";

// FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyDd3Y4oHXIPy_KjwCpx7-RT-o-FU-kDwJI",
  authDomain: "e-commerce-e0e77.firebaseapp.com",
  projectId: "e-commerce-e0e77",
  storageBucket: "e-commerce-e0e77.appspot.com",
  messagingSenderId: "558177502775",
  appId: "1:558177502775:web:02987abf16f6b3f07221b2",
  measurementId: "G-CMWQ9TEJ4X"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
firebase.analytics();
// FIREBASE


