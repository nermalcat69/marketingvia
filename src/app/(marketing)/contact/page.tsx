import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact MarketingVia – Apply for the Authority & Recall Program",
  description:
    "Apply for the 90-day Authority & Recall Program. Slots are limited. We review every application individually.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
          Contact
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-none mb-6">
          Let's talk.
        </h1>
        <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
          Applications for the 90-day Authority & Recall Program are reviewed individually. Slots are limited to ensure we deliver full quality to every client.
        </p>
      </section>

      {/* Contact cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-blue-600 text-white p-8">
            <div className="text-xs uppercase tracking-widest text-blue-200 mb-4">Apply for the Program</div>
            <div className="text-sm font-bold mb-2">Program Enquiries</div>
            <p className="text-xs text-blue-100 leading-relaxed mb-6">
              Tell us who you are, what your background is, and what you want to be known for. We usually respond within 48 hours.
            </p>
            <a
              href="mailto:office@marketingvia.in"
              className="inline-block text-xs font-medium border border-blue-300 text-white px-4 py-2 hover:bg-blue-500 transition-colors"
            >
              office@marketingvia.in
            </a>
          </div>

          <div className="bg-neutral-50 p-8">
            <div className="text-xs uppercase tracking-widest text-neutral-400 mb-4">General & Media</div>
            <div className="text-sm font-bold text-neutral-900 mb-2">Press & Partnerships</div>
            <p className="text-xs text-neutral-500 leading-relaxed mb-6">
              For podcast collaboration requests, award nominations, media partnerships, or press enquiries.
            </p>
            <a
              href="mailto:marketing@marketingvia.in"
              className="inline-block text-xs font-medium border border-neutral-300 text-neutral-700 px-4 py-2 hover:bg-neutral-200 transition-colors"
            >
              marketing@marketingvia.in
            </a>
          </div>

          <div className="bg-neutral-900 text-white p-8">
            <div className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Quick Chat</div>
            <div className="text-sm font-bold mb-2">Schedule a Call</div>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              Arjun will be on this call. Use this if you want to understand whether the program is the right fit before applying.
            </p>
            <a
              href="https://cal.com/arjunaditya/30min"
              target="_blank"
              rel="noopener"
              className="inline-block text-xs font-medium border border-neutral-600 text-white px-4 py-2 hover:bg-neutral-700 transition-colors"
            >
              Book 30 minutes →
            </a>
          </div>
        </div>
      </section>

      {/* What happens after */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-8">
          What Happens After You Reach Out
        </p>
        <div className="space-y-3">
          {[
            ["We review your background", "We look at who you are, what your family or political context is, and whether this is a genuine fit for both sides."],
            ["One conversation", "If it looks like a fit, we schedule a 30-minute call. No pitch deck, no sales pressure — just a direct conversation."],
            ["A clear proposal", "If we want to work together, you get a clear proposal: what we'll deliver, how we'll deliver it, timeline, and price."],
            ["90 days begins", "Once agreed, we start Phase 1. You'll have a dedicated point of contact for the full engagement."],
          ].map(([title, desc], i) => (
            <div key={title as string} className="bg-neutral-50 p-6 flex gap-6">
              <div className="text-2xl font-bold text-neutral-200 shrink-0 w-6">{i + 1}</div>
              <div>
                <div className="text-sm font-bold text-neutral-900 mb-1">{title}</div>
                <div className="text-sm text-neutral-500 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legal */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-3">Legal & Compliance</p>
            <a
              href="mailto:legal@marketingvia.in"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              legal@marketingvia.in
            </a>
          </div>
          <div className="text-xs text-neutral-400 text-right">
            <p>Gray Cup Enterprises Private Limited</p>
            <p>CIN: U47211DL2025PTC457808 · GST: 07AAMCG4985H1Z2</p>
          </div>
        </div>
      </section>
    </div>
  );
}
