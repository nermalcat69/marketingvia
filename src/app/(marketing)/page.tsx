import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MarketingVia – Authority & Recall for India's Next-Gen Leaders",
  description:
    "A boutique media house that builds real digital authority for second and third-generation business owners and political leaders across India. 90-day program.",
  alternates: { canonical: "/" },
};

const deliverables = [
  {
    title: "Search & Profile Presence",
    desc: "One long-format interview, one written feature, and clean aligned profiles across LinkedIn, Instagram, X, and Facebook.",
  },
  {
    title: "Content Footprint",
    desc: "24–36 strategic posts over 90 days — not random spam. Business insights, family legacy, values, lifestyle.",
  },
  {
    title: "Authority Assets",
    desc: "An appearance on our flagship show, a leadership case study, and a curated recognition you can show in decks and conversations.",
  },
  {
    title: "Influence & Proof",
    desc: "A mini-campaign where 5–15 creators talk about you or your business — giving you screenshots, reach, and social proof.",
  },
];

const phases = [
  {
    num: "01",
    title: "Narrative & Identity",
    weeks: "Weeks 1–2",
    desc: "2–3 deep-dive sessions to map your legacy, values, and where you want to be known. Output: a one-sentence narrative and full bio suite.",
  },
  {
    num: "02",
    title: "Digital Presence Reset",
    weeks: "Weeks 2–3",
    desc: "Redesign and rewrite every profile so that any platform a person lands on tells one story — one person, one authority.",
  },
  {
    num: "03",
    title: "90-Day Content Engine",
    weeks: "Weeks 2–4",
    desc: "30–40 mapped post ideas with hooks and angles. 40% business, 30% legacy, 20% lifestyle, 10% community impact.",
  },
  {
    num: "04",
    title: "Media House & Influence Layer",
    weeks: "Weeks 3–10",
    desc: "Flagship podcast episode, written case study, influencer mini-campaign, and curated recognition — all executed by us.",
  },
  {
    num: "05",
    title: "Reflection & Reporting",
    weeks: "Weeks 10–12",
    desc: "Before/after across Google, social, profile views, and content reach. A deck you can show to family, partners, or party members.",
  },
];

const whoWeServe = [
  {
    label: "Second & Third-Gen Business Heirs",
    detail:
      "Family businesses ₹50 Cr+ in real estate, manufacturing, retail, or hospitality. The next-gen sitting in meetings and appearing at events.",
  },
  {
    label: "Politicians & Political Aspirants",
    detail:
      "Youth leaders, councillors, MLAs/MPs, or those with clear ambitions and budgets who spend on image but lack a trusted media partner.",
  },
];

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MarketingVia",
  url: "https://marketingvia.in",
  description:
    "Boutique media house building digital authority for India's second and third-generation business owners and political leaders.",
};

