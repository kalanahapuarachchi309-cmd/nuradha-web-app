import type { Metadata } from "next";
import ProjectsContent from "../../components/ProjectsContent";

export const metadata: Metadata = {
  title: "Commercial Marine Products & Equipment | Nuradha Engineering",
  description:
    "Explore Nuradha Engineering's full product catalog: Blue Thunder long line haulers, net haulers, pot haulers, winches, marine engines, seawater heat exchangers, hydraulic motors, pumps, and precision seals.",
  keywords:
    "commercial fishing haulers, fishing winches, Blue Thunder, marine engines, hydraulic motors, hydraulic pumps, seawater heat exchangers, oil seals, Sri Lanka",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
