// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-z2XoEsn6leTJonFtFM_Asd--ODPwNzk",
  authDomain: "assignment-10-chef-recipe-hunt.firebaseapp.com",
  projectId: "assignment-10-chef-recipe-hunt",
  storageBucket: "assignment-10-chef-recipe-hunt.appspot.com",
  messagingSenderId: "393595595795",
  appId: "1:393595595795:web:8be654b325d3ad889c63e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;