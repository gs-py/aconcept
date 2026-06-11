import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import Logo from "../shared/Logo";

const COMPANY_LINKS = [
  { label: "About the Studio", to: "/#about" },
  { label: "Our Team", to: "/#team" },
  { label: "Awards", to: "/#awards" },
  { label: "Sustainability", to: "/#sustainability" },
];

const SERVICE_LINKS = [
  { label: "Architectural Design", to: "/#services" },
  { label: "Interior Design", to: "/#services" },
  { label: "3D Visualization", to: "/#services" },
  { label: "Project Management", to: "/#services" },
];

const PROJECT_LINKS = [
  { label: "All Projects", to: "/projects" },
  { label: "Residential", to: "/projects" },
  { label: "Commercial", to: "/projects" },
  { label: "Hospitality", to: "/projects" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-primary text-white/60">
      <div className="container-site grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" aria-label="Aconcept Studio — home">
            <Logo />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Designing Timeless Spaces. Creating Lasting Impressions. A luxury
            architecture and interior design studio practicing since 2014.
          </p>
          <div className="mt-6 flex gap-4">
            {[
              { label: "Instagram", href: "https://www.instagram.com", Icon: Instagram },
              { label: "LinkedIn", href: "https://www.linkedin.com", Icon: Linkedin },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
            {["Behance", "Pinterest"].map((label) => (
              <a
                key={label}
                href={`https://www.${label.toLowerCase()}.com`}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-xs font-medium text-white/70 transition-colors hover:border-accent hover:text-accent"
              >
                {label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {[
          { heading: "Company", links: COMPANY_LINKS },
          { heading: "Services", links: SERVICE_LINKS },
          { heading: "Projects", links: PROJECT_LINKS },
        ].map((column) => (
          <div key={column.heading}>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white">
              {column.heading}
            </h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-start gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-xl text-white">
              Studio Journal
            </h3>
            <p className="mt-1 text-sm">
              Occasional notes on projects, process, and craft.
            </p>
          </div>
          {subscribed ? (
            <p className="text-sm text-accent">
              Thank you — you're on the list.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center border border-l-0 border-white/15 px-5 text-white transition-colors hover:bg-accent hover:text-primary"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-start gap-2 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Aconcept Studio. All rights reserved.</p>
          <p className="italic text-white/40">Designed with intention.</p>
        </div>
      </div>
    </footer>
  );
}
