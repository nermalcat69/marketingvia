import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <footer className="bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-base font-bold tracking-tight text-neutral-900">MarketingVia</span>
            <p className="text-xs text-neutral-400 mt-1">
              Boutique media house for India's next-gen power.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} MarketingVia. All rights reserved.</p>
          <a
            href="https://graycup.org/"
            target="_blank"
            rel="noopener"
            className="text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            A Gray Cup Enterprises Company
          </a>
        </div>
      </div>
    </footer>
  );
}
