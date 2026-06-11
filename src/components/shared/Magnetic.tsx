import { useRef } from "react";
import { m, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  /** How strongly the element follows the cursor. */
  strength?: number;
  className?: string;
}

/**
 * Magnetic hover wrapper for primary CTAs — the element is gently pulled
 * toward the cursor via springs and snaps back on leave.
 */
export default function Magnetic({
  children,
  strength = 0.3,
  className = "inline-block",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </m.div>
  );
}
