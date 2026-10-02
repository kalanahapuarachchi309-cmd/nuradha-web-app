"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const aboutSlides = [
  "/assets/images/About_Slide_move_Images/about_slide_section_image01.jpeg",
  "/assets/images/About_Slide_move_Images/about_slide_section_image02.jpeg",
  "/assets/images/About_Slide_move_Images/about_slide_section_image03.jpeg",
  "/assets/images/About_Slide_move_Images/about_slide_section_image04.jpeg",
  "/assets/images/About_Slide_move_Images/about_slide_section_image05.jpeg",
];

const products = [
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600227/ll1_tvcmci.jpg",
    alt: "Tuna Longline hauler",
    title: "Tuna Longline Hauler",
    link: "/item-page4",
  },
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600453/ph1_dua5hb.jpg",
    alt: "Pot hauler",
    title: "Pot Hauler",
    link: "/item-page2",
  },
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600537/ps1_xyysfe.png",
    alt: "Purse seine winch",
    title: "Purse Seine Winch",
    link: "/item-page1",
  },
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600038/cb1_toihek.jpg",
    alt: "Combined net and pot hauler",
    title: "Combined Net & Pot Hauler",
    link: "/item-page5",
  },
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600039/cb2_dqalfz.jpg",
    alt: "Net hauler",
    title: "Net Hauler",
    link: "/item-page3",
  },
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600145/ml1_wz7qgf.jpg",
    alt: "Manual and Hydraulic Line Hauler",
    title: "Manual & Hydraulic Line Hauler",
    link: "/item-page6",
  },
];

const reviews = [
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Mr.%20K.H.%20Nandasiri.png",
    alt: "Mr. K.H. Nandasiri review",
    name: "Mr. K.H. Nandasiri",
    roleLines: ["CEO - Chejana Holdings & ICE Factories", "Matara, Sri Lanka"],
    text: "Nuradha Engineering serviced us with exceptional customer service and provided us with customized commercial fishing equipment.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Owen%20Mungai.png",
    alt: "Mr. Owen Mungai review",
    name: "Mr. Owen Mungai",
    roleLines: ["CEO - Home Country Ltd", "Kenya"],
    text: "Nuradha Engineering was exceptional. The team helped me with all their dedication and the product quality of the haulers was on par with international standards. They helped me customize the product as per my requirement.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/L.H%20Deepal%20Buddika.png",
    alt: "Mr. L.H. Deepal Buddika review",
    name: "Owner - Mr. L.H. Deepal Buddika",
    roleLines: ["Nikil Putha Fishing Line", "Mirissa, Sri Lanka."],
    text: "Nuradha Engineering was exceptional. The team helped me with all their dedication and the product quality of the haulers was on par with international standards. They helped me customize the product as per my requirement.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Sumithra%20Fernando.jpeg",
    alt: "Mr. Sumithra Fernando review",
    name: "Mr. Sumithra Fernando",
    roleLines: ["Managing Director", "Danusha Marine Lanka Pvt Ltd., Panadura, Sri Lanka"],
    text: "Nuradha Engineering team includes highly dedicated specialists in supplying corporate fishing equipment. We were very pleased with their customer service and timelines of supplying the ordered products.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Suranga%20Fernando.png",
    alt: "Suranga Fernando and Sarath Fernando review",
    name: "Suranga Fernando & Sarath Fernando",
    roleLines: ["Managing Director & CEO", "Island Seabird Group Ltd, Seychelles"],
    text: "Nuradha Engineering, a team of specialists in building and supplying commercial fishing equipment assisted us along our journey in the last five years. We have always felt their commitment to excellence and to deliver a product in line with international standards.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Muditha.jpeg",
    alt: "Mr. Muditha review",
    name: "Mr. Muditha",
    roleLines: ["Owner", "Marlu, Seychelles"],
    text: "Nuradha Engineering was fast, courteous, and very helpful. They helped me solve my problem using their expertise and knowledge gained over the years. They have great products among Sri Lankan exporters of haulers.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Mahesh.png",
    alt: "Mr. Mahesh Fernando review",
    name: "Mr. Mahesh Fernando",
    roleLines: ["Managing Director", "Selanie Boat Yard (Pvt) Ltd, Fullerton Industrial Estate, Nagoda, Sri Lanka"],
    text: "The reason why we utilize fishing haulers from Nuradha Engineering is due to the trust we have on their excellent finishing and the longevity of their products.",
  },
];

