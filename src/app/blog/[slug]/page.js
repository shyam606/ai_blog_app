import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/components/MarkdownRenderer"; // 👈 naya wrapper

// ✅ Reading time calculator
function getReadingTime(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | AI Blogs",
      description: "The blog you are looking for does not exist.",
      keywords: ["AI blogs", "Blog not found"],
    };
  }

  // Example: derive keywords from blog.tags or split blog.excerpt
  const keywords = blog.tags || blog.excerpt.split(" ").slice(0, 10); // take first 10 words as fallback
  console.log('keywords', keywords);

  return {
    title: `${blog.title} | AI Blogs`,
    description: blog.excerpt,
    keywords: keywords,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      url: `https://yourdomain.com/blog/${blog.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
    },
  };
}


export default function BlogPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  const readingTime = getReadingTime(blog.content);

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <header>
        <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>

        <div className="text-sm text-muted-foreground mb-6">
          Published on{" "}
          <time dateTime={new Date(blog.date).toISOString()}>
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>{" "}
          · {readingTime} min read
        </div>
      </header>

      <p className="text-lg text-muted-foreground mb-8">{blog.excerpt}</p>

      <section className="prose prose-lg dark:prose-invert">
        {/* <MarkdownRenderer content={blog.content} /> */}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </section>
    </article>
  );
}
