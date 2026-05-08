import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogSlugs } from "@/lib/mdx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} – MarketingVia Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <Link
          href="/blog"
          className="text-xs font-medium text-neutral-400 hover:text-neutral-700 transition-colors uppercase tracking-widest inline-block mb-8"
        >
          ← Blog
        </Link>
        <div className="max-w-2xl">
          <div className="text-xs text-blue-600 uppercase tracking-wide mb-4">{post.tag}</div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed mb-8">{post.description}</p>
          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <span>By {post.author}</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="border-t border-neutral-100 pt-12" />
      </div>

      {/* Body */}
      <article className="max-w-6xl mx-auto px-6 pb-20">
        <div className="max-w-2xl prose prose-neutral prose-sm md:prose-base">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-neutral-900 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-lg font-bold mb-2">Ready to build your authority?</div>
            <div className="text-sm text-neutral-400">Applications for the 90-day program are reviewed individually. Slots are limited.</div>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-white text-neutral-900 font-medium text-sm px-8 py-3 hover:bg-neutral-100 transition-colors whitespace-nowrap"
          >
            Apply for the Program
          </Link>
        </div>
      </section>
    </div>
  );
}
