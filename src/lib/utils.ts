/** Minimal class combiner — no clsx/tailwind-merge dependency needed yet. */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
