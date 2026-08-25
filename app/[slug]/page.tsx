import { notFound } from "next/navigation";
import ContactFormEnhancer from "../../components/ContactFormEnhancer";
import LegacyMarkupPage from "../../components/LegacyMarkupPage";
import ProjectsCMSInjector from "../../components/ProjectsCMSInjector";
import { legacyPageSlugs, legacyPages } from "../../lib/legacy-page-data";

type LegacyPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return legacyPageSlugs
    .filter((slug) => slug !== "about")
    .map((slug) => ({ slug }));
}

export function generateMetadata({ params }: LegacyPageProps) {
  const page = legacyPages[params.slug];

  if (!page) {
    return {};
  }

  return {
    title: page.title || "Nuradha",
    description: page.description || undefined,
    keywords: page.keywords || undefined,
  };
}

export default function LegacyPage({ params }: LegacyPageProps) {
  const page = legacyPages[params.slug];

  if (!page) {
    notFound();
  }

  return (
    <>
      <LegacyMarkupPage fragment={page.fragment} />
      {params.slug === "contact" ? <ContactFormEnhancer /> : null}
      {params.slug === "projects" ? <ProjectsCMSInjector /> : null}
    </>
  );
}
