// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./style/Home.css";
import { useLanguage } from "../context/LanguageContext"; // ✅ import context

export default function Home() {
  const { language } = useLanguage(); // ✅ get current language from cookie/context

  return (
    <div className="home-wrapper">
      <Header />

      <main className="home-container">
        <div className="home-content">
          {/* Left Section */}
          <div className="home-left">
            {language === "ml" ? (
              <>
                <h1>
                  നിങ്ങളുടെ ആരോഗ്യ സഹായി,
                  <br />
                  ഇപ്പോൾ നിങ്ങളുടെ പോക്കറ്റിൽ.
                </h1>
                <p>
                  വ്യക്തിഗത ലക്ഷണ വിശകലനവും ആരോഗ്യം ലഭ്യമായിടത്തോളം എളുപ്പവും{" "}
                  <strong>Symptom</strong> മൊബൈൽ ആപ്പിലൂടെ അനുഭവിക്കുക.
                </p>

                <ul className="feature-list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i> എവിടെയും
                    ലക്ഷണങ്ങൾ ട്രാക്ക് ചെയ്യാം
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> സുരക്ഷിതമായ
                    ആരോഗ്യ ചരിത്ര ആക്സസ്
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> വേഗത്തിലുള്ള
                    ഫലം ലഭ്യമാണ്
                  </li>
                </ul>

                <div className="store-buttons">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                  />
                </div>

                <p className="rating">⭐ 4.8/5 നക്ഷത്രങ്ങൾ • 50K+ സന്തുഷ്ട ഉപയോക്താക്കൾ</p>
              </>
            ) : (
              <>
                <h1>
                  Your Health Assistant,
                  <br />
                  Now in Your Pocket.
                </h1>
                <p>
                  Experience personalized symptom analysis and health anytime,
                  anywhere with <strong>Symptom</strong> Mobile App.
                </p>

                <ul className="feature-list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Symptom Tracking on
                    the Go
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Secure Health
                    History Access
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Quick Access to
                    Results
                  </li>
                </ul>

                <div className="store-buttons">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                  />
                </div>

                <p className="rating">⭐ 4.8/5 Stars • 50K+ Happy Users</p>
              </>
            )}
          </div>

          {/* Right Section */}
          <div className="home-right">
            <img
              src="https://cdn.dribbble.com/userupload/12050347/file/original-2392b4cb9f054358fcb1d0c248d6cb9b.png?resize=800x600"
              alt="App Preview"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
