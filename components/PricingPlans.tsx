"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { site } from "@/lib/site";

type Mode = "one_time" | "retainer";

type Plan = {
  name: string;
  price: string;
  badge?: string;
  kicker?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  bullets: string[];
  tone?: "plain" | "highlight";
};

function BugFixSection({ mode }: { mode: Mode }) {
  return (
    <div className="mt-10 rounded-[var(--radius-card)] border border-white/10 bg-white/5 p-6 text-left shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
            Mobile Bug Fixes
          </div>
          <div className="mt-3 text-xl font-black text-white">
            {mode === "one_time"
              ? "Bug Fix Sprint (one-time)"
              : "Bug fixes included in retainer"}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/65">
            {mode === "one_time"
              ? "Perfect when you need urgent crash fixes, UI bugs, or store rejection fixes. We start with triage and a clear fix plan."
              : "Keep your app healthy with ongoing fixes, performance work, and release support every month."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact?intent=quote"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-4 text-sm font-black text-[color:var(--ink)]"
          >
            Request bug fix
          </Link>
          <Link
            href="/reviews"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-white/15 px-4 text-sm font-bold text-white/80 hover:bg-white/5"
          >
            See reviews
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          "Crash + API issue fixes",
          "UI/UX bug fixes and polish",
          "App Store / Play Store support",
        ].map((t) => (
          <div
            key={t}
            className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/75"
          >
            <div className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70"
              />
              <span>{t}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PillToggle({
  mode,
  onChange,
}: {
  mode: Mode;
  onChange: (m: Mode) => void;
}) {
  return (
    <div
      className="mt-6 inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 text-xs font-bold"
      role="tablist"
      aria-label="Pricing mode"
    >
      <button
        type="button"
        role="tab"
        aria-selected={mode === "one_time"}
        onClick={() => onChange("one_time")}
        className={`rounded-full px-4 py-2 transition ${
          mode === "one_time"
            ? "bg-white text-[color:var(--ink)]"
            : "text-white/70 hover:text-white"
        }`}
      >
        One-time
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={mode === "retainer"}
        onClick={() => onChange("retainer")}
        className={`rounded-full px-4 py-2 transition ${
          mode === "retainer"
            ? "bg-white text-[color:var(--ink)]"
            : "text-white/70 hover:text-white"
        }`}
      >
        Retainer
      </button>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const isHighlight = plan.tone === "highlight";
  return (
    <div
      className={`rounded-[var(--radius-card)] border border-white/10 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)] ${
        isHighlight
          ? "bg-gradient-to-b from-white/10 to-white/5"
          : "bg-white/5"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-white/60">
            {plan.name}
          </div>
          <div className="mt-2 text-3xl font-black">
            {plan.price}
            {plan.kicker ? (
              <span className="ml-1 text-sm font-bold text-white/60">
                {plan.kicker}
              </span>
            ) : null}
          </div>
        </div>
        {plan.badge ? (
          <div
            className={`rounded-full px-3 py-1 text-xs font-black ${
              plan.badge === "Popular"
                ? "bg-[color:var(--accent)] text-white"
                : "border border-white/15 bg-white/5 text-white/70"
            }`}
          >
            {plan.badge}
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex items-center gap-2">
        <Link
          href={plan.ctaHref}
          className="inline-flex h-10 flex-1 items-center justify-center rounded-lg bg-white px-4 text-sm font-black text-[color:var(--ink)]"
        >
          {plan.ctaLabel}
        </Link>
        <Link
          href={plan.secondaryHref}
          className="inline-flex h-10 items-center justify-center rounded-lg border border-white/15 px-4 text-sm font-bold text-white/80 hover:bg-white/5"
        >
          {plan.secondaryLabel}
        </Link>
      </div>

      <ul className="mt-6 grid gap-2 text-sm text-white/75">
        {plan.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70"
            />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PricingPlans() {
  const [mode, setMode] = useState<Mode>("one_time");

  const plans = useMemo<Plan[]>(() => {
    if (mode === "retainer") {
      return [
        {
          name: "Care",
          price: "$299",
          kicker: "/month",
          badge: "Support",
          ctaLabel: "Get Started",
          ctaHref: "/contact?intent=quote",
          secondaryLabel: "Email",
          secondaryHref: `mailto:${site.email}`,
          bullets: [
            "Small fixes + updates",
            "Monthly performance/SEO check",
            "Priority response window",
          ],
        },
        {
          name: "Growth",
          price: "$599",
          kicker: "/month",
          badge: "Popular",
          ctaLabel: "Get Started",
          ctaHref: "/contact?intent=quote",
          secondaryLabel: "Examples",
          secondaryHref: "/work",
          bullets: [
            "Everything in Care",
            "Feature improvements each month",
            "Analytics + conversion tweaks",
          ],
          tone: "highlight",
        },
        {
          name: "Partner",
          price: "$999",
          kicker: "/month",
          badge: "Scale",
          ctaLabel: "Request Quote",
          ctaHref: "/contact?intent=quote",
          secondaryLabel: "Email",
          secondaryHref: `mailto:${site.email}`,
          bullets: [
            "Dedicated monthly delivery slot",
            "Backend/API improvements (if needed)",
            "Roadmap planning + reporting",
          ],
        },
      ];
    }

    return [
      {
        name: "Starter",
        price: "$999",
        kicker: "from",
        badge: "MVP",
        ctaLabel: "Get Started",
        ctaHref: "/contact?intent=quote",
        secondaryLabel: "Details",
        secondaryHref: "/services",
        bullets: ["Scope call + plan (fast)", "Core screens / pages", "Clean handoff"],
      },
      {
        name: "Pro",
        price: "$1999",
        kicker: "from",
        badge: "Popular",
        ctaLabel: "Get Started",
        ctaHref: "/contact?intent=quote",
        secondaryLabel: "Examples",
        secondaryHref: "/work",
        bullets: [
          "UX polish + performance pass",
          "Integrations (payments, auth)",
          "Priority support during delivery",
        ],
        tone: "highlight",
      },
      {
        name: "Custom",
        price: "$Custom",
        badge: "Scale",
        ctaLabel: "Request Quote",
        ctaHref: "/contact?intent=quote",
        secondaryLabel: "Email",
        secondaryHref: `mailto:${site.email}`,
        bullets: [
          "Backend/API + admin dashboards",
          "Multi-role systems + analytics",
          "Ongoing retainer support (optional)",
        ],
      },
    ];
  }, [mode]);

  return (
    <>
      <PillToggle mode={mode} onChange={setMode} />
      <p className="mx-auto mt-3 max-w-2xl text-xs text-white/65 sm:text-sm">
        {mode === "one_time"
          ? "One-time packages are fixed-scope builds with a clear delivery milestone."
          : "Retainers are monthly support + improvements to keep shipping without surprises."}
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <PlanCard plan={plans[0]!} />
        </div>
        <div className="lg:col-span-4">
          <PlanCard plan={plans[1]!} />
        </div>
        <div className="lg:col-span-4">
          <PlanCard plan={plans[2]!} />
        </div>
      </div>

      <BugFixSection mode={mode} />
    </>
  );
}
