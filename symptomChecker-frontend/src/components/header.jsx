import React from "react";
import "./style/header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Symptom Checker</h1>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/interview">Interview</a>
        <a href="/about">About</a>
      </div>
    </header>
  );
}
