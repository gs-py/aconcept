import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "../shared/Magnetic";
import { EASE_OUT_EXPO } from "../../lib/motion";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Studio", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Process", to: "/#process" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <AnimatePresence>
        {scrolled && (
          <m.div
            key="glass"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 border-b border-white/10 bg-primary/70 backdrop-blur-[20px]"
            aria-hidden
          />
        )}
      </AnimatePresence>

      <nav className="container-site relative flex h-20 items-center justify-between">
        <Link
          to="/"
          className="font-display text-2xl tracking-tight text-white"
          aria-label="Aconcept Studio — home"
        >
          Aconcept<span className="text-accent">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <Link key={link.label} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Magnetic>
            <Link to="/#contact" className="btn btn-gold !px-6 !py-3">
              Schedule Consultation
            </Link>
          </Magnetic>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="text-white lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu size={26} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="fixed inset-0 z-50 flex flex-col bg-primary lg:hidden"
          >
            <div className="container-site flex h-20 items-center justify-between">
              <span className="font-display text-2xl text-white">
                Aconcept<span className="text-accent">.</span>
              </span>
              <m.button
                type="button"
                onClick={() => setMenuOpen(false)}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white"
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={1.5} />
              </m.button>
            </div>

            <m.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                },
              }}
              className="container-site flex flex-1 flex-col justify-center gap-2"
            >
              {LINKS.map((link) => (
                <m.div
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, y: 32 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: EASE_OUT_EXPO },
                    },
                  }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-display text-4xl text-white transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
              <m.div
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
                  },
                }}
                className="mt-8"
              >
                <Link
                  to="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-gold"
                >
                  Schedule Consultation
                </Link>
              </m.div>
            </m.nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
