"use client";

import React from "react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="pro-footer" aria-label="Nuradha Engineering Footer">
      {/* Top Glowing Gold Divider Accent */}
      <div className="pro-footer-top-line" />

      <div className="auto-container">
        {/* ROW 1 */}
        <div className="pro-footer-row">
          {/* Logo 1 & Brand Intro */}
          <div className="pro-footer-col logo-col">
            <div className="pro-logo-card">
              <Link href="/" aria-label="Nuradha Engineering Home">
                <img
                  src="/assets/images/logo.png"
                  alt="Nuradha Engineering Logo"
                  className="pro-logo-img"
                />
              </Link>
            </div>
            <p className="pro-company-tagline">
              Specialized manufacturer and leading exporter of high-grade commercial fishing haulers, winches &amp; hydraulic solutions.
            </p>
          </div>

          {/* QUICK LINKS (Navbar Items) */}
          <div className="pro-footer-col">
            <h4 className="pro-widget-title">QUICK LINKS</h4>
            <div className="pro-widget-content">
              <ul className="pro-nav-links">
                <li>
                  <Link href="/">
                    <span className="nav-bullet">›</span> Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="nav-bullet">›</span> About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <span className="nav-bullet">›</span> Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="nav-bullet">›</span> Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* FIND US */}
          <div className="pro-footer-col">
            <h4 className="pro-widget-title">FIND US</h4>
            <div className="pro-widget-content">
              <address className="pro-address">
                No. 85/25, Custom Road,
                <br />
                Beruwala,
                <br />
                Sri Lanka
              </address>
              <div className="pro-directions-wrap">
                <a
                  href="https://www.google.com/maps/place/Nuradha+Engneering,+41+Mangala+Rd,+Beruwala+12070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pro-map-link"
                >
                  <span className="map-icon">📍</span> Open in Google Map
                </a>
              </div>
            </div>
          </div>

          {/* GET IN TOUCH WITH US */}
          <div className="pro-footer-col">
            <h4 className="pro-widget-title">GET IN TOUCH WITH US</h4>
            <div className="pro-widget-content">
              <ul className="pro-contact-list">
                <li>
                  <a href="tel:+94773276080">+94 773 276080</a>
                </li>
                <li>
                  <a href="tel:+94706276080">+94 706 276080</a>
                </li>
                <li>
                  <a href="tel:+94778014209">+94 778 014209</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="pro-footer-row row-2">
          {/* Logo 2 (Blue Thunder) */}
          <div className="pro-footer-col logo-col">
            <div className="pro-logo-card second">
              <Link href="/" aria-label="Blue Thunder Fishing Gear">
                <img
                  src="/assets/images/logo1.png"
                  alt="Blue Thunder Fishing Gear Logo"
                  className="pro-brand-logo-img"
                />
              </Link>
            </div>
            <p className="pro-company-tagline">
              Blue Thunder marine equipment, trusted by professional fishermen across Sri Lanka &amp; overseas.
            </p>
          </div>

          {/* OUR PRODUCTS */}
          <div className="pro-footer-col">
            <h4 className="pro-widget-title">OUR PRODUCTS</h4>
            <div className="pro-widget-content">
              <ul className="pro-nav-links">
                <li>
                  <Link href="/item-page4">
                    <span className="nav-bullet">›</span> Haulers &amp; Winches
                  </Link>
                </li>
                <li>
                  <Link href="/marineengine_new">
                    <span className="nav-bullet">›</span> Marine Engines
                  </Link>
                </li>
                <li>
                  <Link href="/hydrolic-motors">
                    <span className="nav-bullet">›</span> Hydraulic Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/seals-rings">
                    <span className="nav-bullet">›</span> Sealing Solutions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* WRITE TO US */}
          <div className="pro-footer-col">
            <h4 className="pro-widget-title">WRITE TO US</h4>
            <div className="pro-widget-content">
              <ul className="pro-contact-list">
                <li>
                  <a href="mailto:info@nuradha.com">info@nuradha.com</a>
                </li>
                <li>
                  <a href="mailto:nuwan@nuradha.com">nuwan@nuradha.com</a>
                </li>
                <li>
                  <a href="mailto:danthe004@yahoo.com">danthe004@yahoo.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* WE OPEN & WHATSAPP */}
          <div className="pro-footer-col">
            <h4 className="pro-widget-title">WE OPEN</h4>
            <div className="pro-widget-content">
              <div className="pro-hours-info">
                <span className="hours-row">Monday – Saturday</span>
                <span className="hours-row gold">8.30 AM – 5.30 PM</span>
              </div>
              <div className="pro-whatsapp-block">
                <span className="hours-row wa-label">Let&apos;s WhatsApp:</span>
                <ul className="pro-contact-list wa-list">
                  <li>
                    <a
                      href="https://wa.me/94773276080"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +94 773 276080
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/94706276080"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +94 706 276080
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="pro-footer-bottom">
        <div className="auto-container">
          <div className="pro-bottom-content">
            <ul className="pro-social-icons" aria-label="Social media channels">
              <li>
                <a
                  href="https://www.facebook.com/share/17sXcMbjpx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg
                    className="pro-social-svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nuradhaeng?stkn=bDFjYXh3Z2hsbWdu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg
                    className="pro-social-svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@nuradhaengineering?_r=1&_t=ZS-99ZxMWpZYMU"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <svg
                    className="pro-social-svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.05 1.12 1.87 2.18 2.05.74.14 1.51.02 2.18-.33.82-.41 1.37-1.22 1.51-2.12.06-.55.07-1.11.07-1.67V.02z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@nuradhaeng-c8q?si=cuJcOHavlxmcZOPw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg
                    className="pro-social-svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </li>
            </ul>

            <div className="pro-copyright-text">
              © Copyright 2026 by nuradha.com | All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
