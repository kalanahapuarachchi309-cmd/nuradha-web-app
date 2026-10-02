import type { Metadata } from "next";
import AboutContent from "../../components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Nuradha Engineering",
  description:
    "Learn about Nuradha Engineering, established in 1989 as Sri Lanka's leading manufacturer and exporter of commercial fishing haulers, winches, hydraulic solutions, and marine equipment.",
  keywords:
    "About Nuradha Engineering, commercial fishing haulers, fishing winches, Blue Thunder, marine equipment Sri Lanka, hydraulic solutions, Danthanarayana",
};

export default function AboutPage() {
  return <AboutContent />;
}
