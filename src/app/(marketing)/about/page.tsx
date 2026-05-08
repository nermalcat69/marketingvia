import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About MarketingVia – Boutique Media House for India's Next-Gen Power",
  description:
    "MarketingVia is a boutique media house that builds real digital authority for second and third-generation business owners and political leaders in India.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
            About
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-none mb-8">
            A quiet,<br />sharp<br />
            <span className="text-blue-600">media house.</span>
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-xl">
            MarketingVia is built for one very specific purpose: turning powerful names in India into controlled, high-authority public presences.
          </p>
        </div>
      </section>

      {/* What we are */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-neutral-50 p-8 md:p-12 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">
              What This Is
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-4 leading-tight">
              Not social media marketing.<br />Personal authority.
            </h2>
            <p className="text-neutral-600 leading-relaxed text-sm">
              India is full of powerful surnames — business families, real-estate barons, industrialists, local political dynasties. Their assets are massive. Their digital presence is usually embarrassing or invisible.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm mt-4">
              A lot of money is already being spent on image — just not strategically, and not on the person behind the power. That is the gap we fill.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">
              Our Positioning
            </p>
            <div className="space-y-4">
              {[
                ["Only high-net-worth niche", "We focus solely on second/third-gen business heirs and political leaders — not every startup founder or SME."],
                ["Combines four disciplines", "Deep narrative + content engine + influencer layer + our own media properties — all in one 90-day program."],
                ["Own media properties", "Our flagship podcast, awards, and written features are assets you get placed in — not third-party campaigns."],
                ["Relationship-driven", "The name people quietly recommend to each other when someone asks who can actually handle their image."],
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

      {/* Why this exists */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-8">
          Why This Needs to Exist
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-blue-600 text-white p-7">
            <div className="text-sm font-bold mb-2">India is shifting to visible founders</div>
            <div className="text-xs opacity-80 leading-relaxed">
              Personal branding is becoming a core part of business growth, reputation management, and even crisis control — not just vanity.
            </div>
          </div>
          <div className="bg-amber-600 text-white p-7">
            <div className="text-sm font-bold mb-2">The heirs look like "rich kids" online</div>
            <div className="text-xs opacity-80 leading-relaxed">
              Second and third-gen business heirs often have no digital identity that matches the weight of their family name and business role.
            </div>
          </div>
          <div className="bg-neutral-600 text-white p-7">
            <div className="text-sm font-bold mb-2">Politicians spend on rallies, not identity</div>
            <div className="text-xs opacity-80 leading-relaxed">
              Heavy spending on hoardings and local PR — but online identity is random: bad photos, outdated news, and low-effort posts.
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-8">
          The People
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-neutral-50 p-8">
              <Image
                src="/arjun.png"
                alt="Arjun Aditya"
                width={80}
                height={80}
                className="mb-4 rounded-sm"
              />
              <div className="text-base font-bold text-neutral-900">Arjun Aditya</div>
              <div className="text-xs text-neutral-400 uppercase tracking-wide mt-0.5 mb-4">Founder & Director</div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Arjun lives and breathes marketing, content, and strategy. He understands both "brand" and "ego" — how sensitive reputation is in Indian families and politics. MarketingVia is not built to be a mass agency; it's built to be the name that a few powerful families and leaders quietly recommend to each other.
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  href="https://arjunaditya.xyz"
                  target="_blank"
                  rel="noopener"
                  className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  Website ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/nermalcat69/"
                  target="_blank"
                  rel="noopener"
                  className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://cal.com/arjunaditya/30min"
                  target="_blank"
                  rel="noopener"
                  className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  Schedule a Call ↗
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">
              The Company
            </p>
            <div className="space-y-3 text-sm text-neutral-600">
              <div className="flex gap-3">
                <span className="text-neutral-300 shrink-0">—</span>
                <span>
                  <span className="font-medium text-neutral-900">Legal Entity:</span> Gray Cup Enterprises Private Limited
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-neutral-300 shrink-0">—</span>
                <span>
                  <span className="font-medium text-neutral-900">Country:</span> India / Bharat
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-neutral-300 shrink-0">—</span>
                <span>
                  <span className="font-medium text-neutral-900">CIN:</span> U47211DL2025PTC457808
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-neutral-300 shrink-0">—</span>
                <span>
                  <span className="font-medium text-neutral-900">GST:</span> 07AAMCG4985H1Z2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-neutral-900 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-lg font-bold mb-2">Ready to build your authority?</div>
            <div className="text-sm text-neutral-400">Applications are reviewed individually. Slots are limited.</div>
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
