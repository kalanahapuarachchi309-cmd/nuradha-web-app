"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ScopeMark from "./ScopeMark";
import { fetchCMSProducts, formatImageUrl, CMSProduct } from "../lib/api";

export type ProductItem = {
  id: string;
  title: string;
  category: string;
  categoryKey: string;
  image: string;
  link: string;
  description: string;
  features?: string[];
  isSubProductOfWinches?: boolean;
};

// 1. MARINE WINCHES , HAULERS & REELS (7 Sub-Products)
const winchesAndHaulersProducts: ProductItem[] = [
  {
    id: "blue-thunder-longline-hauler",
    title: "BLUE THUNDER HYDRAULIC LONGLINE HAULER",
    category: "Marine Winches & Haulers",
    categoryKey: "haulers",
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+LONGLINE+HAULER.webp",
    link: "/item-page4",
    description: "Heavy-duty commercial hydraulic longline hauler engineered for pelagic tuna and swordfish deep-sea operations.",
    features: ["Pelagic Longline Recovery", "Variable Hydraulic Speed", "Continuous Heavy Pull"],
    isSubProductOfWinches: true,
  },
  {
    id: "blue-thunder-net-hauler",
    title: "BLUE THUNDER NET HAULER",
    category: "Marine Winches & Haulers",
    categoryKey: "haulers",
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+NET+HAULER.webp",
    link: "/item-page3",
    description: "High-torque continuous duty gillnet hauler delivering superior net retrieval power and vessel stability.",
    features: ["Continuous Gillnet Retrieval", "Wear-Resistant Sheaves", "Maximum Deck Stability"],
    isSubProductOfWinches: true,
  },
  {
    id: "blue-thunder-purse-seine-winch",
    title: "BLUE THUNDER PURSE SEINE WINCH",
    category: "Marine Winches & Haulers",
    categoryKey: "haulers",
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+PURSINE+WINCH.webp",
    link: "/item-page1",
    description: "Rugged marine hydraulic purse seine winch with precision clutch, progressive braking, and heavy pull capacity.",
    features: ["Progressive Disc Brake", "Precision Marine Clutch", "Heavy Load Capacity"],
    isSubProductOfWinches: true,
  },
  {
    id: "blue-thunder-combined-net-rope",
    title: "BLUE THUNDER COMBINED NET & ROPE HAULER",
    category: "Marine Winches & Haulers",
    categoryKey: "haulers",
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+COMBINED+NET+AND+ROPE.webp",
    link: "/item-page5",
    description: "Dual-function commercial fishing hauler accommodating both gillnets and pot lines on a single deck station.",
    features: ["Dual Net & Pot Lines", "Space-Saving Footprint", "Reversible Rotation"],
    isSubProductOfWinches: true,
  },
  {
    id: "blue-thunder-pot-hauler",
    title: "BLUE THUNDER POT HAULER",
    category: "Marine Winches & Haulers",
    categoryKey: "haulers",
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+POT+HAULER.webp",
    link: "/item-page2",
    description: "Dependable crab and lobster pot hauler with high pulling capacity and wear-resistant sheaves.",
    features: ["Crab & Lobster Trap Line", "High Sheave Grip", "Corrosion-Proof Bronze"],
    isSubProductOfWinches: true,
  },
  {
    id: "blue-thunder-deep-drop-reel",
    title: "BLUE THUNDER DEEP DROP FISHING REEL HYDRAULIC / ELECTRIC",
    category: "Marine Winches & Haulers",
    categoryKey: "haulers",
    image: "/assets/images/new-products/deep-drop-reel-deck-view.jpeg",
    link: "/deep-drop-reel",
    description: "Model NI13031984: 1,500m line capacity, 200 kg pull rating, variable 0-80 m/min retrieval, removable arm mount.",
    features: ["1,500m Line Capacity", "200 kg Pull Rating", "0-80 m/min Variable Speed"],
    isSubProductOfWinches: true,
  },
  {
    id: "blue-thunder-longline-spool",
    title: "BLUE THUNDER LONGLINE SPOOL",
    category: "Marine Winches & Haulers",
    categoryKey: "haulers",
    image: "/assets/images/new-products/longline-spool-main.jpeg",
    link: "/longline-spools",
    description: "100% custom-sized marine-grade aluminium spools, core widths, and line shooters tailored to your vessel deck.",
    features: ["Marine-Grade Aluminium", "Custom Core Diameters", "Precision Line Shooter Option"],
    isSubProductOfWinches: true,
  },
];

