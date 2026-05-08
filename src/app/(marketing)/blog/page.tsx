import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog – MarketingVia | Authority, Personal Branding & Digital Strategy",
  description:
    "Insights on personal branding, digital authority, and reputation strategy for India's business families and political leaders.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
          Blog
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-none mb-6">
          From the<br />
          <span className="text-blue-600">Media House.</span>
        </h1>
        <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
          Insights on personal branding, digital authority, and reputation strategy for India's next-gen power.
        </p>
      </section>

      {/* Posts */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        {posts.length === 0 ? (
          <div className="bg-neutral-50 p-12 text-center">
            <p className="text-neutral-400 text-sm">Articles coming soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-neutral-50 p-7 hover:bg-neutral-900 transition-colors flex flex-col"
              >
                <div className="text-xs text-blue-600 group-hover:text-blue-400 uppercase tracking-wide mb-3">
                  {post.tag}
                </div>
                <div className="text-sm font-bold text-neutral-900 group-hover:text-white leading-snug mb-3 flex-1">
                  {post.title}
                </div>
                <div className="text-xs text-neutral-400 group-hover:text-neutral-500 leading-relaxed line-clamp-2 mb-4">
                  {post.description}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-neutral-400">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-neutral-400">{post.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
