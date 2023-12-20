// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9hvPiQ7-OaWQtd7jN02PTpatK3dQsb50",
  authDomain: "netflix-111111.firebaseapp.com",
  projectId: "netflix-111111",
  storageBucket: "netflix-111111.appspot.com",
  messagingSenderId: "1034073925326",
  appId: "1:1034073925326:web:5ce64bbc912ceb992d129f",
  measurementId: "G-RG408H2MW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 