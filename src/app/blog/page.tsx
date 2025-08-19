import blogs from "@/data/blogs.json"; // 👈 import JSON
import Link from "next/link";

// const blogsss = [
//     {
//         id: 1,
//         title: "What is Agentic AI?",
//         excerpt: "Agentic AI is the next wave of AI that can act, plan, and make decisions autonomously...",
//         slug: "agentic-ai",
//     },
//     {
//         id: 2,
//         title: "Top 5 AI Tools for Developers in 2025",
//         excerpt: "Boost productivity with these hand-picked AI tools tailored for coding, debugging, and deployment...",
//         slug: "top-5-ai-tools-2025",
//     },
// ];

export default function BlogPage() {
    return (
        <div className="max-w-4xl mx-auto py-12">
            <h1 className="text-3xl font-bold mb-8">All Blogs</h1>
            <div className="grid gap-8">
                {blogs?.map((blog) => {
                    let url = blog.slug === "top-5-ai-tools-2025" ? "/tools" : `/blog/${blog.slug}`
                    return (
                        (
                            <div key={blog.id} className="border rounded-lg p-6 hover:shadow-md transition">
                                <h2 className="text-2xl font-semibold">{blog.title}</h2>
                                <p className="mt-2 text-muted-foreground">{blog.excerpt}</p>
                                <Link href={url} className="mt-4 read_more_button">
                                    Read more →
                                </Link>
                            </div>
                        )
                    )
                })}
            </div>
        </div>
    );
}
