import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Your Health Assistant, <br />
            <span className="text-gray-900">Now in Your Pocket.</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Experience personalized symptom analysis and health anytime,
            anywhere with <strong>Symptom</strong> Mobile App.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Symptom Tracking on the Go",
              "Secure Health History Access",
              "Quick Access to Results",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-teal-600 mr-2" /> {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 mb-2">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
          </div>

          <p className="text-gray-500 text-sm mt-2">
            ⭐ 4.8/5 Stars • 50K+ Happy Users
          </p>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src="https://cdn.dribbble.com/userupload/12050347/file/original-2392b4cb9f054358fcb1d0c248d6cb9b.png?resize=800x600"
            alt="Symptom Mobile App"
            className="w-[280px] md:w-[340px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
