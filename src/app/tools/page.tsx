import Script from "next/script";
import tools from "@/utils/tools.json";
import ToolsList from "@/components/ToolsList";

// ✅ SEO Metadata
export const metadata = {
  title: "Top AI Tools 2025 | Best Artificial Intelligence Software",
  description:
    "Discover the best AI tools for productivity, automation, content creation, and more. Compare features, pros & cons, and explore detailed reviews of top AI software.",
  keywords: [
    "AI tools",
    "best AI software",
    "AI productivity apps",
    "AI tools 2025",
    "AI automation tools",
  ],
  openGraph: {
    title: "Top AI Tools | Best Artificial Intelligence Software",
    description:
      "Explore the most powerful AI tools with features, pros, and cons.",
    url: "https://yourdomain.com/tools",
    type: "website",
  },
};

export default function ToolsPage() {
  return (
    <>
      {/* ✅ JSON-LD Structured Data for ItemList */}
      <Script
        id="tools-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Top AI Tools",
            itemListElement: tools.map((tool, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://yourdomain.com/tools/${tool.slug}`,
              name: tool.name,
              image: tool.image,
              description: tool.shortDescription,
            })),
          }),
        }}
      />

      {/* ✅ Client component for search & list */}
      <ToolsList tools={tools} />
    </>
  );
}
