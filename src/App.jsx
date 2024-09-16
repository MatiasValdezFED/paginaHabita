import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
