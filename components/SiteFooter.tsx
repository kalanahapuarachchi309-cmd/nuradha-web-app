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
    </>
  );
}
