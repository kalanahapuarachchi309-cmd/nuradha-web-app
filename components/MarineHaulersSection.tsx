"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchCMSProducts, formatImageUrl, CMSProduct } from "../lib/api";

interface MarineProductItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  category: string;
  href: string;
  delayClass: string;
}

const hardcodedMarineProducts: MarineProductItem[] = [
  {
    id: "longline-hauler",
    image:
      "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+LONGLINE+HAULER.webp",
    alt: "Blue Thunder Long Line Hauler",
    title: "Blue Thunder Long Line Hauler",
    category: "Commercial Fishing Hauler",
    href: "/item-page4",
    delayClass: "delay-1",
  },
  {
    id: "net-hauler",
    image:
      "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+NET+HAULER.webp",
    alt: "Blue Thunder Net Hauler",
    title: "Blue Thunder Net Hauler",
    category: "Heavy Duty Net Hauler",
    href: "/item-page3",
    delayClass: "delay-2",
  },
  {
    id: "purse-seine-winch",
    image:
      "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+PURSINE+WINCH.webp",
    alt: "Blue Thunder Purse Seine Winch",
    title: "Blue Thunder Purse Seine Winch",
    category: "High Capacity Seine Winch",
    href: "/item-page1",
    delayClass: "delay-3",
  },
  {
    id: "combined-net-rope",
    image:
      "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+COMBINED+NET+AND+ROPE.webp",
    alt: "Blue Thunder Combined Net and Rope Hauler",
    title: "Blue Thunder Combined Net & Rope Hauler",
    category: "Dual Purpose Hauler",
    href: "/item-page5",
    delayClass: "delay-1",
  },
  {
    id: "pot-hauler",
    image:
      "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+POT+HAULER.webp",
    alt: "Blue Thunder Pot Hauler",
    title: "Blue Thunder Pot Hauler",
    category: "Trap & Pot Line Hauler",
    href: "/item-page2",
    delayClass: "delay-2",
  },
  {
    id: "manual-hydraulic-line-hauler",
    image:
      "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+MANUAL+%26+HYDRAULIC+LINE+HAULER.webp",
    alt: "Blue Thunder Manual and Hydraulic Line Hauler",
    title: "Blue Thunder Manual & Hydraulic Line Hauler",
    category: "Hybrid Line Hauler",
    href: "/item-page6",
    delayClass: "delay-3",
  },
];

export default function MarineHaulersSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayProducts, setDisplayProducts] = useState<MarineProductItem[]>(
    hardcodedMarineProducts
  );

  useEffect(() => {
    async function loadCMS() {
      const cmsProducts = await fetchCMSProducts();
      if (!cmsProducts || cmsProducts.length === 0) return;

      const hardcodedTitles = new Set(
        hardcodedMarineProducts.map((p) => p.title.toLowerCase())
      );

      const dynamicItems: MarineProductItem[] = cmsProducts
        .filter((p) => !hardcodedTitles.has(p.title.trim().toLowerCase()))
        .map((p, idx) => ({
          id: `cms-prod-${p.id || idx}`,
          image: formatImageUrl(p.imageUrl),
          alt: p.title,
          title: p.title,
          category: p.subtitle || p.categoryName || "Commercial Fishing Gear",
          href: p.id ? `/product/${p.id}` : "#",
          delayClass: `delay-${((idx + 6) % 3) + 1}`,
        }));

      setDisplayProducts([...hardcodedMarineProducts, ...dynamicItems]);
    }

    loadCMS();
  }, []);

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
      className="marine-haulers-section"
      aria-label="Marine Haulers and Winches Gallery"
    >
      <div className="auto-container">
        {/* Section Header */}
        <div
          className={`marine-section-header animate-on-scroll ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="marine-header-pill">FLAGSHIP MARINE EQUIPMENT</div>
          <h2 className="marine-section-title">
            MARINE HAULERS <span className="gold-accent">& WINCHES</span>
          </h2>
          <p className="marine-section-subtitle">
            Engineered with high-grade raw materials and precision marine
            hydraulics to deliver maximum pull power, reliability, and long
            service life at sea.
          </p>
        </div>

        {/* 6 Hardcoded Products Grid + Appended CMS Products */}
        <div className="marine-products-grid">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className={`marine-product-card animate-on-scroll ${
                product.delayClass
              } ${isVisible ? "is-visible" : ""}`}
            >
              {/* Product Image Frame */}
              <div className="marine-card-image-frame">
                <img src={product.image} alt={product.alt} loading="lazy" />
                <div className="marine-card-image-overlay" />
                <div className="marine-card-badge">BLUE THUNDER EDITION</div>
              </div>

              {/* Product Content Body */}
              <div className="marine-card-body">
                <span className="marine-card-category">{product.category}</span>
                <h3 className="marine-card-title">{product.title}</h3>

                <div className="marine-card-footer">
                  <a href={product.href} className="marine-view-btn">
                    <span>View Specifications</span>
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
