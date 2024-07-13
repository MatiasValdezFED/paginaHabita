import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJuP6JHUEpdT_QGAfF4XwMUGOSjvYRqkU",
  authDomain: "entre-hilos-ecommerce.firebaseapp.com",
  projectId: "entre-hilos-ecommerce",
  storageBucket: "entre-hilos-ecommerce.appspot.com",
  messagingSenderId: "738373819077",
  appId: "1:738373819077:web:634d9ff38a4ff7bbe56eac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
