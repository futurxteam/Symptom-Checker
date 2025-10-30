import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUs() {
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
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] text-gray-800">
      {/* Header */}
      <main className="flex-1 flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#d3f2f0] to-white">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
          How Symptom Works
        </h2>
        <p className="text-gray-700 max-w-2xl text-lg mb-10">
          Our intelligent assistant helps you analyze your symptoms step-by-step
          to make confident health decisions.
        </p>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Carousel */}
        <div className="w-full max-w-6xl mb-12">
          <Slider ref={sliderRef} {...settings}>
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center px-8 py-10 mx-4 rounded-2xl bg-[#fffaf4] shadow-lg border border-gray-100 h-[460px] transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-56 h-56 object-contain mb-8"
                />
                <p className="text-xl font-medium text-gray-800 leading-snug max-w-sm mb-4">
                  {step.title}
                </p>
                {step.button && (
                  <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                    Start Interview
                  </button>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto bg-gray-100 text-center p-4 text-sm text-gray-600">
        © 2025 Symptom. All rights reserved.
      </footer>
    </div>
  );
}
