import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="home-main">
        <div className="home-grid">
          {/* Left Section */}
          <div className="home-left">
            <h1 className="home-title">
              Your Health Assistant, <br />
              <span className="highlight">Now in Your Pocket.</span>
            </h1>
            <p className="home-description">
              Experience personalized symptom analysis and health anytime,
              anywhere with <strong>Symptom</strong> Mobile App.
            </p>

            <ul className="feature-list">
              {[
                "Symptom Tracking on the Go",
                "Secure Health History Access",
                "Quick Access to Results",
              ].map((item, i) => (
                <li key={i} className="feature-item">
                  <FaCheckCircle className="icon" /> {item}
                </li>
              ))}
            </ul>

            <div className="store-links">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="store-badge"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="store-badge"
              />
            </div>

            <p className="rating-text">
              ⭐ 4.8/5 Stars • 50K+ Happy Users
            </p>
          </div>

          {/* Right Section */}
          <div className="home-right">
            <img
              src="https://cdn.dribbble.com/userupload/12050347/file/original-2392b4cb9f054358fcb1d0c248d6cb9b.png?resize=800x600"
              alt="Symptom Mobile App"
              className="app-image"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