export default function Home() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
            Boutique Media House — India
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-neutral-900 leading-none mb-8">
            Authority &amp; Recall.
            <br />
            <span className="text-blue-600">In 90 Days.</span>
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-xl mb-10">
            We take someone who already has money, legacy, and offline power —
            and give them a strong, respected public image online.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block bg-neutral-900 text-white hover:bg-neutral-700 px-8 py-3 text-sm font-medium transition-colors whitespace-nowrap"
            >
              Apply for the Program
            </Link>
            <Link
              href="/about"
              className="inline-block border border-neutral-300 hover:bg-neutral-100 px-8 py-3 text-sm font-medium text-neutral-700 transition-colors whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-blue-600 text-white p-6">
            <div className="text-3xl font-bold">90</div>
            <div className="text-xs text-blue-200 mt-1 uppercase tracking-wide">Days</div>
          </div>
          <div className="bg-amber-600 text-white p-6">
            <div className="text-3xl font-bold">5</div>
            <div className="text-xs text-amber-200 mt-1 uppercase tracking-wide">Phases</div>
          </div>
          <div className="bg-neutral-600 text-white p-6">
            <div className="text-3xl font-bold">₹6–10L</div>
            <div className="text-xs text-neutral-300 mt-1 uppercase tracking-wide">Per Engagement</div>
          </div>
          <div className="bg-neutral-900 text-white p-6">
            <div className="text-3xl font-bold">Niche</div>
            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">High-Value Only</div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-8">
          Who We Serve
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {whoWeServe.map((item) => (
            <div key={item.label} className="bg-neutral-50 p-8">
              <div className="text-lg font-bold text-neutral-900 mb-3">{item.label}</div>
              <div className="text-sm text-neutral-500 leading-relaxed">{item.detail}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-neutral-900 text-white p-8">
          <p className="text-sm leading-relaxed max-w-2xl">
            <span className="font-semibold">We are not for everyone.</span> We focus on powerful people who already spend on image, lifestyle, and campaigns — and just don't have one trusted partner who understands both reputation and modern media.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-8">
          What You Get — Authority &amp; Recall Program
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {deliverables.map((d, i) => (
            <div
              key={d.title}
              className={`p-7 ${
                i === 0 ? "bg-blue-600 text-white" : i === 1 ? "bg-amber-600 text-white" : "bg-neutral-50 text-neutral-900"
              }`}
            >
              <div className="text-sm font-bold mb-2">{d.title}</div>
              <div className={`text-xs leading-relaxed ${i < 2 ? "opacity-80" : "text-neutral-500"}`}>
                {d.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Phase Method */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-8">
          How We Deliver — The 5-Phase Method
        </p>
        <div className="space-y-3">
          {phases.map((phase) => (
            <div key={phase.num} className="bg-neutral-50 p-6 flex gap-6">
              <div className="text-2xl font-bold text-neutral-200 shrink-0 w-10">{phase.num}</div>
              <div>
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="text-sm font-bold text-neutral-900">{phase.title}</span>
                  <span className="text-xs text-neutral-400 uppercase tracking-wide">{phase.weeks}</span>
                </div>
                <div className="text-sm text-neutral-500 leading-relaxed">{phase.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-neutral-50 p-8 md:p-12 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">
              Our Promise
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4 leading-tight">
              Not "we'll post for you."<br />We build your name.
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              In 90 days, we turn your name from low-visibility and random to a controlled, high-authority presence that shows up when people Google you, look you up on social, or talk about you in rooms that matter.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">
              Why MarketingVia
            </p>
            <div className="space-y-4">
              {[
                ["Only for India's power segment", "We focus solely on business heirs and political leaders — not every founder with a LinkedIn."],
                ["Our own media properties", "Podcast, awards, and written features — not just third-party platforms."],
                ["Deep narrative, not just content", "We define who you are before we post a single word on your behalf."],
                ["Relationship-driven", "A quiet, sharp house that families and leaders quietly recommend to each other."],
              ].map(([title, desc]) => (
                <div key={title as string} className="flex gap-4">
                  <div className="w-1 bg-blue-600 shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">{title}</div>
                    <div className="text-sm text-neutral-500 mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-baseline justify-between mb-8">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            From The Blog
          </p>
          <Link
            href="/blog"
            className="text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Read all articles →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            {
              title: "Why India's Business Families Are Invisible Online",
              slug: "why-india-business-families-are-invisible-online",
              tag: "Personal Branding",
            },
            {
              title: "The Difference Between Social Media and Digital Authority",
              slug: "social-media-vs-digital-authority",
              tag: "Strategy",
            },
            {
              title: "What 90 Days of Narrative Building Can Do for a Business Heir",
              slug: "90-days-narrative-building-business-heir",
              tag: "Case Study",
            },
          ].map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-neutral-50 p-6 hover:bg-neutral-900 transition-colors"
            >
              <div className="text-xs text-blue-600 group-hover:text-blue-400 uppercase tracking-wide mb-3">
                {post.tag}
              </div>
              <div className="text-sm font-semibold text-neutral-900 group-hover:text-white leading-snug">
                {post.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
