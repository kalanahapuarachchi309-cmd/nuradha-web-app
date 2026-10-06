"use client";

import { usePathname } from "next/navigation";

const marineWinchesAndHaulers = [
  ["Blue Thunder Hydraulic Longline Hauler", "/item-page4"],
  ["Blue Thunder Net Hauler", "/item-page3"],
  ["Blue Thunder Purse Seine Winch", "/item-page1"],
  ["Blue Thunder Combined Net & Rope Hauler", "/item-page5"],
  ["Blue Thunder Pot Hauler", "/item-page2"],
  ["Blue Thunder Deep Drop Fishing Reel Hydraulic / Electric", "/deep-drop-reel"],
  ["Blue Thunder Longline Spool", "/longline-spools"],
];

const directProducts = [
  ["Hydraulic Pump", "/hydrolic-pump"],
  ["Hydraulic Motors", "/hydrolic-motors"],
  ["Custom Made Hydraulic / Pneumatic Seals & O Rings", "/seals-rings"],
  ["Sea Water Heat Exchangers", "/heat-exchangers"],
  ["Stainless Steel Hydraulic Fittings", "/stainless-steel-fittings"],
  ["Manual CNC Engineering and Fabrications", "/cnc-engineering"],
  ["Spiral Wound Gaskets", "/spiral-gasket"],
  ["Inboard / Outboard Marine Steering Systems", "/marine-steering"],
  ["Marine Spares and Accessories", "/accessories-spares"],
];

export default function SiteHeader() {
  const pathname = usePathname() || "/";

  return (
    <header className="main-header header-style-one">
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo-box">
              <div className="logo logo-white-box">
                <a href="/">
                  <img src="/assets/images/logo.png" alt="Nuradha Engineering" />
                </a>
              </div>
            </div>

            <div className="right-column">
              <div className="nav-outer">
                <div className="mobile-nav-toggler">
                  <img src="/assets/images/icons/icon-bar-2.png" alt="Open navigation" />
                </div>

                <nav className="main-menu navbar-expand-md navbar-light" aria-label="Primary">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation">
                      <li>
                        <a href="/" className={pathname === "/" ? "nav-link-active" : ""}>
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/about" className={pathname === "/about" ? "nav-link-active" : ""}>
                          About Us
                        </a>
                      </li>
                      <li className="nav-item dropdown" id="product-dropdown">
                        <a
                          className={`nav-link dropdown-toggle ${
                            pathname.startsWith("/projects") ||
                            pathname.startsWith("/item-page") ||
                            pathname.startsWith("/product") ||
                            pathname.startsWith("/deep-drop") ||
                            pathname.startsWith("/longline") ||
                            pathname.startsWith("/heat-exchanger") ||
                            pathname.startsWith("/hydrolic") ||
                            pathname.startsWith("/seals") ||
                            pathname.startsWith("/spiral") ||
                            pathname.startsWith("/marine") ||
                            pathname.startsWith("/water-pump") ||
                            pathname.startsWith("/cnc") ||
                            pathname.startsWith("/accessories")
                              ? "nav-link-active"
                              : ""
                          }`}
                          href="/projects"
                        >
                          Products
                        </a>
                        <ul className="dropdown-menu">
                          <li className="prod-all-item">
                            <a className="dropdown-item prod-all-link" href="/projects">
                              ⚓ All Products Catalog (16 Items) →
                            </a>
                          </li>
                          <li className="dropdown-divider" style={{ borderColor: "rgba(234, 179, 8, 0.2)", margin: "4px 0" }} />

                          {/* Only this section has sub-products! */}
                          <li className="nav-item dropdown prod-dropdown">
                            <a className="nav-link dropdown-toggle" href="/projects?cat=haulers">
                              Marine Winches , Haulers &amp; Reels
                            </a>
                            <ul className="dropdown-menu">
                              {marineWinchesAndHaulers.map(([label, href]) => (
                                <li key={href}>
                                  <a className="dropdown-item" href={href}>
                                    {label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>

                          {/* Other products do NOT have sub-products: they are direct product links */}
                          {directProducts.map(([label, href]) => (
                            <li className="prod-dropdown" key={href}>
                              <a className="dropdown-item" href={href}>
                                {label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <a href="/contact" className={pathname === "/contact" ? "nav-link-active" : ""}>
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <span className="icon flaticon-remove" />
        </div>
        <nav className="menu-box" aria-label="Mobile navigation">
          <div className="nav-logo" />
          <ul className="ml-4">
            <li className="mb-2">
              <a href="/" style={{ fontSize: "1.2em", color: "white" }}>
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" style={{ fontSize: "1.2em", color: "white" }}>
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/projects" style={{ fontSize: "1.2em", color: "white" }}>
                Products
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" style={{ fontSize: "1.2em", color: "white" }}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="nav-overlay">
        <div className="cursor" />
        <div className="cursor-follower" />
      </div>
    </header>
  );
}

