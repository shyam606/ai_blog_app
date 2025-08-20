import blogs from "@/data/blogs.json"; // 👈 import JSON
import Link from "next/link";

export const metadata = {
  title: "All Blogs | AI",
  description: "Read all blogs about AI tools, AI concepts, and latest AI developments on AI.",
  keywords: [
    "AI blogs",
    "Artificial Intelligence tools",
    "AI concepts",
    "AI news",
    "Latest AI developments",
    "AI tutorials",
    "Machine Learning",
    "Deep Learning",
    "Agentic AI",
    "AI applications"
  ],
  openGraph: {
    title: "All Blogs | AI",
    description: "Read all blogs about AI tools, AI concepts, and latest AI developments on AI.",
    url: "https://yourdomain.com/blogs",
    siteName: "AI",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Blogs | AI",
    description: "Read all blogs about AI tools, AI concepts, and latest AI developments on AI.",
    images: ["https://yourdomain.com/og-image.png"],
  },
};



export default function BlogPage() {
  return (
    <>
    
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">📚 All Blogs</h1>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((blog) => {
          let url = blog.slug === "top-5-ai-tools-2025" ? "/tools" : `/blog/${blog.slug}`;
          return (
            <div key={blog.id} className="border rounded-2xl p-6 hover:shadow-lg transition bg-white">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-muted-foreground line-clamp-3">{blog.excerpt}</p>
              <Link href={url} className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                Read more →
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

