import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// ✅ Estimate reading time (200 words/minute)
function getReadingTime(text: string) {
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200);
}

// 👇 Define your own props type, don't call it PageProps
type BlogPageProps = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: BlogPageProps
): Promise<Metadata> {
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

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  const readingTime = getReadingTime(blog.content);

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>

      {/* Metadata */}
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
