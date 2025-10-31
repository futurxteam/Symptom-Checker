// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from "./context/LanguageContext"; // ✅ Import provider
import AboutUs from "./pages/about";
import Signup from "./pages/signup";
import Login from "./pages/login";


function App() {
  return (
    <LanguageProvider>
      <Router>
         {/* ✅ Available on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* You can add more pages here like: */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
