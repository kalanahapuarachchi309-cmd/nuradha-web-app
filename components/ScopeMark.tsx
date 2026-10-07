"use client";

import React, { useState } from "react";

interface ScopeMarkProps {
  label?: string;
  className?: string;
}

export default function ScopeMark({ label = "Category Target Scope", className = "" }: ScopeMarkProps) {
  const [isLocked, setIsLocked] = useState(false);
  const [isPingActive, setIsPingActive] = useState(false);

  const triggerInteraction = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setIsPingActive(true);
    setIsLocked((prev) => !prev);
    setTimeout(() => {
      setIsPingActive(false);
    }, 900);
  };

  return (
    <button
      type="button"
      className={`pro-scope-badge ${isLocked ? "is-locked" : ""} ${className}`}
      onClick={triggerInteraction}
      aria-label={`${label} - ${isLocked ? "Target Locked" : "Click to lock target"}`}
      title={isLocked ? "Target Locked • Click to unlock" : "Precision Scope • Click to lock target"}
    >
      {/* Background ambient radar glow */}
      <span className="pro-scope-ambient-glow" />

      {/* Dynamic Radar Ping Wave on click / lock */}
      {(isPingActive || isLocked) && <span className="pro-scope-ping-wave" />}

      {/* Main Vector Scope Reticle */}
      <svg
        className="pro-scope-svg"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Scope Lens Background */}
        <circle cx="22" cy="22" r="19" className="scope-lens" />

        {/* 4 Optical Corner Framing Brackets */}
        <path d="M 7 14 L 7 7 L 14 7" className="scope-bracket scope-bracket-tl" />
        <path d="M 37 14 L 37 7 L 30 7" className="scope-bracket scope-bracket-tr" />
        <path d="M 7 30 L 7 37 L 14 37" className="scope-bracket scope-bracket-bl" />
        <path d="M 37 30 L 37 37 L 30 37" className="scope-bracket scope-bracket-br" />

        {/* Rotating Crosshair & Reticle Rings */}
        <g className="scope-rotator">
          {/* Outer Segmented Reticle Ring */}
          <circle cx="22" cy="22" r="13.5" className="scope-outer-ring" />

          {/* Inner Precision Target Ring */}
          <circle cx="22" cy="22" r="7.5" className="scope-inner-ring" />

          {/* Crosshair Spoke Lines */}
          <line x1="22" y1="4.5" x2="22" y2="11.5" className="scope-axis" />
          <line x1="22" y1="32.5" x2="22" y2="39.5" className="scope-axis" />
          <line x1="4.5" y1="22" x2="11.5" y2="22" className="scope-axis" />
          <line x1="32.5" y1="22" x2="39.5" y2="22" className="scope-axis" />

          {/* 45-degree Milliradian Tick Marks */}
          <line x1="12.5" y1="12.5" x2="14.5" y2="14.5" className="scope-milli-tick" />
          <line x1="31.5" y1="12.5" x2="29.5" y2="14.5" className="scope-milli-tick" />
          <line x1="12.5" y1="31.5" x2="14.5" y2="29.5" className="scope-milli-tick" />
          <line x1="31.5" y1="31.5" x2="29.5" y2="29.5" className="scope-milli-tick" />
        </g>

        {/* Center Target Laser Pip */}
        <circle cx="22" cy="22" r="2.2" className="scope-pip" />
        <circle cx="22" cy="22" r="0.9" className="scope-pip-core" />
      </svg>

      {/* Micro Status Chip */}
      {isLocked && <span className="pro-scope-status-chip">LOCK</span>}
    </button>
  );
}
