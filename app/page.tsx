import EquipmentSpectrumBanner from "../components/EquipmentSpectrumBanner";
import HomeHeroSlider from "../components/HomeHeroSlider";
import HydraulicSolutionsSection from "../components/HydraulicSolutionsSection";
import MarineHaulersSection from "../components/MarineHaulersSection";
import ServicesSolutionsSection from "../components/ServicesSolutionsSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <SiteHeader />
      <HomeHeroSlider />

      <HydraulicSolutionsSection />

      <ServicesSolutionsSection />

      <EquipmentSpectrumBanner />

      <MarineHaulersSection />

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
