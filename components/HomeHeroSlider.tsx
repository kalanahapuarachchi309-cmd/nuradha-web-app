"use client";

import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    localImage: "/assets/posters/Leading%20fishing%20winch%20manufacture.png",
    cdnImage: "https://cdn.livestreaminfo.com/assets/posters/1787221277712-Leading_fishing_winch_manufacture.png",
    titleWhite: "SRI LANKA’S LEADING MANUFACTURER OF",
    titleYellow: "MARINE WINCHES, HAULERS & FISHING EQUIPMENT",
  },
  {
    localImage: "/assets/posters/Trusted%20Hydraulic%20Partner.png",
    cdnImage: "https://cdn.livestreaminfo.com/assets/posters/1787221256460-Trusted_Hydraulic_Partner.png",
    titleWhite: "YOUR TRUSTED PARTNER IN",
    titleYellow: "HYDRAULIC SOLUTIONS",
  },
  {
    localImage: "/assets/posters/Custom%20Sealing%20Solutions.png",
    cdnImage: "https://cdn.livestreaminfo.com/assets/posters/1787220089721-Custom_Sealing_Solutions__2_.png",
    titleWhite: "CUSTOM SEALING SOLUTIONS",
    titleYellow: "FOR EVERY APPLICATION",
  },
  {
    localImage: "/assets/posters/engineering-fabrication-hero-.png",
    cdnImage: "https://cdn.livestreaminfo.com/assets/posters/1787221405508-engineering-fabrication-hero-.png",
    titleWhite: "PRECISION TURNING, MILLING, WELDING & FABRICATION",
    titleYellow: "ALL UNDER ONE ROOF",
  },
  {
    localImage: "/assets/posters/Skilled%20Proffesional.png",
    cdnImage: "https://cdn.livestreaminfo.com/assets/posters/1787221332700-Skilled_Proffesional.png",
    titleWhite: "SKILLED PROFESSIONALS. PROVEN EXPERIENCE.",
    titleYellow: "READY TO SUPPORT YOU.",
  },
];

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSources, setActiveSources] = useState<Record<number, string>>(() => {
    const initial: Record<number, string> = {};
    slides.forEach((slide, idx) => {
      initial[idx] = slide.localImage;
    });
    return initial;
  });

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }, []);

  const handleImageError = useCallback((index: number) => {
    setActiveSources((prev) => {
      const current = prev[index];
      const targetSlide = slides[index];
      if (current === targetSlide.localImage) {
        return { ...prev, [index]: targetSlide.cdnImage };
      }
      return prev;
    });
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
          const imgSrc = activeSources[index] || slide.localImage;
          return (
            <div
              className={`swiper-slide native-home-slide${isActive ? " swiper-slide-active" : ""}`}
              aria-hidden={!isActive}
              key={slide.localImage}
            >
              {isActive ? (
                <div
                  key={`${slide.localImage}-${activeIndex}-${imgSrc}`}
                  className="slide-bg-img active-zoom-out"
                  style={{ backgroundImage: `url(${imgSrc})` }}
                />
              ) : (
                <div
                  className="slide-bg-img"
                  style={{ backgroundImage: `url(${imgSrc})` }}
                />
              )}
              <img
                src={imgSrc}
                alt=""
                style={{ display: "none" }}
                onError={() => handleImageError(index)}
              />
              <div className="hero-slide-overlay" />
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner text-left slider-text">
                    {isActive && (
                      <div key={activeIndex} className="animate-word-entrance hero-title-block">
                        <div className="title-yellow-bar" />
                        <h1 className="hero-title-text">
                          <span className="text-white-part">{slide.titleWhite}</span>
                          {" "}
                          <span className="text-yellow-part">{slide.titleYellow}</span>
                        </h1>
                      </div>
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



