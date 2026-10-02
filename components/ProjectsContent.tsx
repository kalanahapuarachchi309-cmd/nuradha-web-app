"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { fetchCMSProducts, formatImageUrl, CMSProduct } from "../lib/api";

type ProductItem = {
  id: string;
  title: string;
  category: string;
  categoryKey: string;
  image: string;
  link: string;
  description: string;
};

const staticProducts: ProductItem[] = [
  // 1. Haulers & Winches
  {
    id: "long-line-hauler",
    title: "Blue Thunder Long Line Hauler",
    category: "Haulers & Winches",
    categoryKey: "haulers",
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+LONGLINE+HAULER.webp",
    link: "/item-page4",
    description: "Heavy-duty commercial long line hauler engineered for pelagic tuna and swordfish deep-sea operations.",
  },
  {
    id: "net-hauler",
    title: "Blue Thunder Net Hauler",
    category: "Haulers & Winches",
    categoryKey: "haulers",
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+NET+HAULER.webp",
    link: "/item-page3",
    description: "High-torque continuous duty gillnet hauler delivering superior net retrieval power and vessel stability.",
  },
  {
    id: "purse-seine-winch",
    title: "Blue Thunder Purse Seine Winch",
    category: "Haulers & Winches",
    categoryKey: "haulers",
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+PURSINE+WINCH.webp",
    link: "/item-page1",
    description: "Rugged marine hydraulic purse seine winch with precision clutch, progressive braking, and heavy pull capacity.",
  },
  {
    id: "combined-net-pot-hauler",
    title: "Blue Thunder Combined Net & Rope Hauler",
    category: "Haulers & Winches",
    categoryKey: "haulers",
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+COMBINED+NET+AND+ROPE.webp",
    link: "/item-page5",
    description: "Dual-function commercial fishing hauler accommodating both gillnets and pot lines on a single deck station.",
  },
  {
    id: "pot-hauler",
    title: "Blue Thunder Pot Hauler",
    category: "Haulers & Winches",
    categoryKey: "haulers",
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+POT+HAULER.webp",
    link: "/item-page2",
    description: "Dependable crab and lobster pot hauler with high pulling capacity and wear-resistant sheaves.",
  },
  {
    id: "manual-hydraulic-line-hauler",
    title: "Blue Thunder Manual & Hydraulic Line Hauler",
    category: "Haulers & Winches",
    categoryKey: "haulers",
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+MANUAL+%26+HYDRAULIC+LINE+HAULER.webp",
    link: "/item-page6",
    description: "Flexible dual-mode line hauler designed for small-to-medium fishing vessels requiring versatile line recovery.",
  },
  {
    id: "deep-drop-reel",
    title: "Deep Drop Fishing Reel (Hydraulic/Electric)",
    category: "Haulers & Winches",
    categoryKey: "haulers",
    image: "/assets/images/new-products/deep-drop-reel-deck-view.jpeg",
    link: "/deep-drop-reel",
    description: "Model NI13031984: 1,500m line capacity, 200 kg pull rating, variable 0-80 m/min retrieval, removable arm mount.",
  },
  {
    id: "longline-spools",
    title: "Custom Long Line Spools & Shooters",
    category: "Haulers & Winches",
    categoryKey: "haulers",
    image: "/assets/images/new-products/longline-spool-main.jpeg",
    link: "/longline-spools",
    description: "100% custom-sized marine-grade aluminium spools, core widths, and line shooters tailored to your vessel deck.",
  },

  // 2. Heat Exchangers & Coolers
  {
    id: "heat-exchangers",
    title: "Seawater Heat Exchangers & Oil Coolers",
    category: "Heat Exchangers",
    categoryKey: "coolers",
    image: "/assets/images/new-products/cooler-1.png",
    link: "/heat-exchangers",
    description: "Marine propulsion and gearbox shell-and-tube coolers built with corrosion-resistant alloys for extreme sea conditions.",
  },
  {
    id: "cooler-cores",
    title: "Custom Cooler Cores & Tube Bundles",
    category: "Heat Exchangers",
    categoryKey: "coolers",
    image: "/assets/images/new-products/cooler-cores-ss.png",
    link: "/heat-exchangers",
    description: "Precision replacement tube bundles fabricated in SS 316L and copper-nickel (Cu-Ni 90/10) with custom baffle geometry.",
  },

  // 3. Hydraulic Solutions
  {
    id: "hydraulic-motors",
    title: "Hydraulic Motors (Orbital & Radial)",
    category: "Hydraulics",
    categoryKey: "hydraulics",
    image: "/assets/images/new-products/hydraulic-motor-1.jpeg",
    link: "/hydrolic-motors",
    description: "High-torque low-speed (HTLS) orbital and radial piston hydraulic motors for winches, haulers, and marine drives.",
  },
  {
    id: "hydraulic-pumps",
    title: "Hydraulic Pumps (Piston & Gear)",
    category: "Hydraulics",
    categoryKey: "hydraulics",
    image: "/assets/images/new-products/hydraulic-pumps-1.png",
    link: "/hydrolic-pump",
    description: "Heavy-duty fixed and variable displacement marine pumps delivering reliable hydraulic pressure up to 350 bar.",
  },
  {
    id: "ss-hydraulic-fittings",
    title: "SS Hydraulic Fittings & Adapters",
    category: "Hydraulics",
    categoryKey: "hydraulics",
    image: "/assets/images/new-products/fittings-ss-1.png",
    link: "/stainless-steel-fittings",
    description: "Marine-grade 316 stainless steel high-pressure hydraulic hose fittings, BSPP/JIC adapters, and marine flanges.",
  },

  // 4. Seals & Gaskets
  {
    id: "hydraulic-seals",
    title: "Hydraulic Seals & O-Rings",
    category: "Seals & Gaskets",
    categoryKey: "seals",
    image: "/assets/images/new-products/seals-display.jpeg",
    link: "/seals-rings",
    description: "Comprehensive stock of piston seals, rod seals, wiper seals, guide rings, and NBR/Viton/Silicone O-rings.",
  },
  {
    id: "spiral-gaskets",
    title: "Spiral Wound Gaskets",
    category: "Seals & Gaskets",
    categoryKey: "seals",
    image: "/assets/images/new-products/spiral-gasket-steam.jpeg",
    link: "/spiral-gasket",
    description: "High-pressure PTFE, graphite, and asbestos-free spiral wound metallic gaskets for exhaust, engine manifolds, and steam piping.",
  },

  // 5. Steering, Pumps & Fabrication
  {
    id: "marine-steering",
    title: "Inboard Marine Steering Systems",
    category: "Steering & CNC",
    categoryKey: "steering",
    image: "/assets/images/projects-mainPage-slide-image/product_slide_Img03.jpeg",
    link: "/marine-steering",
    description: "Heavy-duty hydraulic helm pumps, rudder cylinders, and marine steering setups designed for multi-station control.",
  },
  {
    id: "water-pump",
    title: "Sea Water Cooling Pumps",
    category: "Steering & CNC",
    categoryKey: "steering",
    image: "/assets/images/projects-mainPage-slide-image/product_slide_Img02.jpeg",
    link: "/water-pump",
    description: "Bronze impeller marine raw water pumps for engine cooling, deck washdown, and seawater circulation.",
  },
  {
    id: "cnc-engineering",
    title: "CNC Machining & Precision Fabrication",
    category: "Steering & CNC",
    categoryKey: "steering",
    image: "/assets/images/new-products/lathe.png",
    link: "/cnc-engineering",
    description: "High-precision lathe turning, milling, boring, and custom fabrication for boat shafts, couplings, and winches.",
  },
  {
    id: "accessories-spares",
    title: "Marine Spares & Accessories",
    category: "Spares & Accessories",
    categoryKey: "spares",
    image: "/assets/images/projects-mainPage-slide-image/product_slide_Img01.jpeg",
    link: "/accessories-spares",
    description: "Control valves, levers, drive couplings, hoses, filters, and genuine replacement components for marine deck equipment.",
  },

  // 6. Marine Engines
  {
    id: "marineengine-new",
    title: "Brand-New Inboard Marine Engines",
    category: "Marine Engines",
    categoryKey: "engines",
    image: "/assets/images/projects-mainPage-slide-image/product_slide_Img04.jpeg",
    link: "/marineengine_new",
    description: "Brand-new commercial inboard diesel propulsion engines built for heavy sea duty and high fuel efficiency.",
  },
];

