import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

/**
 * Time (ms) until the page-transition curtain fully covers the viewport —
 * scrolling is deferred until then so the jump is never visible.
 * Keep in sync with the exit duration in PageTransition.tsx.
 */
const CURTAIN_COVER_MS = 700;

/**
 * Scrolls to the top on route change (hidden behind the transition curtain),
 * or smooth-scrolls to the anchor target for same-page hash links.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const pathChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;

    const scroll = () => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({
          behavior: pathChanged ? "auto" : "smooth",
          block: "start",
        });
        return;
      }
      window.scrollTo(0, 0);
    };

    if (pathChanged) {
      // Wait for the curtain to cover the screen before jumping.
      const timeout = window.setTimeout(scroll, CURTAIN_COVER_MS);
      return () => window.clearTimeout(timeout);
    }

    scroll();
  }, [pathname, hash]);

  return null;
}
