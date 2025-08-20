import tools from "@/utils/tools.json";
import Image from "next/image";
import { notFound } from "next/navigation";

// ✅ Generate metadata dynamically from JSON
export async function generateMetadata({ params }) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) return { title: "Tool Not Found" };

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
    },
    twitter: {
      card: "summary_large_image",
      title: tool.seo?.title || tool.name,
      description: tool.seo?.metaDescription || tool.shortDescription,
      images: [tool.image],
    },
  };
}

export default function ToolDetail({ params }) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) return notFound();

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center">
        <Image
          src={tool.image}
          alt={tool.name}
          width={120}
          height={120}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
        <p className="text-lg text-gray-700 mb-6">{tool.description}</p>

        {/* ✅ Official Website Link */}
        {tool.website && (
          <Link href={tool.website} className="mt-4 inline-block text-blue-600 font-medium hover:underline">
            🌐 Visit Official Website →
          </Link>
        )}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">✨ Key Features</h2>
      <ul className="list-disc pl-6 mb-6">
        {tool.features?.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">📌 Use Cases</h2>
      <ul className="list-disc pl-6 mb-6">
        {tool.useCases?.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div>
          <h3 className="font-semibold text-green-600">✅ Pros</h3>
          <ul className="list-disc pl-6">
            {tool.pros?.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-red-600">⚠️ Cons</h3>
          <ul className="list-disc pl-6">
            {tool.cons?.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
