import HomeHeroSlider from "../components/HomeHeroSlider";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const solutions = [
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/solution-sction/Marine_Solution.jpeg",
    alt: "Marine solution",
    title: "Marine Solution",
    description:
      "Nuradha Engineering is a specialized manufacturer and a leading exporter of high-quality marine winches such as long line hauler, net hauler, purse seine winch, combined net and rope hauler, and manual line hauler.",
    animation: "fadeInUp",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/solution-sction/Hydraulic+Solution.jpeg",
    alt: "Hydraulic solution",
    title: "Hydraulic Solution",
    description:
      "We are a leading supplier of internationally recognized branded hydraulic pumps, hydraulic motors and components, to fishing boats and machinery.",
    animation: "fadeInDown",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/solution-sction/Sealing+Solution.jpeg",
    alt: "Sealing solution",
    title: "Sealing Solution",
    description:
      "We manufacture and import all kinds of hydraulic seals, pneumatic seals, mechanical seals, and also O rings for utilization of factories and heavy machinery.",
    animation: "fadeInUp",
  },
];

const marineProducts = [
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+LONGLINE+HAULER.webp",
    alt: "Blue Thunder Long Line Hauler",
    title: "Blue Thunder Long Line Hauler",
    href: "/item-page4",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+NET+HAULER.webp",
    alt: "Blue Thunder Net Hauler",
    title: "Blue Thunder Net Hauler",
    href: "/item-page3",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+PURSINE+WINCH.webp",
    alt: "Blue Thunder Purse Seine Winch",
    title: "Blue Thunder Purse Seine Winch",
    href: "/item-page1",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+COMBINED+NET+AND+ROPE.webp",
    alt: "Blue Thunder Combined Net and Rope Hauler",
    title: "Blue Thunder Combined Net & Rope Hauler",
    href: "/item-page5",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+POT+HAULER.webp",
    alt: "Blue Thunder Pot Hauler",
    title: "Blue Thunder Pot Hauler",
    href: "/item-page2",
  },
  {
    image: "https://d1efw33w1xgex9.cloudfront.net/img/MARINE+HAULERS+AND+WINCHES/BLUE+THANDER+MANUAL+%26+HYDRAULIC+LINE+HAULER.webp",
    alt: "Blue Thunder Manual and Hydraulic Line Hauler",
    title: "Blue Thunder Manual & Hydraulic Line Hauler",
    href: "/item-page6",
  },
];

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <SiteHeader />
      <HomeHeroSlider />

      <section className="cta-section" id="desc-img">
        <div className="auto-container">
          <div className="wrapper-box light-header hidden">
            <h4 className="fade-text" style={{ textAlign: "center", textTransform: "uppercase", fontWeight: 700 }}>
              We manufacture different varieties of hydraulic fishing winches and haulers.
              <br />
              We also supply various types of hydraulic pumps, motors,
              <br />
              oil seals, and O rings.
            </h4>
          </div>
        </div>
      </section>

      <section className="services-section pb-0">
        <div className="sec-bg" />
        <div className="auto-container">
          <div className="row" style={{ margin: "0 3vh" }}>
            {solutions.map((solution) => (
              <div className="col-lg-4 col-md-2 service-block hidden2" key={solution.title}>
                <div className={`inner-box wow ${solution.animation}`} data-wow-duration="1500ms">
                  <div className="image">
                    <img src={solution.image} alt={solution.alt} />
                  </div>
                  <div className="content">
                    <h3>
                      <a href="/projects">{solution.title}</a>
                    </h3>
                    <div className="text text-prods2">{solution.description}</div>
                    <div className="link">
                      <a href="/projects" className="theme-btn btn-style-one">
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section second-hd">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 main-desc-2">
              <div className="sec-title hidden">
                <h3 className="fade-text" style={{ textAlign: "center", fontWeight: "bold" }}>
                  “ We provide the entire spectrum of equipment solutions for your hydraulic requirements ”
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-3" style={{ backgroundColor: "black", padding: "5vh" }}>
        <div className="auto-container">
          <div className="wrapper-box light-header" style={{ textAlign: "center" }}>
            <h3 style={{ fontWeight: "bold" }}>MARINE HAULERS AND WINCHES</h3>
          </div>
        </div>
      </section>

      <section className="projects-section style-two">
        <div className="auto-container">
          <div className="row" style={{ padding: "3vw" }}>
            {marineProducts.map((product) => (
              <div className="col-lg-4 col-md-6 project-block hidden2" key={product.href}>
                <div className="inner-box">
                  <div className="image">
                    <img src={product.image} alt={product.alt} />
                  </div>
                  <div className="text-overlay test-desc">
                    <div className="link">
                      <a href={product.href} className="theme-btn btn-style-one goToProd">
                        <span>
                          <h3 style={{ color: "whitesmoke", fontSize: "1.3em", fontWeight: "bold" }}>
                            {product.title}
                          </h3>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />

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
