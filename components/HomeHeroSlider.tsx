"use client";

import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/Home_Page_slide_image/slide_Image_01.webp",
    title: "The choice of Professional fisherman",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/Home_Page_slide_image/slide_Image_02.webp",
    title: "Super Fine Ultimate Quality Product",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/Home_Page_slide_image/slide_Image_03.webp",
    title: "High performance End Result Guaranteed",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/Home_Page_slide_image/slide_Image_04.webp",
    title: "Skillful expert team work",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/Home_Page_slide_image/slide_Image_05.webp",
    title: "State-Of-The-Art Production Facilities",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/Home_Page_slide_image/slide_Image_06.webp",
    title: "Exclusive Engineering Solutions",
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
        {slides.map((slide, index) => (
          <div
            className={`swiper-slide native-home-slide${index === activeIndex ? " swiper-slide-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== activeIndex}
            key={slide.image}
          >
            <div className="content-outer">
              <div className="content-box">
                <div className="inner text-center slider-text">
                  <h1>{slide.title}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
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
