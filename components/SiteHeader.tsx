const haulerLinks = [
  ["Long Line Hauler", "/item-page4"],
  ["Net Hauler", "/item-page3"],
  ["Purse Seine Winch", "/item-page1"],
  ["Combine Net & Pot Hauler", "/item-page5"],
  ["Pot Hauler", "/item-page2"],
  ["Hydraulic Line Hauler", "/item-page6"],
];

const productLinks = [
  ["Spares & Accessories", "/accessories-spares"],
  ["Inboard Marine Steering", "/marine-steering"],
  ["Hydraulic Motors", "/hydrolic-motors"],
  ["Hydraulic Pump", "/hydrolic-pump"],
  ["Hydraulic Seals O Rings", "/seals-rings"],
  ["Spiral Gasket", "/spiral-gasket"],
  ["Sea Water Pump", "/water-pump"],
];

export default function SiteHeader() {
  return (
    <header className="main-header header-style-one">
      <div className="header-upper" style={{ position: "fixed" }}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo-box">
              <div className="logo">
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

                <nav className="main-menu navbar-expand-md navbar-light" style={{ marginRight: "4vw" }} aria-label="Primary">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li className="nav-item dropdown" id="product-dropdown">
                        <a className="nav-link dropdown-toggle" href="/projects">Products</a>
                        <ul className="dropdown-menu" style={{ marginLeft: "-12vw" }}>
                          <li className="nav-item dropdown prod-dropdown">
                            <a className="nav-link dropdown-toggle">Haulers &amp; Winches</a>
                            <ul className="dropdown-menu">
                              {haulerLinks.map(([label, href]) => (
                                <li key={href}><a className="dropdown-item" href={href}>{label}</a></li>
                              ))}
                            </ul>
                          </li>
                          <li className="nav-item dropdown prod-dropdown">
                            <a className="nav-link dropdown-toggle">Inboard Marine Engines</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="/marineengine_new">Brand-new Marine Engine</a></li>
                              <li><a className="dropdown-item" href="/marineengine_rec">Recondition Marine Engine</a></li>
                            </ul>
                          </li>
                          {productLinks.map(([label, href]) => (
                            <li className="prod-dropdown" key={href}>
                              <a className="dropdown-item" href={href}>{label}</a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li><a style={{ marginLeft: "-1vw" }} href="/contact">Contact Us</a></li>
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
        <div className="close-btn"><span className="icon flaticon-remove" /></div>
        <nav className="menu-box" aria-label="Mobile navigation">
          <div className="nav-logo" />
          <ul className="ml-4">
            <li className="mb-2"><a href="/" style={{ fontSize: "1.2em", color: "white" }}>Home</a></li>
            <li className="mb-2"><a href="/about" style={{ fontSize: "1.2em", color: "white" }}>About Us</a></li>
            <li className="mb-2"><a href="/projects" style={{ fontSize: "1.2em", color: "white" }}>Products</a></li>
            <li className="mb-2"><a href="/contact" style={{ fontSize: "1.2em", color: "white" }}>Contact Us</a></li>
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