const categoryFilters = [
  { key: "all", label: "All Products" },
  { key: "haulers", label: "Haulers & Winches" },
  { key: "coolers", label: "Heat Exchangers" },
  { key: "hydraulics", label: "Hydraulics" },
  { key: "seals", label: "Seals & Gaskets" },
  { key: "steering", label: "Steering & CNC" },
  { key: "engines", label: "Marine Engines" },
  { key: "spares", label: "Spares & Accessories" },
];

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cmsProducts, setCmsProducts] = useState<ProductItem[]>([]);

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
          else if (lowerCat.includes("seal") || lowerCat.includes("gasket")) catKey = "seals";
          else if (lowerCat.includes("engine")) catKey = "engines";
          else if (lowerCat.includes("steer") || lowerCat.includes("cnc")) catKey = "steering";
          else if (lowerCat.includes("spare")) catKey = "spares";

          return {
            id: `cms-${item.id || item.title}`,
            title: item.title,
            category: item.categoryName || "Commercial Equipment",
            categoryKey: catKey,
            image: formatImageUrl(item.imageUrl),
            link: item.id ? `/product/${item.id}` : "/projects",
            description: item.description || item.subtitle || "Commercial marine equipment engineered to international standards.",
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

  const allCombinedProducts = useMemo(() => {
    return [...staticProducts, ...cmsProducts];
  }, [cmsProducts]);

  const filteredProducts = useMemo(() => {
    return allCombinedProducts.filter((p) => {
      const matchesCat = activeCategory === "all" || p.categoryKey === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [allCombinedProducts, activeCategory, searchQuery]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allCombinedProducts.length };
    allCombinedProducts.forEach((p) => {
      counts[p.categoryKey] = (counts[p.categoryKey] || 0) + 1;
    });
    return counts;
  }, [allCombinedProducts]);

  return (
    <div className="projects-page">
      <SiteHeader />

      {/* Hero Banner with Home Screen Styling */}
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
            COMMERCIAL FISHING HAULERS, WINCHES, ENGINES &amp; HYDRAULIC SYSTEMS
          </p>
          <p className="projects-hero-lead">
            Explore our comprehensive range of deck machinery, precision hydraulic components, seawater heat exchangers, and marine propulsion equipment engineered for professional boat operators worldwide.
          </p>

          {/* User-Friendly Search & Category Filter Controls */}
          <div className="projects-filter-wrapper">
            <div className="projects-search-bar">
              <span className="projects-search-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                className="projects-search-input"
                placeholder="Search products (e.g. Hauler, Winch, Pump, Cooler, Engine, Seals...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
            </div>

            <div className="projects-category-pills">
              {categoryFilters.map((cat) => (
                <button
                  type="button"
                  key={cat.key}
                  className={`projects-category-pill ${activeCategory === cat.key ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  <span>{cat.label}</span>
                  <span className="projects-pill-count">{categoryCounts[cat.key] || 0}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Grid Section */}
      <section className="pro-catalog-section dark-deep">
        <div className="auto-container">
          {filteredProducts.length === 0 ? (
            <div className="projects-empty-state">
              <div className="projects-empty-icon">🔍</div>
              <h3 className="projects-empty-title">No Products Found</h3>
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
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProducts.map((product) => (
                <Link
                  href={product.link}
                  className="project-card"
                  key={product.id}
                  title={`View details for ${product.title}`}
                >
                  <div className="project-card-img-wrap">
                    <span className="project-card-category-tag">{product.category}</span>
                    <img src={product.image} alt={product.title} loading="lazy" />
                  </div>
                  <div className="project-card-body">
                    <h3 className="project-card-title">{product.title}</h3>
                    <p className="project-card-desc">{product.description}</p>
                    <div className="project-card-footer">
                      <span className="project-card-cta">
                        <span>View Details</span>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
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
