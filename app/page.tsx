import LegacyMarkupPage from "../components/LegacyMarkupPage";
import { legacyPages } from "../lib/legacy-page-data";

export default function HomePage() {
  return <LegacyMarkupPage fragment={legacyPages.index.fragment} />;
}
