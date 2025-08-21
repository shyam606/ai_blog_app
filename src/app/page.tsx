import Link from "next/link";
import { Button } from "@/components/ui/button";
import blogs from "@/data/blogs.json"; // 👈 import JSON
import tools from "@/utils/tools.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title: "AI Blogs & Tools | Discover Future of Artificial Intelligence",
  description:
    "Explore the latest AI blogs, trends, and tools in 2025. Discover insights, tutorials, and the best AI software to stay ahead in Artificial Intelligence.",
  keywords: [
    "AI Blogs 2025",
    "Best AI Tools",
    "Artificial Intelligence trends",
    "AI tutorials",
    "Future of AI",
    "Machine Learning",
    "Generative AI",
  ],
  openGraph: {
    title: "AI Blogs & Tools 2025 | Discover Future of Artificial Intelligence",
    description:
      "Read AI blogs, discover new tools, and explore trends shaping the future of Artificial Intelligence.",
    url: "https://yourdomain.com/",
    siteName: "AI Blogs & Tools",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // 👈 add OG image
        width: 1200,
        height: 630,
        alt: "AI Blogs & Tools 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Blogs & Tools 2025 | Discover Future of Artificial Intelligence",
    description:
      "Read AI blogs, discover new tools, and explore trends shaping the future of Artificial Intelligence.",
    images: ["https://yourdomain.com/og-image.jpg"], // 👈 same OG image
  },
  alternates: {
    canonical: "https://yourdomain.com/",
  },
};


export default function HomePage() {

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 text-center">
        <h1 className="font-bold text-5xl!">
          Discover the Future with <span className="text-primary">AI Blogs</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore insights, tools, and the latest trends in Artificial Intelligence.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/blog" className="text-lg! px-5 py-6 hover:scale-105 transition transform duration-200">Read Blogs</Link>
          </Button>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-12 mt-5 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Latest Blogs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {blogs?.slice(0, 6)?.map((blog) => {
            return (
              <div
                key={blog?.id}
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold">{blog?.title}</h3>
                <p className="mt-2 text-muted-foreground">{blog?.excerpt}</p>
                <Link
                  href={`blog/${blog.slug}`}
                  className="mt-4 read_more_button"
                >
                  Read more →
                </Link>
              </div>
            );
          })}
        </div>
        {/* ✅ Tools Grid */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Latest AI Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.length > 0 ? (
              tools?.slice(0, 3)?.map((tool) => (
                <Card
                  key={tool.id}
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <CardHeader>
                    <Image
                      src={tool.image}
                      alt={`${tool.name} logo`}
                      width={100}
                      height={100}
                      className="mx-auto mb-4"
                      loading="lazy"
                    />
                    <CardTitle className="text-xl text-center">
                      {tool.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center mb-4">
                      {tool.shortDescription}
                    </p>
                    <div className="text-center">
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="read_more_button"
                      >
                        Read more →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                No tools found.
              </p>
            )}
          </div>
          <div className="mt-6 text-center">
            <Button asChild>
              <Link href="/tools" className="text-lg! px-5 py-6 hover:scale-105 transition transform duration-200">See All</Link>
            </Button>
          </div>
        </div>

      </section>
    </div>
  );
}
