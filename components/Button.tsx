import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--paper)]";

const styles: Record<Variant, string> = {
  solid:
    "bg-[color:var(--ink)] text-white hover:bg-black/90 shadow-sm hover:shadow-[0_14px_30px_rgba(15,23,42,0.18)]",
  outline:
    "border border-black/10 bg-white hover:bg-black/5 hover:shadow-[0_12px_24px_rgba(15,23,42,0.10)]",
  ghost: "hover:bg-black/5",
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
