"use client";

import React, { useEffect, useRef, useState } from "react";

const solutionsData = [
  {
    id: "marine-solutions",
    image:
      "https://d1efw33w1xgex9.cloudfront.net/img/solution-sction/Marine_Solution.jpeg",
    alt: "Marine fishing equipment and winches",
    title: "MARINE SOLUTIONS",
    tagline: "Precision Engineered. Built for the Sea.",
    paragraphs: [
      "Nuradha Engineering specializes in the design and manufacturing of reliable marine fishing equipment and hydraulic solutions engineered for demanding commercial fishing operations.",
      "Our marine product range includes Long Line Haulers, Long Line Spools, Purse Seine Winches, Net Haulers, Pot Haulers, Tuna Hydraulic Reels, Manual Fishing Reels, Anchor Winches, and Fishing Booms.",
      "Built with a focus on strength, reliability, ease of operation, and long service life, our equipment is designed to perform in challenging marine environments. We also provide customized solutions to meet specific vessel and fishing requirements.",
    ],
    tags: [
      "Long Line Haulers",
      "Purse Seine Winches",
      "Net & Pot Haulers",
      "Tuna Hydraulic Reels",
      "Custom Vessel Gear",
    ],
    href: "/projects",
    delayClass: "delay-1",
  },
  {
    id: "hydraulic-solutions",
    image:
      "https://d1efw33w1xgex9.cloudfront.net/img/solution-sction/Hydraulic+Solution.jpeg",
    alt: "Hydraulic pumps, motors and components",
    title: "HYDRAULIC SOLUTIONS",
    tagline: "Reliable Components. Engineered Solutions.",
    paragraphs: [
      "Nuradha Engineering provides reliable hydraulic solutions and components for marine, industrial, mobile and machinery applications.",
      "Our range includes Hydraulic Pumps, Hydraulic Motors, Valves, Power Packs, Pressure Gauges and Hydraulic Components, supported by our technical expertise to deliver the right solution for every application.",
    ],
    tags: [
      "Hydraulic Pumps",
      "Motors & Valves",
      "Power Packs",
      "Pressure Gauges",
      "Technical Expertise",
    ],
    href: "/projects",
    delayClass: "delay-2",
  },
  {
    id: "sealing-solutions",
    image:
      "https://d1efw33w1xgex9.cloudfront.net/img/solution-sction/Sealing+Solution.jpeg",
    alt: "Industrial seals, O-rings and gaskets",
    title: "SEALING SOLUTIONS",
    tagline: "Precision Sealing. Reliable Performance.",
    paragraphs: [
      "Nuradha Engineering provides high-quality industrial sealing solutions, including Hydraulic & Pneumatic Seals, O-Rings, Custom-Manufactured Seals, Mechanical Seals, Guide Tapes, Spiral Wound Gaskets and Sealing Gaskets.",
      "We specialize in custom sealing solutions engineered for demanding hydraulic, pneumatic, marine and industrial applications.",
    ],
    tags: [
      "Hydraulic & Pneumatic Seals",
      "O-Rings",
      "Custom Seals",
      "Mechanical Seals",
      "Spiral Wound Gaskets",
    ],
    href: "/projects",
    delayClass: "delay-3",
  },
];

export default function ServicesSolutionsSection() {
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
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-solutions-section"
      aria-label="Core Engineering Solutions"
    >
      <div className="auto-container">
        {/* Section Header */}
        <div
          className={`solutions-section-header animate-on-scroll ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="solutions-header-pill">OUR CORE EXPERTISE</div>
          <h2 className="solutions-section-title">
            ENGINEERED FOR <span className="gold-text">EXCELLENCE</span>
          </h2>
          <p className="solutions-section-subtitle">
            Delivering robust marine machinery, advanced hydraulic systems, and
            precision sealing solutions across Sri Lanka and worldwide.
          </p>
        </div>

        {/* 3 Solutions Cards Grid */}
        <div className="solutions-cards-grid">
          {solutionsData.map((item) => (
            <div
              key={item.id}
              className={`solution-feature-card animate-on-scroll ${
                item.delayClass
              } ${isVisible ? "is-visible" : ""}`}
            >
              {/* Card Image Banner */}
              <div className="solution-card-image-wrapper">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <div className="solution-card-image-overlay" />
                <div className="solution-card-badge">{item.tagline}</div>
              </div>

              {/* Card Content Body */}
              <div className="solution-card-body">
                <h3 className="solution-card-title">{item.title}</h3>

                <div className="solution-card-paragraphs">
                  {item.paragraphs.map((para, idx) => (
                    <p key={idx} className="solution-card-text">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="solution-card-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="solution-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="solution-card-footer">
                  <a href={item.href} className="solution-read-more-btn">
                    <span>Read More</span>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
