import Link from "next/link";
import { Button } from "@/components/ui/button";
import blogs from "@/data/blogs.json"; // 👈 import JSON

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
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
          {blogs?.slice(0, 4)?.map((blog) => {
            let url =
              blog.slug === "top-5-ai-tools-2025" ? "/tools" : `/blog/${blog.slug}`;
            return (
              <div
                key={blog?.id}
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold">{blog?.title}</h3>
                <p className="mt-2 text-muted-foreground">{blog?.excerpt}</p>
                <Link
                  href={url}
                  className="mt-4 read_more_button"
                >
                  Read more →
                </Link>
              </div>
            );
          })}
        </div>

      </section>
    </div>
  );
}
