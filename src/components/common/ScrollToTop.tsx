import { useEffect } from "react";
import { useLocation } from "react-router";
import type Lenis from "lenis";

/** Resets scroll to the top on every route (pathname) change. */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = (window as unknown as { lenis?: Lenis }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};
