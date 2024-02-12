// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcBTvUCrhVoK0GEmL9WkrKn0nUZnpOIr4",
  authDomain: "netflixgpt-6db49.firebaseapp.com",
  projectId: "netflixgpt-6db49",
  storageBucket: "netflixgpt-6db49.appspot.com",
  messagingSenderId: "260210615428",
  appId: "1:260210615428:web:1efbc65f5d068a8c338ed1",
  measurementId: "G-9J3J049KER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);