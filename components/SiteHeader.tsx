export default function SiteHeader() {
  return (
    <header className="main-header header-style-one">
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo-box">
              <div className="logo">
                <a href="/">
                  <img src="/assets/images/logo.png" alt="Nuradha" />
                </a>
              </div>
            </div>
            <div className="right-column">
              <div className="nav-outer">
                <div className="mobile-nav-toggler">
                  <img src="/assets/images/icons/icon-bar-2.png" alt="" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light" style={{ marginRight: "4vw" }}>
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li className="nav-item dropdown" id="product-dropdown">
                        <a className="nav-link dropdown-toggle" href="/projects">Products</a>
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
    </header>
  );
}
