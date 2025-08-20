import tools from "@/utils/tools.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ✅ Generate SEO metadata dynamically from JSON
export async function generateMetadata({ params }) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) {
    return {
      title: "Tool Not Found | AI Tools",
      description: "The tool you are looking for does not exist.",
    };
  }

  return {
    title: tool.seo?.title || tool.name,
    description: tool.seo?.metaDescription || tool.shortDescription,
    keywords: tool.seo?.keywords || [],
    openGraph: {
      title: tool.seo?.title || tool.name,
      description: tool.seo?.metaDescription || tool.shortDescription,
      images: [
        {
          url: tool.image,
          alt: tool.name,
        },
      ],
      type: "website",
      url: `https://yourdomain.com/tools/${tool.slug}`, // ✅ canonical OG url
    },
    twitter: {
      card: "summary_large_image",
      title: tool.seo?.title || tool.name,
      description: tool.seo?.metaDescription || tool.shortDescription,
      images: [tool.image],
    },
  };
}

// ✅ Helper: reading time (if description is long)
function getReadingTime(text) {
  const words = text?.trim()?.split(/\s+/).length || 0;
  return Math.ceil(words / 200);
}

export default function ToolDetail({ params }) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) return notFound();

  const readingTime = getReadingTime(tool.description || "");

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      {/* ---------- Header ---------- */}
      <div className="text-center">
        <Image
          src={tool.image}
          alt={tool.name}
          width={120}
          height={120}
          className="mx-auto mb-6"
          loading="lazy"
        />
        <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>

        <div className="text-sm text-muted-foreground mb-4">
          {readingTime > 0 && <span>⏱ {readingTime} min read · </span>}
          {tool.category && <span>📂 {tool.category}</span>}
        </div>

        <p className="text-lg text-gray-700 mb-6">{tool.description}</p>

        {/* ✅ Official Website Link */}
        {tool?.website && (
          <Link
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 font-medium hover:underline"
          >
            🌐 Visit Official Website →
          </Link>
        )}
      </div>

      {/* ---------- Features ---------- */}
      {tool.features?.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-8 mb-4">✨ Key Features</h2>
          <ul className="list-disc pl-6 mb-6">
            {tool.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </>
      )}

      {/* ---------- Use Cases ---------- */}
      {tool.useCases?.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-8 mb-4">📌 Use Cases</h2>
          <ul className="list-disc pl-6 mb-6">
            {tool.useCases.map((u, i) => (
              <li key={i}>{u}</li>
            ))}
          </ul>
        </>
      )}

      {/* ---------- Pros & Cons ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {tool.pros?.length > 0 && (
          <div>
            <h3 className="font-semibold text-green-600">✅ Pros</h3>
            <ul className="list-disc pl-6">
              {tool.pros.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}

        {tool.cons?.length > 0 && (
          <div>
            <h3 className="font-semibold text-red-600">⚠️ Cons</h3>
            <ul className="list-disc pl-6">
              {tool.cons.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
