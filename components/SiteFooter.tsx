"use client";

import React from "react";

export default function SiteFooter() {
  return (
    <footer className="pro-footer" aria-label="Nuradha Engineering Footer">
      {/* Top Glowing Gold Divider Accent */}
      <div className="pro-footer-top-line" />

      <div className="auto-container">
        {/* ROW 1 */}
        <div className="pro-footer-row">
          {/* Logo 1 */}
          <div className="pro-footer-col logo-col">
            <div className="pro-logo-card">
              <a href="/" aria-label="Nuradha Engineering Home">
                <img
                  src="/assets/images/logo.png"
                  alt="Nuradha Engineering Logo"
                  className="pro-logo-img"
                />
              </a>
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
        </div>

        {/* ROW 2 */}
        <div className="pro-footer-row row-2">
          {/* Logo 2 */}
          <div className="pro-footer-col logo-col">
            <div className="pro-logo-card second">
              <a href="/" aria-label="Blue Thunder Fishing Gear">
                <img
                  src="/assets/images/logo1.png"
                  alt="Blue Thunder Fishing Gear Logo"
                  className="pro-brand-logo-img"
                />
              </a>
            </div>
          </div>

          {/* DIRECTIONS */}
          <div className="pro-footer-col">
            <h4 className="pro-widget-title">DIRECTIONS</h4>
            <div className="pro-widget-content">
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

          {/* LET'S WHATSAPP */}
          <div className="pro-footer-col">
            <h4 className="pro-widget-title">LET&apos;S WHATSAPP</h4>
            <div className="pro-widget-content">
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

          {/* WE OPEN */}
          <div className="pro-footer-col">
            <h4 className="pro-widget-title">WE OPEN</h4>
            <div className="pro-widget-content">
              <div className="pro-hours-info">
                <span className="hours-row">Monday – Saturday</span>
                <span className="hours-row gold">8.30 AM – 5.30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="pro-footer-bottom">
        <div className="auto-container">
          <div className="pro-bottom-content">
            <ul className="pro-social-icons">
              <li>
                <a
                  href="https://www.facebook.com/share/17sXcMbjpx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nuradhaeng?stkn=bDFjYXh3Z2hsbWdu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@nuradhaengineering?_r=1&_t=ZS-99ZxMWpZYMU"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <i className="fab fa-tiktok" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@nuradhaeng-c8q?si=cuJcOHavlxmcZOPw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>

            <div className="pro-copyright-text">
              © Copyright 2026 by nuradha.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
