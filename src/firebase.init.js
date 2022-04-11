import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoxS1GPN9IyaBn9vzff-4rzOOuREV1a5M",
  authDomain: "khulna-car-services.firebaseapp.com",
  projectId: "khulna-car-services",
  storageBucket: "khulna-car-services.appspot.com",
  messagingSenderId: "705358340052",
  appId: "1:705358340052:web:9089d9a62191993c300041",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
