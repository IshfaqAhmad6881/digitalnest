import Link from "next/link";
import { Surface } from "@/components/Surface";

function WorldMap() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-[var(--radius-card)] bg-gradient-to-br from-white/5 via-transparent to-emerald-500/10" />
      <div aria-hidden="true" className="dn-map-sheen rounded-[var(--radius-card)]" />

      <svg
        aria-hidden="true"
        viewBox="0 0 1000 520"
        className="dn-map-drift relative z-10 h-auto w-full"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2.1" cy="2.1" r="1.35" fill="rgba(255,255,255,0.22)" />
          </pattern>

          {/* Stylized land shapes (hand-drawn, not a geographic source). */}
          <clipPath id="land">
            <path d="M140 120c50-50 140-50 190-15 30 21 45 50 35 70-15 30-55 45-85 60-20 10-10 30-25 45-25 25-60 15-80-5-20-20-35-40-55-60-25-25-45-60-20-80 10-8 20-12 40-15Z" />
            <path d="M320 265c30 20 40 55 25 90-15 40-35 90-60 95-25 6-40-25-35-55 10-55 20-95 35-120 10-17 20-20 35-10Z" />
            <path d="M455 135c30-20 65-20 90 0 15 12 20 30 10 43-13 17-40 17-60 10-20-8-45-28-40-53Z" />
            <path d="M500 190c40 5 65 40 60 80-5 55-35 105-70 102-35-2-55-47-45-97 10-45 20-90 55-85Z" />
            <path d="M565 130c65-45 185-40 245 10 40 35 35 85-5 105-35 17-60-5-95-10-40-6-55 30-95 35-35 5-60-18-70-50-12-35-5-70 20-90Z" />
            <path d="M775 330c35-15 85 0 105 30 20 30-5 55-50 55-45 0-70-25-65-53 3-16 10-26 10-32Z" />
            <path d="M390 105c20-18 55-18 70 0 10 12 5 25-10 30-15 5-30-2-45-10-12-7-18-12-15-20Z" />
          </clipPath>
        </defs>

        <rect width="1000" height="520" fill="url(#dots)" clipPath="url(#land)" />

        {/* Subtle outlines for definition */}
        <g fill="none" stroke="rgba(255,255,255,0.11)" strokeWidth="2">
          <path d="M140 120c50-50 140-50 190-15 30 21 45 50 35 70-15 30-55 45-85 60-20 10-10 30-25 45-25 25-60 15-80-5-20-20-35-40-55-60-25-25-45-60-20-80 10-8 20-12 40-15Z" />
          <path d="M320 265c30 20 40 55 25 90-15 40-35 90-60 95-25 6-40-25-35-55 10-55 20-95 35-120 10-17 20-20 35-10Z" />
          <path d="M455 135c30-20 65-20 90 0 15 12 20 30 10 43-13 17-40 17-60 10-20-8-45-28-40-53Z" />
          <path d="M500 190c40 5 65 40 60 80-5 55-35 105-70 102-35-2-55-47-45-97 10-45 20-90 55-85Z" />
          <path d="M565 130c65-45 185-40 245 10 40 35 35 85-5 105-35 17-60-5-95-10-40-6-55 30-95 35-35 5-60-18-70-50-12-35-5-70 20-90Z" />
          <path d="M775 330c35-15 85 0 105 30 20 30-5 55-50 55-45 0-70-25-65-53 3-16 10-26 10-32Z" />
          <path d="M390 105c20-18 55-18 70 0 10 12 5 25-10 30-15 5-30-2-45-10-12-7-18-12-15-20Z" />
        </g>

        {/* Soft glow */}
        <g opacity="0.55">
          <circle
            cx="720"
            cy="200"
            r="120"
            fill="rgba(17,185,129,0.10)"
            className="dn-glow-breathe"
            style={{ animationDelay: "120ms" }}
          />
          <circle
            cx="260"
            cy="250"
            r="110"
            fill="rgba(43,102,246,0.10)"
            className="dn-glow-breathe"
            style={{ animationDelay: "460ms" }}
          />
        </g>
      </svg>

      {/* Pins */}
      <div
        className="dn-float absolute left-[20%] top-[18%] z-20 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur"
        style={{ animationDelay: "0ms" }}
      >
        <span aria-hidden="true" className="dn-pulse-ring" style={{ animationDelay: "0ms" }} />
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-xs font-black text-white">
          AR
        </div>
      </div>
      <div
        className="dn-float absolute left-[50%] top-[32%] z-20 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur"
        style={{ animationDelay: "220ms" }}
      >
        <span aria-hidden="true" className="dn-pulse-ring" style={{ animationDelay: "220ms" }} />
        <div className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--accent)]/70 text-xs font-black text-white">
          EU
        </div>
      </div>
      <div
        className="dn-float absolute left-[30%] top-[64%] z-20 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur"
        style={{ animationDelay: "420ms" }}
      >
        <span aria-hidden="true" className="dn-pulse-ring" style={{ animationDelay: "420ms" }} />
        <div className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--ink)]/70 text-xs font-black text-white">
          SA
        </div>
      </div>
      <div
        className="dn-float absolute left-[78%] top-[66%] z-20 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur"
        style={{ animationDelay: "640ms" }}
      >
        <span aria-hidden="true" className="dn-pulse-ring" style={{ animationDelay: "640ms" }} />
        <div className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--accent-2)]/70 text-xs font-black text-[color:var(--ink)]">
          AP
        </div>
      </div>
    </div>
  );
}

export function WorldReach() {
  return (
    <section className="pt-14 sm:pt-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <Surface
          tone="dark"
          className="relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12"
        >
          <div className="absolute inset-0 opacity-90">
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -right-48 -bottom-48 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <WorldMap />
            </div>

            <div className="space-y-5 lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                Worldwide
              </div>

              <h2 className="text-balance text-3xl font-black tracking-tight sm:text-4xl">
                We work for clients around the world
              </h2>

              <p className="max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
                Remote-first delivery with clear communication. Whether you
                already have backend services or need us to build APIs too, we
                can ship a clean, reliable product.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="text-3xl font-black">20+</div>
                  <div className="mt-1 text-sm text-white/60">
                    International clients
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black">10+</div>
                  <div className="mt-1 text-sm text-white/60">
                    Countries served
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?intent=quote"
                  className="inline-flex items-center justify-center rounded-lg bg-[color:var(--accent-2)] px-5 py-2.5 text-sm font-black text-[color:var(--ink)] shadow-sm shadow-emerald-900/20 transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </Surface>
      </div>
    </section>
  );
}