// 2. STANDALONE PRODUCTS (9 Direct Products)
const standaloneProducts: ProductItem[] = [
  {
    id: "hydraulic-pump",
    title: "HYDRAULIC PUMP",
    category: "Hydraulic Equipment",
    categoryKey: "hydraulics",
    image: "/assets/images/new-products/hydraulic-pumps-1.png",
    link: "/hydrolic-pump",
    description: "Heavy-duty fixed and variable displacement marine pumps delivering reliable hydraulic pressure up to 350 bar.",
    features: ["Rated Up to 350 Bar", "Fixed & Variable Output", "Direct PTO Shaft Coupling"],
  },
  {
    id: "hydraulic-motors",
    title: "HYDRAULIC MOTORS",
    category: "Hydraulic Equipment",
    categoryKey: "hydraulics",
    image: "/assets/images/new-products/hydraulic-motor-1.jpeg",
    link: "/hydrolic-motors",
    description: "High-torque low-speed (HTLS) orbital and radial piston hydraulic motors for winches, haulers, and marine drives.",
    features: ["Low-Speed High-Torque", "Continuous Duty Cycle", "Smooth Bi-Directional Drive"],
  },
  {
    id: "seals-and-rings",
    title: "CUSTOME MADE HYDRAULIC / PNEUMATIC SEALS & O RINGS",
    category: "Seals & Gaskets",
    categoryKey: "seals",
    image: "/assets/images/new-products/seals-display.jpeg",
    link: "/seals-rings",
    description: "Comprehensive stock of piston seals, rod seals, wiper seals, guide rings, and NBR/Viton/Silicone O-rings.",
    features: ["Piston & Rod Cylinder Seals", "Viton, NBR & Polyurethane", "Standard & Metric Sizes"],
  },
  {
    id: "heat-exchangers",
    title: "SEA WATER HEAT EXCHANGERS",
    category: "Heat Exchangers",
    categoryKey: "coolers",
    image: "/assets/images/new-products/cooler-1.png",
    link: "/heat-exchangers",
    description: "Marine propulsion and gearbox shell-and-tube coolers built with corrosion-resistant Cu-Ni 90/10 and SS 316L alloys.",
    features: ["Shell-and-Tube Design", "Anti-Fouling Seawater Circuit", "Cu-Ni 90/10 & SS 316L"],
  },
  {
    id: "ss-hydraulic-fittings",
    title: "STAINLESS STEEL HYDRAULIC FITTINGS",
    category: "Hydraulic Fittings",
    categoryKey: "fittings",
    image: "/assets/images/new-products/fittings-ss-1.png",
    link: "/stainless-steel-fittings",
    description: "Marine-grade 316 stainless steel high-pressure hydraulic hose fittings, BSPP/JIC adapters, and marine flanges.",
    features: ["Corrosion-Proof 316 SS", "BSPP / JIC / NPT Threading", "High-Pressure Rated"],
  },
  {
    id: "cnc-engineering",
    title: "MANUAL CNC ENGINEERING AND FABRICATIONS",
    category: "CNC & Engineering",
    categoryKey: "cnc",
    image: "/assets/images/new-products/lathe.png",
    link: "/cnc-engineering",
    description: "High-precision lathe turning, milling, boring, and custom fabrication for boat shafts, couplings, and winches.",
    features: ["Propeller Shaft Turning", "Bronze Bushing Machining", "Strict Engineering Tolerances"],
  },
  {
    id: "spiral-gaskets",
    title: "SPIRAL WOUND GASKETS",
    category: "Seals & Gaskets",
    categoryKey: "seals",
    image: "/assets/images/new-products/spiral-gasket-steam.jpeg",
    link: "/spiral-gasket",
    description: "High-pressure PTFE, graphite, and asbestos-free spiral wound metallic gaskets for exhaust, engine manifolds, and steam piping.",
    features: ["Exhaust & Manifold Rated", "Flexible Graphite & PTFE", "ASME / DIN Flange Standards"],
  },
  {
    id: "marine-steering",
    title: "INBOARD / OUTBOARD MARINE STEERING SYSTEMS",
    category: "Marine Steering",
    categoryKey: "steering",
    image: "/assets/images/projects-mainPage-slide-image/product_slide_Img03.jpeg",
    link: "/marine-steering",
    description: "Heavy-duty hydraulic helm pumps, rudder cylinders, and marine steering setups designed for multi-station control.",
    features: ["Manual & Power Helm Pumps", "Heavy-Duty Rudder Cylinders", "Inboard & Outboard Compatible"],
  },
  {
    id: "accessories-spares",
    title: "MARINE SPARES AND ACCESSORIES",
    category: "Marine Spares",
    categoryKey: "spares",
    image: "/assets/images/projects-mainPage-slide-image/product_slide_Img01.jpeg",
    link: "/accessories-spares",
    description: "Control valves, levers, drive couplings, hoses, filters, and genuine replacement components for marine deck equipment.",
    features: ["Multi-Spool Control Valves", "High-Pressure Hydraulic Hoses", "Drive Couplings & Flanges"],
  },
];

