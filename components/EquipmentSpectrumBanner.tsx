"use client";

import React, { useEffect, useRef, useState } from "react";

export default function EquipmentSpectrumBanner() {
  const bannerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = bannerRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={bannerRef}
      className="equipment-spectrum-banner"
      aria-label="Spectrum of Equipment Solutions Quote"
    >
      <div className="auto-container">
        <div
          className={`spectrum-quote-box animate-on-scroll ${
            isVisible ? "is-visible" : ""
          }`}
        >
          {/* Top Decorative Pill */}
          <div className="spectrum-badge">
            <span className="spectrum-badge-dot" />
            <span>FULL SPECTRUM CAPABILITY</span>
          </div>

          {/* Quote Mark Icon */}
          <div className="quote-mark-icon" aria-hidden="true">
            “
          </div>

          {/* Main Quote Heading */}
          <h3 className="spectrum-quote-text">
            We provide the <span className="gold-highlight">entire spectrum</span>{" "}
            of equipment solutions for your{" "}
            <span className="gold-highlight">hydraulic requirements</span>
          </h3>

          {/* Animated Gold Divider Line */}
          <div className={`spectrum-divider ${isVisible ? "expanded" : ""}`} />
        </div>
      </div>
    </section>
  );
}
