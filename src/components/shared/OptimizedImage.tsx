import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Disables lazy loading for LCP-critical images (e.g. hero). */
  priority?: boolean;
  className?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`${className} transition-[opacity,filter] duration-700 ease-out ${
        loaded ? "opacity-100 blur-none" : "opacity-0 blur-sm"
      }`}
    />
  );
}