export default function AboutContent() {
  const [activeReview, setActiveReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="about-page">
      <SiteHeader />

      {/* 1. HERO BANNER - Sleek Home Screen UI Colors (Full Image Removed) */}
      <section className="about-hero-banner" aria-label="About Nuradha Engineering">
        <div className="auto-container">
          <div className="about-badge-wrap">
            <div className="about-badge">
              <span className="about-badge-dot" />
              <span>ESTABLISHED 1989 • COMMERCIAL MARINE &amp; HYDRAULIC ENGINEERING</span>
            </div>
          </div>
          <h1 className="about-hero-title">
            ABOUT <span className="gold-accent">US</span>
          </h1>
          <p className="about-hero-subtitle">WELCOME TO NURADHA FAMILY</p>
          <p className="about-hero-lead">
            Specialized manufacturer and leading exporter of high-grade commercial fishing haulers, winches &amp; hydraulic solutions.
          </p>
        </div>
      </section>

      {/* 2. INSIDE NURADHA ENGINEERING (Moving Slides Marquee) */}
      <section className="about-section dark-alt" aria-label="Inside Nuradha Engineering">
        <div className="auto-container">
          <div className="about-section-head">
            <div className="about-badge-wrap">
              <div className="about-badge">
                <span className="about-badge-dot" />
                <span>WORKSHOP &amp; CRAFTSMANSHIP</span>
              </div>
            </div>
            <h2 className="about-section-title">
              INSIDE <span className="gold-accent">NURADHA ENGINEERING</span>
            </h2>
            <p className="about-section-desc">
              A moving look at the people, craft, and work behind our story.
            </p>
          </div>

          <div className="about-marquee-shell">
            <div className="about-marquee-fade left" />
            <div className="about-marquee-fade right" />
            <div className="about-marquee-inner">
              <div className="about-marquee-track">
                {aboutSlides.map((slide, idx) => (
                  <div className="about-marquee-card" key={`slide-a-${idx}`}>
                    <img src={slide} alt={`Nuradha Engineering workshop photo ${idx + 1}`} />
                  </div>
                ))}
              </div>
              <div className="about-marquee-track" aria-hidden="true">
                {aboutSlides.map((slide, idx) => (
                  <div className="about-marquee-card" key={`slide-b-${idx}`}>
                    <img src={slide} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE ? (Company Story & Facts) */}
      <section className="about-section dark-deep" aria-label="Who We Are">
        <div className="auto-container">
          <div className="about-section-head">
            <div className="about-badge-wrap">
              <div className="about-badge">
                <span className="about-badge-dot" />
                <span>OUR HERITAGE</span>
              </div>
            </div>
            <h2 className="about-section-title">
              WHO <span className="gold-accent">WE ARE ?</span>
            </h2>
          </div>

          <div className="about-story-grid">
            <div className="about-story-main-card">
              <p className="about-story-p">
                The inception of Nuradha Engineering start in 1989 as a company producing equipment for small fishing boats in a small production factory. It all started as a small family business from the family of the Late MR. R. Danthanarayana.
              </p>
              <p className="about-story-p">
                As of today, we produce and deliver our equipment for commercial fishing boats for commercial fishing companies with international standards; with the help of a very talented and experienced set of staff, using new equipment.
              </p>
              <p className="about-story-p">
                We are the main Sri Lankan supplier of fishing haulers and equipment for commercial fishing boats exported to overseas markets within the commercial fishing industry. Our customers are commercial fishing companies owning boats, especially in the overseas markets looking for commercial fishing haulers and equipment/ supplies.
              </p>
              <p className="about-story-p">
                We are proud to say we are the main player in this market, and we are suppliers of commercial fishing equipment to countries like Seychelles, Mauritius, Kenya, Pakistan, Maldives, and so on.
              </p>
            </div>

            <div className="about-stats-column">
              <div className="about-stat-card">
                <div className="about-stat-number">1989</div>
                <div className="about-stat-label">Year of Inception</div>
                <p className="about-stat-desc">
                  Founded by the Late MR. R. Danthanarayana as a dedicated family engineering enterprise.
                </p>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-number">Global</div>
                <div className="about-stat-label">Export Footprint</div>
                <p className="about-stat-desc">
                  Trusted supplier to commercial fishing companies in Seychelles, Mauritius, Kenya, Pakistan, Maldives &amp; beyond.
                </p>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-number">#1 Main</div>
                <div className="about-stat-label">Sri Lankan Exporter</div>
                <p className="about-stat-desc">
                  The primary player and industry benchmark in commercial fishing haulers and deck machinery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR USPs TO CLIENTS ARE */}
      <section className="about-section dark-alt" aria-label="Our USPs">
        <div className="auto-container">
          <div className="about-section-head">
            <div className="about-badge-wrap">
              <div className="about-badge">
                <span className="about-badge-dot" />
                <span>VALUE PROPOSITION</span>
              </div>
            </div>
            <h2 className="about-section-title">
              OUR <span className="gold-accent">USPs TO CLIENTS ARE</span>
            </h2>
            <p className="about-section-desc">
              Built on enduring principles of high engineering precision, reliability, and dedicated customer loyalty.
            </p>
          </div>

          <div className="about-usp-grid">
            {/* USP 1 */}
            <div className="about-usp-card">
              <div className="about-usp-icon-wrap" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div className="about-usp-tag">USP 01</div>
              <h3 className="about-usp-title">Exceptional service quality provided</h3>
              <p className="about-usp-desc">
                Uncompromising engineering standards, rigorous testing, and dedicated technical care on every delivery.
              </p>
            </div>

            {/* USP 2 */}
            <div className="about-usp-card">
              <div className="about-usp-icon-wrap" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 18V6" />
                </svg>
              </div>
              <div className="about-usp-tag">USP 02</div>
              <h3 className="about-usp-title">Value for money</h3>
              <p className="about-usp-desc">
                High-grade marine alloys, heavy-duty build quality, and unmatched lifecycle durability at fair market value.
              </p>
            </div>

            {/* USP 3 */}
            <div className="about-usp-card">
              <div className="about-usp-icon-wrap" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <div className="about-usp-tag">USP 03</div>
              <h3 className="about-usp-title">Commitment to customer satisfaction</h3>
              <p className="about-usp-desc">
                Tailored vessel customizations, prompt support, and long-term relationships built on total trust.
              </p>
            </div>
          </div>

          <div className="about-offerings-card">
            <p className="about-offerings-p">
              Our offering includes all the equipment necessary for fishing boats such as fishing equipment, fishing haulers, and fishing winches, which are produced in our factory using the highest quality raw materials and technology. We are able to produce equipment to satisfy varying requirements for a broad set of customers inclusive of global commercial fishing companies, and we customize as and when necessary to suit customer requirements.
            </p>
            <p className="about-offerings-p">
              Also, we undertake the distribution of very high-quality hydraulic pumps, motors, equipment, and seals up to international standards.
            </p>
            <p className="about-offerings-p">
              We have gone a step further in our efforts to delight our customers, where we supply marine engines to the market as well from Nuradha Engineering, you are free to purchase different types of these engines to satisfy your requirement and benefit from our exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WE ARE THE REGIONAL MARKET LEADER IN */}
      <section className="about-section dark-deep" aria-label="Regional Market Leader">
        <div className="auto-container">
          <div className="about-section-head">
            <div className="about-badge-wrap">
              <div className="about-badge">
                <span className="about-badge-dot" />
                <span>CORE SPECIALIZATIONS</span>
              </div>
            </div>
            <h2 className="about-section-title">
              WE ARE THE REGIONAL <span className="gold-accent">MARKET LEADER IN</span>
            </h2>
            <p className="about-section-desc">
              Comprehensive marine engineering capabilities serving small to large commercial vessels across the region.
            </p>
          </div>

          <div className="about-pillars-grid">
            <div className="about-pillar-card">
              <div className="about-pillar-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1" />
                  <path d="M4 18l-1-5h18l-1 5" />
                  <path d="M12 2v11" />
                  <path d="M8 6l4-4 4 4" />
                </svg>
              </div>
              <h3 className="about-pillar-title">Marine Solutions / Marine Haulers</h3>
              <p className="about-pillar-desc">
                High-performance longline, net, and pot haulers manufactured for reliable deep-sea continuous duty.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="about-pillar-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className="about-pillar-title">Hydraulic Solutions / Hydraulic Haulers</h3>
              <p className="about-pillar-desc">
                Heavy duty hydraulic motors, high-displacement pumps, directional control valves, and full circuit integration.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="about-pillar-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" />
                </svg>
              </div>
              <h3 className="about-pillar-title">Sealing Solutions</h3>
              <p className="about-pillar-desc">
                High-pressure hydraulic seals, precision O-rings, spiral wound gaskets, and custom oil seal profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR REPUTED BRAND & BROAD PRODUCT PORTFOLIO */}
      <section className="about-section dark-alt" aria-label="Brand and Product Portfolio">
        <div className="auto-container">
          <div className="about-section-head">
            <div className="about-badge-wrap">
              <div className="about-badge">
                <span className="about-badge-dot" />
                <span>OWN REPUTED BRAND</span>
              </div>
            </div>
            <h2 className="about-section-title">
              MANUFACTURED UNDER <span className="gold-accent">OUR OWN REPUTED BRAND</span>
            </h2>
          </div>

          <div className="about-brand-banner">
            <div className="about-brand-text">
              <h3 className="about-brand-title">
                WE HAVE A BROAD PRODUCT PORTFOLIO MANUFACTURED UNDER OUR OWN REPUTED BRAND
              </h3>
              <p className="about-brand-sub">SOME OF THESE ARE LISTED BELLOW</p>
            </div>
            <div className="about-brand-logo-card">
              <img src="/assets/images/logo1.png" alt="Blue Thunder Fishing Gear logo" />
            </div>
          </div>

          {/* Product name pills */}
          <div className="about-pills-bar">
            {products.map((item) => (
              <Link href={item.link} key={`pill-${item.title}`} className="about-product-pill">
                <span style={{ color: "#eab308" }}>›</span> {item.title}
              </Link>
            ))}
          </div>

          {/* 6 Products Grid */}
          <div className="about-products-grid">
            {products.map((product) => (
              <Link href={product.link} className="about-product-card" key={product.title}>
                <div className="about-product-img-wrap">
                  <img src={product.src} alt={product.alt} />
                </div>
                <div className="about-product-card-footer">
                  <h4 className="about-product-card-title">{product.title}</h4>
                  <span className="about-product-card-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="about-product-summary-box">
            <p style={{ margin: 0 }}>
              We provide haulers and winches for medium and small-scale commercial fishing boats sized 45 feet - 65 feet in length. We also manufacture commercial fishing equipment as per our client&apos;s requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 7. OUR TEAM */}
      <section className="about-section dark-deep" aria-label="Our Team">
        <div className="auto-container">
          <div className="about-section-head">
            <div className="about-badge-wrap">
              <div className="about-badge">
                <span className="about-badge-dot" />
                <span>EXPERIENCED WORKFORCE</span>
              </div>
            </div>
            <h2 className="about-section-title">
              OUR <span className="gold-accent">TEAM</span>
            </h2>
          </div>

          <div className="about-team-box">
            <p className="about-team-p">
              Our team consists of around 25 skilled and qualified workers. Our expertise gained in the commercial fishing industry equipment is unmatched by any other organization in Sri Lanka and has proven to be successful among global fishing companies in South Asia.
            </p>
            <p className="about-team-p">
              We are looking forward to servicing our global clientele with the highest quality equipment meeting international standards with exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER REVIEWS (Interactive React Carousel) */}
      <section
        className="about-section dark-alt"
        aria-label="Customer Reviews"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="auto-container">
          <div className="about-section-head">
            <div className="about-badge-wrap">
              <div className="about-badge">
                <span className="about-badge-dot" />
                <span>CLIENT TESTIMONIALS</span>
              </div>
            </div>
            <h2 className="about-section-title">
              CUSTOMER <span className="gold-accent">REVIEWS</span>
            </h2>
            <p className="about-section-desc">
              Trusted by commercial vessel operators, fleet owners, and marine enterprises worldwide.
            </p>
          </div>

          <div className="about-review-shell">
            {reviews[activeReview] && (
              <div className="about-review-display">
                <div className="about-review-header">
                  <div className="about-review-avatar-wrap">
                    <img
                      src={reviews[activeReview].src}
                      alt={reviews[activeReview].alt}
                    />
                  </div>
                  <div className="about-review-info">
                    <h3 className="about-review-name">{reviews[activeReview].name}</h3>
                    <div className="about-review-roles">
                      {reviews[activeReview].roleLines.map((line, lIdx) => (
                        <div key={`line-${lIdx}`}>{line}</div>
                      ))}
                    </div>
                    <div className="about-review-stars">
                      {"★".repeat(5)}
                    </div>
                  </div>
                </div>

                <blockquote className="about-review-quote">
                  &ldquo;{reviews[activeReview].text}&rdquo;
                </blockquote>
              </div>
            )}

            <div className="about-review-nav">
              <button
                type="button"
                className="about-review-nav-btn"
                onClick={handlePrevReview}
                aria-label="Previous review"
              >
                ‹
              </button>
              <div className="about-review-dots">
                {reviews.map((_, idx) => (
                  <button
                    type="button"
                    key={`dot-${idx}`}
                    className={`about-review-dot ${idx === activeReview ? "active" : ""}`}
                    onClick={() => setActiveReview(idx)}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                className="about-review-nav-btn"
                onClick={handleNextReview}
                aria-label="Next review"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OUR VISION & OUR MISSION */}
      <section className="about-section dark-deep" aria-label="Our Vision and Mission">
        <div className="auto-container">
          <div className="about-section-head">
            <div className="about-badge-wrap">
              <div className="about-badge">
                <span className="about-badge-dot" />
                <span>CORE PURPOSE</span>
              </div>
            </div>
            <h2 className="about-section-title">
              VISION &amp; <span className="gold-accent">MISSION</span>
            </h2>
          </div>

          <div className="about-vision-grid">
            {/* Vision */}
            <div className="about-vision-card">
              <div className="about-vision-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3 className="about-vision-title">OUR VISION</h3>
              <p className="about-vision-text">
                &ldquo;To be the benchmark in the commercial fishing industry renowned for exceptional service. To be recognized for our contributions to client companies, the professionalism maintained, and our human qualities.&rdquo;
              </p>
            </div>

            {/* Mission */}
            <div className="about-vision-card">
              <div className="about-vision-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="about-vision-title">OUR MISSION</h3>
              <p className="about-vision-text">
                &ldquo;Our mission is to exceed customer satisfaction. We work together with our clients to create long-term relationships in order to provide the best possible service within the boat industry. Our aim is to build our reputation over time for consistent performance and exceptional service.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Floating Elements (Matching Home Screen) */}
      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="flaticon-right-arrow-4" />
      </div>
      <a
        className="whatsapp-float"
        href="https://wa.me/94773276080"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img src="/assets/images/whatsapp_icon/whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
}
