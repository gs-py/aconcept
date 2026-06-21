import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import type { ReactNode } from "react";
import { Home } from "../../pages/Home";
import { Projects } from "../../pages/Projects";
import { EASE_OUT_EXPO } from "../../lib/motion";

/** Smooth in-out sweep for the curtain slats. */
const CURTAIN_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

/** Number of vertical curtain slats. */
const SLAT_COUNT = 4;

/** Per-slat stagger (s) and travel duration (s). */
const SLAT_STAGGER = 0.06;
const COVER_DURATION = 0.5;
const REVEAL_DELAY = 0.55;
const REVEAL_DURATION = 0.6;

const PAGE_TITLES: Record<string, string> = {
  "/": "Home",
  "/projects": "Projects",
};

const SLATS = Array.from({ length: SLAT_COUNT }, (_, index) => index);

function PageShell({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div initial="initial" animate="enter" exit="exit">
      {/* Page content — settles in once the slats clear */}
      <m.div
        variants={{
          initial: { opacity: 0, y: 24 },
          enter: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.8 },
          },
          exit: { opacity: 1 },
        }}
      >
        {children}
      </m.div>

      {/* Reveal slats — cover at mount, lift away one by one */}
      <div className="pointer-events-none fixed inset-0 z-90 flex">
        {SLATS.map((index) => (
          <m.div
            key={`reveal-${index}`}
            className="h-full flex-1 bg-primary"
            variants={{
              initial: { y: "0%" },
              enter: {
                y: "-100%",
                transition: {
                  duration: REVEAL_DURATION,
                  ease: CURTAIN_EASE,
                  delay: REVEAL_DELAY + index * SLAT_STAGGER,
                },
              },
              exit: { y: "-100%" },
            }}
          />
        ))}
      </div>

      {/* Destination label — names the page while the screen is covered */}
      <m.div
        className="pointer-events-none fixed inset-0 z-95 flex flex-col items-center justify-center"
        variants={{
          initial: { opacity: 0 },
          enter: {
            opacity: [0, 1, 1, 0],
            transition: { duration: 1, times: [0, 0.2, 0.55, 0.85] },
          },
          exit: { opacity: 0 },
        }}
      >
        <m.p
          variants={{
            initial: { opacity: 0, y: 16 },
            enter: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: EASE_OUT_EXPO, delay: 0.05 },
            },
            exit: { opacity: 0 },
          }}
          className="text-sm font-medium uppercase tracking-[0.4em] text-white/50"
        >
          Aconcept Studio
        </m.p>
        <m.h2
          variants={{
            initial: { clipPath: "inset(0 0 100% 0)", y: 32 },
            enter: {
              clipPath: "inset(0 0 0% 0)",
              y: 0,
              transition: { duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.1 },
            },
            exit: { opacity: 0 },
          }}
          className="mt-5 font-display text-display-2xl italic text-white"
        >
          {title}
        </m.h2>
        <m.span
          variants={{
            initial: { scaleX: 0 },
            enter: {
              scaleX: 1,
              transition: { duration: 0.6, ease: CURTAIN_EASE, delay: 0.2 },
            },
            exit: { scaleX: 0 },
          }}
          className="mt-8 block h-px w-40 origin-center bg-accent md:w-56"
          aria-hidden
        />
      </m.div>

      {/* Cover slats — rise from the bottom one by one when leaving */}
      <div className="pointer-events-none fixed inset-0 z-90 flex">
        {SLATS.map((index) => (
          <m.div
            key={`cover-${index}`}
            className="h-full flex-1 bg-primary"
            variants={{
              initial: { y: "100%" },
              enter: { y: "100%" },
              exit: {
                y: "0%",
                transition: {
                  duration: COVER_DURATION,
                  ease: CURTAIN_EASE,
                  delay: index * SLAT_STAGGER,
                },
              },
            }}
          />
        ))}
      </div>
    </m.div>
  );
}

/** Route table wrapped in the curtain transition. */
export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageShell
        key={location.pathname}
        title={PAGE_TITLES[location.pathname] ?? "Aconcept"}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </PageShell>
    </AnimatePresence>
  );
}
