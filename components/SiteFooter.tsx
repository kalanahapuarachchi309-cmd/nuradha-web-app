export default function SiteFooter() {
  return (
    <>
      <footer className="main-footer" style={{ backgroundColor: "black" }} id="max-footer">
        <div className="upper-box">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget about-widget" style={{ margin: "6vh 0 0 8vw" }}>
                  <div className="logo m-sm-5">
                    <img src="/assets/images/logo.png" width="80" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget links-widget">
                  <h4 className="widget_title">FIND US</h4>
                  <div className="widget-content">
                    <ul className="list">
                      <li>
                        <a href="#"> No. 85/25, Custom Road, <br /> Beruwala, <br /> Sri Lanka </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget news-widget">
                  <h4 className="widget_title left-head-foot">GET IN TOUCH WITH US</h4>
                  <div className="news-widget-wrapper">
                    <div className="post">
                      <div className="content left-content-foot">
                        <div className="emails">+94 773 276080</div>
                        <div className="emails">+94 706 276080</div>
                        <div className="emails">+94 778 014209</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget news-widget">
                  <h4 className="widget_title">WRITE TO US</h4>
                  <div className="news-widget-wrapper">
                    <div className="post">
                      <div className="content">
                        <div className="emails">info@nuradha.com</div>
                        <div className="emails">nuwan@nuradha.com</div>
                        <div className="emails">danthe004@yahoo.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget about-widget" style={{ margin: "-4vh 0 0 8vw" }}>
                  <div className="logo m-sm-5">
                    <img src="/assets/images/logo1.png" className="footer-brand-logo" alt="Blue Thunder Fishing Gear" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget links-widget">
                  <h4 className="widget_title">DIRECTIONS</h4>
                  <div className="widget-content">
                    <ul className="list">
                      <li>
                        <a href="https://www.google.com/maps/place/Nuradha+Engneering,+41+Mangala+Rd,+Beruwala+12070">
                          Open in Google Map
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget news-widget">
                  <h4 className="widget_title left-head-foot">LET&apos;S WHATSAPP</h4>
                  <div className="news-widget-wrapper">
                    <div className="post">
                      <div className="content left-content-foot">
                        <div className="emails">+94 773 276080</div>
                        <div className="emails">+94 706 276080</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget news-widget">
                  <h4 className="widget_title">WE OPEN</h4>
                  <div className="news-widget-wrapper">
                    <div className="post">
                      <div className="content">
                        <div className="emails">Monday - Saturday</div>
                        <div className="emails">8.30 AM - 5.30 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer style={{ backgroundColor: "black", display: "none" }} id="min-footer">
        <div className="row mt-5">
          <div className="col-5">
            <div className="widget about-widget" style={{ marginLeft: "7vw" }}>
              <div className="logo m-sm-5">
                <img src="/assets/images/logo.png" width="80" alt="Nuradha Engineering" />
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="widget about-widget">
              <div className="logo m-sm-5">
                <img src="/assets/images/logo1.png" className="footer-brand-logo mobile" alt="Blue Thunder Fishing Gear" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="widget links-widget" style={{ marginLeft: "8vw" }}>
              <h4 className="widget_title">FIND US</h4>
              <div className="widget-content">No. 85/25, Custom Road,<br />Beruwala, Sri Lanka</div>
            </div>
          </div>
          <div className="col">
            <div className="widget news-widget">
              <h4 className="widget_title">GET IN TOUCH</h4>
              <div className="emails">+94 773 276080</div>
              <div className="emails">+94 706 276080</div>
              <div className="emails">+94 778 014209</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ marginLeft: "8vw" }}>
            <h4 className="widget_title">WRITE TO US</h4>
            <div className="emails">info@nuradha.com</div>
            <div className="emails">nuwan@nuradha.com</div>
            <div className="emails">danthe004@yahoo.com</div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="content">
            <ul className="social-icon">
              <li><a href="https://web.facebook.com/nuradhaeng/?_rdc=1&_rdr"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
              <li><a href="#"><i className="fab fa-youtube" /></a></li>
            </ul>
            <div className="copyright-text">© Copyright 2022 by nuradha.com</div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-brand-logo {
          display: block;
          width: 170px;
          max-width: 100%;
          height: auto;
        }

        .footer-brand-logo.mobile {
          width: 150px;
        }
      `}</style>
    </>
  );
}
