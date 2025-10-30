// src/pages/AboutUs.jsx
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./style/about.css"; // ✅ CSS file

// ✅ Exported Carousel component (for reuse in Home.jsx)
export function SymptomCarousel() {
  const sliderRef = useRef(null);

  const steps = [
    {
      title: "1. Open Symptom when you start feeling unwell",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      title: "2. Select your risk factors",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
    {
      title: "3. Add your initial symptoms",
      image: "https://cdn-icons-png.flaticon.com/512/4139/4139973.png",
    },
    {
      title: "4. Answer some complementary questions",
      image: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    },
    {
      title: "5. Get the most probable conditions",
      image: "https://cdn-icons-png.flaticon.com/512/4322/4322998.png",
    },
    {
      title: "6. Start interview",
      image: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
      button: true,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="carousel-section">
      <h2 className="carousel-title">How Symptom Works</h2>
      <p className="carousel-subtitle">
        Our intelligent assistant helps you analyze your symptoms step-by-step
        to make confident health decisions.
      </p>

      <div className="carousel-arrows">
        <button onClick={() => sliderRef.current.slickPrev()} className="arrow-btn">
          &#8592;
        </button>
        <button onClick={() => sliderRef.current.slickNext()} className="arrow-btn">
          &#8594;
        </button>
      </div>

      <div className="carousel-container">
        <Slider ref={sliderRef} {...settings}>
          {steps.map((step, index) => (
            <div key={index} className="carousel-card">
              <img src={step.image} alt={step.title} className="carousel-img" />
              <p className="carousel-text">{step.title}</p>
              {step.button && <button className="carousel-btn">Start Interview</button>}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

// ✅ Default export for About page
export default function AboutUs() {
  return (
    <div className="about-page">
      <Header />
      <main className="about-main">
        <SymptomCarousel />
      </main>
      <Footer />
    </div>
  );
}
