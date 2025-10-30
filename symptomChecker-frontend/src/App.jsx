// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header"; 
import { LanguageProvider } from "./context/LanguageContext"; // ✅ Import provider
import AboutUs from "./pages/about";

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
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
