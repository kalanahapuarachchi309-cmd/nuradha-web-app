"use client";

import React, { useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    botcheck: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.botcheck) {
      return;
    }

    setStatus("loading");
    setStatusMessage("Sending your message...");

    try {
      const data = new FormData();
      data.append("form_name", formData.name);
      data.append("form_email", formData.email);
      data.append("form_phone", formData.phone);
      data.append("form_subject", formData.subject);
      data.append("form_message", formData.message);
      data.append("form_botcheck", formData.botcheck);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Failed to send message.");
      }

      setStatus("success");
      setStatusMessage(json.message || "Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        botcheck: "",
      });
    } catch (err: any) {
      setStatus("error");
      setStatusMessage(err.message || "Unable to send your message right now. Please try again later or reach us via phone/WhatsApp.");
    }
  };

  return (
    <div className="contact-page">
      <SiteHeader />

      {/* Hero Banner with Home Screen Styling */}
      <section className="contact-hero-banner" aria-label="Contact Nuradha Engineering">
        <div className="auto-container">
          <div className="contact-badge-wrap">
            <div className="contact-badge">
              <span className="contact-badge-dot" />
              <span>GET IN TOUCH • NURADHA ENGINEERING</span>
            </div>
          </div>
          <h1 className="contact-hero-title">
            CONTACT <span className="gold-accent">US</span>
          </h1>
          <p className="contact-hero-subtitle">
            CONNECT WITH OUR SPECIALIZED MARINE &amp; HYDRAULIC ENGINEERS
          </p>
          <p className="contact-hero-lead">
            Have questions about custom commercial fishing haulers, winches, hydraulic pumps, motors, seals, or vessel installations? We are ready to assist you.
          </p>
        </div>
      </section>

      {/* 4 Contact Highlight Info Cards */}
      <section className="contact-cards-section">
        <div className="auto-container">
          <div className="contact-cards-grid">
            {/* Card 1: Call Us */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-card-subtitle">DIRECT CALLS</div>
              <h3 className="contact-card-title">Call Us</h3>
              <div className="contact-card-content">
                <a href="tel:+94773276080" className="contact-card-link">
                  <span style={{ color: "#eab308" }}>📞</span> +94 773 276080
                </a>
                <a href="tel:+94706276080" className="contact-card-link">
                  <span style={{ color: "#eab308" }}>📞</span> +94 706 276080
                </a>
                <a href="tel:+94778014209" className="contact-card-link">
                  <span style={{ color: "#eab308" }}>📞</span> +94 778 014209
                </a>
              </div>
            </div>

            {/* Card 2: Email Us */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-card-subtitle">ONLINE INQUIRIES</div>
              <h3 className="contact-card-title">Email Us</h3>
              <div className="contact-card-content">
                <a href="mailto:info@nuradha.com" className="contact-card-link">
                  <span style={{ color: "#eab308" }}>✉️</span> info@nuradha.com
                </a>
                <a href="mailto:nuwan@nuradha.com" className="contact-card-link">
                  <span style={{ color: "#eab308" }}>✉️</span> nuwan@nuradha.com
                </a>
                <a href="mailto:danthe004@yahoo.com" className="contact-card-link">
                  <span style={{ color: "#eab308" }}>✉️</span> danthe004@yahoo.com
                </a>
              </div>
            </div>

            {/* Card 3: Visit Us */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-card-subtitle">HEAD OFFICE &amp; FACTORY</div>
              <h3 className="contact-card-title">Visit Us</h3>
              <div className="contact-card-content">
                <p className="contact-card-text">
                  No. 85/25, Custom Road,<br />
                  Beruwala, Sri Lanka
                </p>
                <a
                  href="https://www.google.com/maps/place/Nuradha+Engneering,+41+Mangala+Rd,+Beruwala+12070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-link"
                  style={{ color: "#eab308", fontWeight: 700, marginTop: "6px" }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Card 4: Hours & WhatsApp */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="contact-card-subtitle">HOURS &amp; CHAT</div>
              <h3 className="contact-card-title">We Are Open</h3>
              <div className="contact-card-content">
                <p className="contact-card-text">
                  Monday – Saturday:<br />
                  <strong>8.30 AM – 5.30 PM</strong>
                </p>
                <div style={{ marginTop: "4px" }}>
                  <a
                    href="https://wa.me/94773276080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card-link"
                    style={{ color: "#22c55e", fontWeight: 700 }}
                  >
                    💬 WhatsApp: +94 773 276080
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Map Interactive Section */}
      <section className="contact-main-section">
        <div className="auto-container">
          <div className="contact-main-grid">
            {/* Form Box */}
            <div className="contact-form-box">
              <h2 className="contact-form-title">
                DROP A <span className="gold-accent">MESSAGE</span>
              </h2>
              <p className="contact-form-desc">
                Fill out the form below with your requirements or questions. Our technical team will respond promptly.
              </p>

              {status !== "idle" && (
                <div className={`contact-form-status ${status}`}>
                  {statusMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot field */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="name">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="contact-form-input"
                      placeholder="e.g. John Perera"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="email">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="contact-form-input"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="contact-form-input"
                      placeholder="e.g. +94 77 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="subject">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="contact-form-input"
                      placeholder="e.g. Longline Hauler Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="message">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact-form-textarea"
                    placeholder="Describe your vessel specifications, required equipment, or project details..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-contact-submit"
                  disabled={status === "loading"}
                >
                  <span>{status === "loading" ? "SENDING INQUIRY..." : "SEND MESSAGE"}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Google Maps Card */}
            <div className="contact-map-box">
              <iframe
                title="Nuradha Engineering Location Map"
                src="https://maps.google.com/maps?q=Nuradha+Engneering,+41+Mangala+Rd,+Beruwala+12070&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="contact-map-frame"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact-map-details">
                <h3 className="contact-map-title">OUR LOCATION</h3>
                <p className="contact-map-address">
                  Nuradha Engineering Factory &amp; Service Workshop<br />
                  No. 85/25, Custom Road, Beruwala 12070, Sri Lanka
                </p>
                <a
                  href="https://www.google.com/maps/place/Nuradha+Engneering,+41+Mangala+Rd,+Beruwala+12070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact-directions"
                >
                  <span>Open in Google Maps</span>
                  <span>📍</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Floating Elements (WhatsApp & Scroll-To-Top) */}
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
