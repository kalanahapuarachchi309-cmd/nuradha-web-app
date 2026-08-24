"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HydraulicSolutionsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
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
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hydraulic-solutions-section"
      id="desc-img"
      aria-label="Complete Hydraulic Solutions"
    >
      <div className="auto-container">
        {/* Header Badge */}
        <div
          className={`hydraulic-badge-container animate-on-scroll ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="hydraulic-badge">
            <span className="hydraulic-badge-dot" />
            <span>ENGINEERED FOR RELIABILITY • BUILT FOR PERFORMANCE</span>
          </div>
        </div>

        {/* Main Section Title */}
        <h2
          className={`hydraulic-title animate-on-scroll delay-1 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          COMPLETE HYDRAULIC <span className="gold-accent">SOLUTIONS</span>
        </h2>

        {/* Feature Cards Grid */}
        <div className="hydraulic-cards-grid">
          {/* Card 1: Custom Engineering & Manufacturing */}
          <div
            className={`hydraulic-card animate-on-scroll delay-1 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <div>
              <div className="card-header-icon" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="hydraulic-card-subtitle">
                Design & Manufacturing
              </div>
              <h3 className="hydraulic-card-title">
                Custom Winches, Haulers & Marine Systems
              </h3>
              <p className="hydraulic-card-desc">
                We design and manufacture hydraulic fishing winches, haulers,
                and custom hydraulic systems for marine and industrial
                applications.
              </p>
            </div>

            <div className="hydraulic-tags-container">
              <span className="hydraulic-tag">Fishing Winches</span>
              <span className="hydraulic-tag">Hydraulic Haulers</span>
              <span className="hydraulic-tag">Custom Systems</span>
              <span className="hydraulic-tag">Marine & Industrial</span>
            </div>
          </div>

          {/* Card 2: Comprehensive Component Supply */}
          <div
            className={`hydraulic-card animate-on-scroll delay-2 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <div>
              <div className="card-header-icon" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <div className="hydraulic-card-subtitle">
                Comprehensive Supply
              </div>
              <h3 className="hydraulic-card-title">
                Pumps, Motors, Valves, Cylinders & Seals
              </h3>
              <p className="hydraulic-card-desc">
                We also supply a comprehensive range of hydraulic pumps,
                motors, valves, cylinders, hoses, fittings, oil seals, O-rings,
                and sealing solutions.
              </p>
            </div>

            <div className="hydraulic-tags-container">
              <span className="hydraulic-tag">Pumps & Motors</span>
              <span className="hydraulic-tag">Valves & Cylinders</span>
              <span className="hydraulic-tag">Hoses & Fittings</span>
              <span className="hydraulic-tag">Oil Seals & O-Rings</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`hydraulic-actions animate-on-scroll delay-2 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <a href="/projects" className="btn-hydraulic-primary">
            <span>Explore Products</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="/contact" className="btn-hydraulic-outline">
            <span>Contact Engineers</span>
          </a>
        </div>
      </div>
    </section>
  );
}
