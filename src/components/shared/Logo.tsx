interface LogoProps {
  /** Mark + wordmark color scheme. */
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Brand lockup — architectural "A" mark with a gold lintel crossbar,
 * followed by the Playfair wordmark.
 */
export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const stroke = variant === "light" ? "#FAFAF9" : "#0F172A";
  const text = variant === "light" ? "text-white" : "text-primary";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 52 52"
        className="h-9 w-9"
        aria-hidden
        focusable="false"
      >
        <path
          d="M10 44 L26 8 L42 44"
          fill="none"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="square"
        />
        <path
          d="M17.5 33 L34.5 33"
          stroke="#C8A97E"
          strokeWidth="3"
          strokeLinecap="square"
        />
      </svg>
      <span className={`font-display text-2xl tracking-tight ${text}`}>
        Aconcept<span className="text-accent">.</span>
      </span>
    </span>
  );
}
