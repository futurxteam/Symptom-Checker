import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./style/header.css";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="SmartCare" className="logo" />
        <h1 className="app-name">Symptom Checker SmartCare</h1>
      </div>

      <nav className="nav-links">
        <a href="/about">About Us</a>
        <a href="/business">Business</a>

        {/* Apps Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Apps ▼</button>
          <div className="dropdown-content">
            <a href="/apps/ios">iOS</a>
            <a href="/apps/android">Android</a>
          </div>
        </div>

        {/* Language Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">
            {language === "en" ? "English ▼" : "Malayalam ▼"}
          </button>
          <div className="dropdown-content">
            <a
              href="#"
              className={language === "en" ? "active-lang" : ""}
              onClick={() => toggleLanguage("en")}
            >
              English
            </a>
            <a
              href="#"
              className={language === "ml" ? "active-lang" : ""}
              onClick={() => toggleLanguage("ml")}
            >
              Malayalam
            </a>
          </div>
        </div>

        <a href="/interview" className="btn start-btn">Start Interview</a>
        <a href="/login" className="btn login-btn">Login</a>
      </nav>
    </header>
  );
}
