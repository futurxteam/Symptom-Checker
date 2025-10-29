// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Interview from "./pages/Interview";
import Header from "./components/header";
import Footer from "./components/footer";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main content */}
      <main className="flex-grow">
        <section className="text-center py-20 bg-gradient-to-b from-teal-50 to-white">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your Health Assistant, Now in Your Pocket.
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Experience personalized symptom analysis and health anytime, anywhere with Arogyanidhi SmartCare.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}


export default App;
