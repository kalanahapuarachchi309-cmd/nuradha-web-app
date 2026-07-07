type LegacyMarkupPageProps = {
  fragment: string;
};

export default function LegacyMarkupPage({ fragment }: LegacyMarkupPageProps) {
  return <div dangerouslySetInnerHTML={{ __html: fragment }} />;
}
