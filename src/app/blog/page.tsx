import blogs from "@/data/blogs.json"; // 👈 import JSON
import Link from "next/link";
export default function BlogPage() {
  return (
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
  );
}