const categoryFilterTabs = [
  { key: "all", label: "All Products" },
  { key: "haulers", label: "Winches, Haulers & Reels" },
  { key: "hydraulics", label: "Hydraulic Pump & Motors" },
  { key: "seals", label: "Seals & Gaskets" },
  { key: "coolers", label: "Heat Exchangers" },
  { key: "fittings", label: "SS Hydraulic Fittings" },
  { key: "steering", label: "Marine Steering" },
  { key: "cnc", label: "CNC Engineering" },
  { key: "spares", label: "Spares & Accessories" },
];

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cmsProducts, setCmsProducts] = useState<ProductItem[]>([]);

  // Sync category from URL query (?cat=...) if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("cat");
      if (catParam && categoryFilterTabs.some((t) => t.key === catParam)) {
        setActiveCategory(catParam);
      }
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    async function loadCMS() {
      try {
        const items = await fetchCMSProducts();
        if (!isMounted || !items || items.length === 0) return;

        const converted: ProductItem[] = items.map((item: CMSProduct) => {
          let catKey = "haulers";
          const lowerCat = (item.categoryName || item.categorySlug || "").toLowerCase();
          if (lowerCat.includes("cooler") || lowerCat.includes("heat")) catKey = "coolers";
          else if (lowerCat.includes("motor") || lowerCat.includes("pump") || lowerCat.includes("hydraulic")) catKey = "hydraulics";
          else if (lowerCat.includes("fitting")) catKey = "fittings";
          else if (lowerCat.includes("seal") || lowerCat.includes("gasket")) catKey = "seals";
          else if (lowerCat.includes("steer")) catKey = "steering";
          else if (lowerCat.includes("cnc") || lowerCat.includes("lathe")) catKey = "cnc";
          else if (lowerCat.includes("spare") || lowerCat.includes("access")) catKey = "spares";

          return {
            id: `cms-${item.id || item.title}`,
            title: item.title.toUpperCase(),
            category: item.categoryName || "Commercial Equipment",
            categoryKey: catKey,
            image: formatImageUrl(item.imageUrl),
            link: item.id ? `/product/${item.id}` : "/projects",
            description: item.description || item.subtitle || "Commercial marine equipment engineered to international standards.",
            features: ["Export Standard", "Marine Grade", "Custom Sizing"],
          };
        });

        setCmsProducts(converted);
      } catch (err) {
        console.warn("Could not load CMS products:", err);
      }
    }
    loadCMS();
    return () => {
      isMounted = false;
    };
  }, []);

  const allProductsList = useMemo(() => {
    return [...winchesAndHaulersProducts, ...standaloneProducts, ...cmsProducts];
  }, [cmsProducts]);

  // Counts per category tab
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allProductsList.length };
    allProductsList.forEach((p) => {
      counts[p.categoryKey] = (counts[p.categoryKey] || 0) + 1;
    });
    return counts;
  }, [allProductsList]);

  // Search filtered products
  const searchFilteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return null;
    return allProductsList.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.features?.some((f) => f.toLowerCase().includes(q))
      );
    });
  }, [allProductsList, searchQuery]);

  // Render a single product card
  const renderProductCard = (product: ProductItem) => {
    const whatsappText = encodeURIComponent(
      `Hello Nuradha Engineering, I would like to inquire about specifications and pricing for: ${product.title}`
    );
    const whatsappUrl = `https://wa.me/94773276080?text=${whatsappText}`;

    return (
      <div className="project-card" key={product.id}>
        <div className="project-card-img-wrap">
          <span className="project-card-category-tag">{product.category}</span>
          <img src={product.image} alt={product.title} loading="lazy" />
        </div>
        <div className="project-card-body">
          <h3 className="project-card-title">{product.title}</h3>
          <p className="project-card-desc">{product.description}</p>

          {product.features && product.features.length > 0 && (
            <div className="project-card-features">
              {product.features.map((feat, idx) => (
                <span className="project-feature-chip" key={idx}>
                  <span className="chip-bullet">✓</span> {feat}
                </span>
              ))}
            </div>
          )}

          <div className="project-card-footer">
            <Link
              href={product.link}
              className="project-card-cta"
              title={`View technical specifications for ${product.title}`}
            >
              <span>View Details</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-inquire-btn"
              title="Quick WhatsApp quote"
              aria-label={`Inquire about ${product.title} on WhatsApp`}
            >
              <span>WhatsApp Inquire</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-page">
      <SiteHeader />

      {/* Hero Banner with Search & Category Filter Navigation */}
      <section className="projects-hero-banner" aria-label="Our Products">
        <div className="auto-container">
          <div className="projects-badge-wrap">
            <div className="projects-badge">
              <span className="projects-badge-dot" />
              <span>COMMERCIAL MARINE EQUIPMENT • EXPORT STANDARD</span>
            </div>
          </div>
          <h1 className="projects-hero-title">
            OUR <span className="gold-accent">PRODUCTS</span>
          </h1>
          <p className="projects-hero-subtitle">
            COMMERCIAL FISHING HAULERS, WINCHES, HYDRAULICS &amp; MARINE SYSTEMS
          </p>
          <p className="projects-hero-lead">
            Explore our specialized Blue Thunder deck machinery, precision hydraulic pumps and motors, custom seals, seawater heat exchangers, 316 stainless fittings, and CNC marine engineering.
          </p>

          {/* User-Friendly Search & Category Filter Tabs */}
          <div className="projects-filter-wrapper">
            <div className="projects-search-bar">
              <span className="projects-search-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                className="projects-search-input"
                placeholder="Search products by model, machinery, pump, winch, seal, cooler..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="projects-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="pro-catalog-section dark-deep">
        <div className="auto-container">
          {/* SCENARIO 1: Search Active */}
          {searchQuery ? (
            <div className="projects-search-results-wrap">
              <div className="projects-search-header">
                <h2 className="projects-search-title">
                  Search Results for <span className="gold-accent">&ldquo;{searchQuery}&rdquo;</span>
                </h2>
                <p className="projects-search-count">
                  Found {searchFilteredProducts?.length || 0} matching product
                  {searchFilteredProducts?.length === 1 ? "" : "s"}
                </p>
                <button
                  type="button"
                  className="projects-btn-reset-search"
                  onClick={() => setSearchQuery("")}
                >
                  ← Clear Search &amp; View All Products
                </button>
              </div>

              {searchFilteredProducts && searchFilteredProducts.length > 0 ? (
                <div className="projects-grid">
                  {searchFilteredProducts.map((product) => renderProductCard(product))}
                </div>
              ) : (
                <div className="projects-empty-state">
                  <div className="projects-empty-icon">🔍</div>
                  <h3 className="projects-empty-title">No Matching Products Found</h3>
                  <p className="projects-empty-desc">
                    We couldn&apos;t find any products matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
                  </p>
                  <button
                    type="button"
                    className="projects-btn-reset"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                  >
                    Reset &amp; View All Products
                  </button>
                </div>
              )}
            </div>
          ) : activeCategory !== "all" ? (
            /* SCENARIO 2: Specific Category Filtered */
            (() => {
              const currentTab = categoryFilterTabs.find((t) => t.key === activeCategory);
              const filteredList = allProductsList.filter((p) => p.categoryKey === activeCategory);

              return (
                <div className="pro-category-single-view">
                  <div className="pro-single-nav-bar">
                    <button
                      type="button"
                      className="projects-back-all-btn"
                      onClick={() => setActiveCategory("all")}
                    >
                      ← View Full Product Catalog ({allProductsList.length} Items)
                    </button>
                    <span className="pro-single-current-tag">
                      Showing: {currentTab?.label || activeCategory} ({filteredList.length} Products)
                    </span>
                  </div>

                  <div className="pro-category-header focus-mode">
                    <div className="pro-category-badge-wrap">
                      <span className="pro-category-badge">COMMERCIAL MARINE EQUIPMENT</span>
                      <span className="pro-category-count-badge">
                        {filteredList.length} Products Available
                      </span>
                    </div>
                    <h2 className="pro-category-title">
                      <ScopeMark label={currentTab?.label || "Category"} />
                      <span>{currentTab?.label}</span>
                    </h2>
                    <p className="pro-category-subtitle">
                      Precision-engineered equipment built to rigorous commercial marine standards.
                    </p>
                  </div>

                  <div className="projects-grid">
                    {filteredList.map((product) => renderProductCard(product))}
                  </div>
                </div>
              );
            })()
          ) : (
            /* SCENARIO 3: "All Products" -> Organized by Main Product & Standalone Products */
            <div className="pro-categories-grouped-wrapper">
              {/* SECTION 1: Flagship Machinery with 7 Sub-Products */}
              <section className="pro-category-group" id="marine-winches-haulers">
                <div className="pro-category-header">
                  <div className="pro-category-badge-wrap">
                    <span className="pro-category-badge">
                      <span className="pro-badge-dot" />
                      BLUE THUNDER SERIES • FLAGSHIP COMMERCIAL DECK MACHINERY
                    </span>
                    <span className="pro-category-count-badge">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      7 Specialized Models
                    </span>
                  </div>

                  <h2 className="pro-category-title">
                    <ScopeMark label="Marine Winches, Haulers and Reels" />
                    <span>MARINE WINCHES, HAULERS &amp; REELS</span>
                  </h2>

                  <p className="pro-category-subtitle">
                    Commercial Longline Haulers, Continuous Net Haulers, Purse Seine Winches, Pot Haulers &amp; Deep Drop Reels
                  </p>

                  <p className="pro-category-desc">
                    Our flagship Blue Thunder series engineered with marine-grade cast bronze, high-torque hydraulic drives, and wear-resistant sheaves. Trusted across commercial pelagic fishing fleets for extreme pulling capacity and vessel stability at sea.
                  </p>

                  <div className="pro-category-action-row">
                    <div className="pro-category-highlights-bar">
                      <div className="pro-category-highlight-pill">
                        <svg className="pro-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Pelagic Longline Retrieval</span>
                      </div>
                      <div className="pro-category-highlight-pill">
                        <svg className="pro-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Continuous Gillnet Hauling</span>
                      </div>
                      <div className="pro-category-highlight-pill">
                        <svg className="pro-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>High-Torque Hydraulic Drives</span>
                      </div>
                      <div className="pro-category-highlight-pill">
                        <svg className="pro-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Custom Sized for Boat Decks</span>
                      </div>
                    </div>

                    <a
                      href="#marine-hydraulic-equipment"
                      className="pro-category-jump-btn"
                      title="Scroll down to view Our Other Products"
                    >
                      <span>Explore Our Other Products</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="projects-grid">
                  {winchesAndHaulersProducts.map((product) => renderProductCard(product))}
                </div>

                <div className="pro-category-divider">
                  <div className="divider-line" />
                  <div className="divider-badge">
                    <span className="divider-icon">⚓</span>
                    <span className="divider-text">OUR OTHER PRODUCTS &amp; SYSTEMS</span>
                  </div>
                  <div className="divider-line" />
                </div>
              </section>

              {/* SECTION 2: Standalone Marine & Hydraulic Products */}
              <section className="pro-category-group" id="marine-hydraulic-equipment">
                <div className="pro-category-header">
                  <div className="pro-category-badge-wrap">
                    <span className="pro-category-badge">
                      <span className="pro-badge-dot" />
                      OUR OTHER PRODUCTS • COMMERCIAL SYSTEMS &amp; PRECISION COMPONENTS
                    </span>
                    <span className="pro-category-count-badge">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      9 Standalone Product Lines
                    </span>
                  </div>

                  <h2 className="pro-category-title">
                    <ScopeMark label="Our Other Products - Commercial Marine & Hydraulic Systems" />
                    <span>OUR OTHER PRODUCTS</span>
                  </h2>

                  <p className="pro-category-subtitle">
                    Commercial Hydraulic Pumps &amp; Motors, Seals, Heat Exchangers, 316 SS Fittings, CNC Machining &amp; Steering
                  </p>

                  <p className="pro-category-desc">
                    Beyond our flagship Blue Thunder fishing winches and haulers, Nuradha Engineering manufactures, fabricates, and supplies an extensive inventory of high-pressure marine hydraulics, custom seals, Cu-Ni heat exchangers, and precision CNC components engineered to international maritime standards.
                  </p>

                  <div className="pro-category-action-row">
                    <div className="pro-category-highlights-bar">
                      <div className="pro-category-highlight-pill">
                        <svg className="pro-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Rated Up to 350 Bar Continuous</span>
                      </div>
                      <div className="pro-category-highlight-pill">
                        <svg className="pro-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Marine Grade 316 Stainless Steel</span>
                      </div>
                      <div className="pro-category-highlight-pill">
                        <svg className="pro-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Cu-Ni 90/10 Anti-Fouling Coolers</span>
                      </div>
                      <div className="pro-category-highlight-pill">
                        <svg className="pro-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Precision In-House CNC Lathe Machining</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="projects-grid">
                  {standaloneProducts.map((product) => renderProductCard(product))}
                </div>
              </section>

              {/* Optional Section: CMS Products if any */}
              {cmsProducts.length > 0 && (
                <section className="pro-category-group" id="cms-products">
                  <div className="pro-category-divider">
                    <div className="divider-line" />
                    <span className="divider-icon">⚓</span>
                    <div className="divider-line" />
                  </div>

                  <div className="pro-category-header">
                    <div className="pro-category-badge-wrap">
                      <span className="pro-category-badge">ADDITIONAL EQUIPMENT</span>
                      <span className="pro-category-count-badge">{cmsProducts.length} Items</span>
                    </div>
                    <h2 className="pro-category-title">
                      <ScopeMark label="Additional Marine Products" />
                      <span>ADDITIONAL MARINE PRODUCTS</span>
                    </h2>
                  </div>

                  <div className="projects-grid">
                    {cmsProducts.map((product) => renderProductCard(product))}
                  </div>
                </section>
              )}
            </div>
          )}
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
