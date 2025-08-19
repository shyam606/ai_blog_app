import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// ✅ Reading time calculator
function getReadingTime(text) {
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200);
}

export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | AI Blogs",
      description: "The blog you are looking for does not exist.",
    };
  }

  return {
    title: `${blog.title} | AI Blogs`,
    description: blog.excerpt,
  };
}

export default function BlogPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  const readingTime = getReadingTime(blog.content);

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>

      <div className="text-sm text-muted-foreground mb-6">
        Published on{" "}
        <time dateTime={blog.date}>
          {new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>{" "}
        · {readingTime} min read
      </div>

      <p className="text-lg text-muted-foreground mb-8">{blog.excerpt}</p>

      <div className="prose prose-lg dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {blog.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
