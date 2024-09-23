import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1gH554TRUSmq76oIUtFwoHrmPi6chqa8",
  authDomain: "habita-web.firebaseapp.com",
  projectId: "habita-web",
  storageBucket: "habita-web.appspot.com",
  messagingSenderId: "475734231947",
  appId: "1:475734231947:web:dcadd51280da81d18efd8e",
  measurementId: "G-D1HCCFWKVY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
