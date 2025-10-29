import React from "react";
import "./style/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="/logo.png"
          alt="Arogyandichi SmartCare"
          className="logo"
        />
        <h1 className="app-name">Arogyandichi SmartCare</h1>
      </div>

      <nav className="nav-links">
        <a href="/about">About Us</a>
        <a href="/business">Business</a>
        <a href="/apps">Apps</a>
        <a href="/lang">English</a>
        <a href="/interview" className="btn start-btn">
          Start Interview
        </a>
        <a href="/login" className="btn login-btn">
          Login
        </a>
      </nav>
    </header>
  );
}
