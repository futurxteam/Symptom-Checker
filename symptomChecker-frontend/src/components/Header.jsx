import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./style/header.css";
import { Link } from "react-router-dom"; // Import Link

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false); // toggle for mobile menu

  // States for mobile dropdowns
  const [businessOpen, setBusinessOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Close dropdowns when main menu is closed
  useEffect(() => {
    if (!menuOpen) {
      setBusinessOpen(false);
      setAppsOpen(false);
      setLangOpen(false);
    }
  }, [menuOpen]);

  // Helper to close all menus
  const closeAllMenus = () => {
    setMenuOpen(false);
    // The useEffect above will handle closing the dropdowns
  };

  return (
    <header className="header">
      {/* Left side - logo */}
      <div className="header-left">
        <Link to="/" className="home-link" onClick={closeAllMenus}>
          <img src="/logo.png" alt="SmartCare" className="logo" />
          <h1 className="app-name">Symptom Checker SmartCare</h1>
        </Link>
      </div>

      {/* Hamburger icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* Use Link for internal navigation */}
        <Link to="/about" onClick={closeAllMenus}>
          About Us
        </Link>

        {/* --- Business Dropdown --- */}
        <div className={`dropdown ${businessOpen ? "open" : ""}`}>
          <button className="dropbtn" onClick={() => setBusinessOpen(!businessOpen)}>
            Business ▼
          </button>
          <div className="dropdown-content">
            <p className="dropdown-text">
              Learn more about our business collaborations and partnerships.
            </p>
            {/* External links must still use <a> */}
            <a
              href="https://futureaceacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAllMenus}
            >
              Visit FutureAce Academy →
            </a>
          </div>
        </div>

        {/* --- Apps Dropdown --- */}
        <div className={`dropdown ${appsOpen ? "open" : ""}`}>
          <button className="dropbtn" onClick={() => setAppsOpen(!appsOpen)}>
            Apps ▼
          </button>
          <div className="dropdown-content">
            <Link to="/apps/ios" onClick={closeAllMenus}>
              iOS
            </Link>
            <Link to="/apps/android" onClick={closeAllMenus}>
              Android
            </Link>
          </div>
        </div>

        {/* --- Language Dropdown --- */}
        <div className={`dropdown ${langOpen ? "open" : ""}`}>
          <button className="dropbtn" onClick={() => setLangOpen(!langOpen)}>
            {language === "en" ? "English ▼" : "Malayalam ▼"}
          </button>
          <div className="dropdown-content">
            {/* These are fine as <a> since they only trigger onClick */}
            <a
              href="#"
              className={language === "en" ? "active-lang" : ""}
              onClick={(e) => {
                e.preventDefault();
                toggleLanguage("en");
                closeAllMenus();
              }}
            >
              English
            </a>
            <a
              href="#"
              className={language === "ml" ? "active-lang" : ""}
              onClick={(e) => {
                e.preventDefault();
                toggleLanguage("ml");
                closeAllMenus();
              }}
            >
              Malayalam
            </a>
          </div>
        </div>

        {/* --- Action Buttons --- */}
        <Link to="/interview" className="btn start-btn" onClick={closeAllMenus}>
          Start Interview
        </Link>
        <Link to="/login" className="btn login-btn" onClick={closeAllMenus}>
          Login
        </Link>
      </nav>
    </header>
  );
}
