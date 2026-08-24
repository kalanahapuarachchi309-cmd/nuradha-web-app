import EquipmentSpectrumBanner from "../components/EquipmentSpectrumBanner";
import HomeHeroSlider from "../components/HomeHeroSlider";
import HydraulicSolutionsSection from "../components/HydraulicSolutionsSection";
import ServicesSolutionsSection from "../components/ServicesSolutionsSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

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

      <HydraulicSolutionsSection />

      <ServicesSolutionsSection />

      <EquipmentSpectrumBanner />

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
