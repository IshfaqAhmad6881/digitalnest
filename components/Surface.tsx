import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Tone = "plain" | "soft" | "dark";

const tones: Record<Tone, string> = {
  plain:
    "border border-black/5 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]",
  soft:
    "border border-black/5 bg-gradient-to-b from-white to-slate-50 shadow-[0_16px_40px_rgba(15,23,42,0.06)]",
  dark:
    "border border-white/10 bg-[color:var(--ink)] text-white shadow-[0_18px_50px_rgba(15,23,42,0.20)]",
};

export function Surface({
  children,
  className = "",
  tone = "plain",
  ...props
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
} & Omit<ComponentPropsWithoutRef<"div">, "children">) {
  return (
    <div
      {...props}
      className={`rounded-[var(--radius-card)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)] ${tones[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
