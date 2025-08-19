import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AI Tools & Resources",
  description:
    "Learn more about our mission to simplify AI adoption for developers, creators, and businesses. Discover why we started, what we offer, and how we help you make better tech decisions.",
  keywords: [
    "AI tools",
    "About AI resources",
    "AI productivity",
    "AI tutorials",
    "AI blogs",
    "About Shyam Saini",
  ],
  openGraph: {
    title: "About Us | AI Tools & Resources",
    description:
      "We simplify AI adoption with curated tools, guides, and unbiased reviews. Learn more about our mission and the team behind this platform.",
    url: "https://yourdomain.com/about",
    siteName: "AI Tools Hub",
    images: [
      {
        url: "https://yourdomain.com/og-about.jpg", // 👉 replace with your own OG image
        width: 1200,
        height: 630,
        alt: "About AI Tools Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | AI Tools & Resources",
    description:
      "Discover our mission, values, and why we created this platform to simplify AI adoption.",
    images: ["https://yourdomain.com/og-about.jpg"], // same image as above
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">👋 About Us</h1>
        <p className="text-lg text-gray-600">
          Empowering developers, creators, and businesses with curated AI tools,
          tutorials, and resources.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">🎯 Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to simplify the adoption of AI in development and
          business. From coding assistants to content generators, we bring you
          trusted insights, unbiased reviews, and step-by-step guides to help
          you work smarter and innovate faster.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">🚀 What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>🔧 <strong>AI Tools</strong> – Detailed reviews, pros/cons, and use cases.</li>
          <li>📚 <strong>Blogs & Guides</strong> – Tutorials, AI trends, and coding tips.</li>
          <li>⚡ <strong>Productivity Resources</strong> – Automation hacks and developer best practices.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">💡 Why Choose Us?</h2>
        <p className="text-gray-700 leading-relaxed">
          We believe in transparency, clarity, and practicality. Unlike other
          sites, we highlight both pros and cons, so you get the full picture.
          Our guides are SEO-optimized, beginner-friendly, and trusted by the
          developer community.
        </p>
      </section>

      {/* Who's Behind */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">🙋 Who’s Behind This?</h2>
        <p className="text-gray-700 leading-relaxed">
          Hi, I’m <strong>Shyam Saini</strong>, a ReactJS developer passionate
          about AI & productivity tools. I created this platform to share
          practical insights, tested tools, and real-world use cases to help
          others make better tech decisions.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">✨ Start Exploring</h2>
        <div className="flex justify-center gap-6">
          <a
            href="/tools"
            className="px-6 py-3 border border-gray-800 bg-transparent text-black rounded-lg shadow hover:bg-gray-800 hover:text-white transition"
          >
            Browse AI Tools
          </a>
          <a
            href="/blogs"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
          >
            Read Blogs
          </a>
        </div>
      </section>
    </div>
  );
}
