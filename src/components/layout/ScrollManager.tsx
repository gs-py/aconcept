import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Scrolls to the top on route change, or to the anchor target when the
 * URL carries a hash (e.g. /#contact).
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Let the route render before resolving the anchor.
      const frame = requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
