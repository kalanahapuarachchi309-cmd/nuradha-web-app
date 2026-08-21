"use client";

import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    image: "https://cdn.livestreaminfo.com/assets/posters/1787221277712-Leading_fishing_winch_manufacture.png",
    title: "Sri Lanka’s Leading Manufacturer of Marine Winches, Haulers & Fishing Equipment",
  },
  {
    image: "https://cdn.livestreaminfo.com/assets/posters/1787221256460-Trusted_Hydraulic_Partner.png",
    title: "Your Trusted Partner in Hydraulic Solutions",
  },
  {
    image: "https://cdn.livestreaminfo.com/assets/posters/1787220089721-Custom_Sealing_Solutions__2_.png",
    title: "Custom Sealing Solutions for Every Application",
  },
  {
    image: "https://cdn.livestreaminfo.com/assets/posters/1787221405508-engineering-fabrication-hero-.png",
    title: "Precision Turning, Milling, Welding & Fabrication—All Under One Roof",
  },
  {
    image: "https://cdn.livestreaminfo.com/assets/posters/1787221332700-Skilled_Proffesional.png",
    title: "Skilled Professionals. Proven Experience. Ready to Support You.",
  },
];

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(showNext, 4500);
    return () => window.clearInterval(timer);
  }, [showNext]);

  return (
    <section className="banner-section native-home-hero" aria-label="Nuradha highlights">
      <div className="native-home-slider">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              className={`swiper-slide native-home-slide${isActive ? " swiper-slide-active" : ""}`}
              aria-hidden={!isActive}
              key={slide.image}
            >
              {isActive ? (
                <div
                  key={`${slide.image}-${activeIndex}`}
                  className="slide-bg-img active-zoom-out"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              ) : (
                <div
                  className="slide-bg-img"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              )}
              <div className="hero-slide-overlay" />
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner text-center slider-text">
                    {isActive && (
                      <h1 key={activeIndex} className="animate-word-entrance">
                        {slide.title}
                      </h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="banner-slider-nav">
        <button
          type="button"
          className="banner-slider-control banner-slider-button-prev"
          aria-label="Previous slide"
          onClick={showPrevious}
        />
        <button
          type="button"
          className="banner-slider-control banner-slider-button-next"
          aria-label="Next slide"
          onClick={showNext}
        />
      </div>
    </section>
  );
}

