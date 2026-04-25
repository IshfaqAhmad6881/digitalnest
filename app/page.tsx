import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Surface } from "@/components/Surface";
import { site } from "@/lib/site";
import { WorldReach } from "@/components/WorldReach";

const services = [
  {
    title: "Mobile App Development",
    desc: "Production-ready apps with clean UX and reliable performance.",
    badge: "M",
    tone: "plain",
    points: [
      "Flutter / React Native",
      "Payments, auth, notifications",
      "App Store + Play Store readiness",
    ],
  },
  {
    title: "Custom WordPress Themes",
    desc: "Block-first themes that are fast, flexible, and easy to edit.",
    badge: "WP",
    tone: "dark",
    points: ["Custom blocks", "ACF options", "SEO + performance pass"],
  },
  {
    title: "Web Apps and Dashboards",
    desc: "Dashboards and portals built for real operations and scale.",
    badge: "W",
    tone: "plain",
    points: ["Auth + roles", "Analytics", "Maintainable UI"],
  },
  {
    title: "Application Management (Long-term)",
    desc: "We manage your app long-term: updates, stability, releases, and continuous improvement.",
    badge: "AM",
    tone: "soft",
    featured: true,
    points: ["Maintenance + monitoring", "Feature iterations", "Release support"],
  },
  {
    title: "Mobile Bug Fixes",
    desc: "Crash fixes, UI issues, store rejections, and performance improvements.",
    badge: "BF",
    tone: "plain",
    points: ["Crash & UI fixes", "API edge cases", "Store submission help"],
  },
  {
    title: "Maintenance and Support",
    desc: "Updates, improvements, and quick fixes when it matters.",
    badge: "S",
    tone: "plain",
    points: ["Bug fixes", "Performance", "Security updates"],
  },
] as const;

const projects = [
  {
    name: "Atlas Delivery",
    type: "Mobile app",
    summary: "Order tracking, driver workflows, and real-time status updates.",
    tags: ["Mobile", "Maps", "Notifications"],
  },
  {
    name: "Clarity Clinic",
    type: "Web portal",
    summary: "Appointments, payments, and internal staff management tools.",
    tags: ["Dashboard", "Payments", "Admin"],
  },
  {
    name: "Craft Agency Theme",
    type: "WordPress theme",
    summary: "Custom blocks, flexible sections, and a high Lighthouse score.",
    tags: ["WordPress", "Blocks", "SEO"],
  },
] as const;

const testimonials = [
  {
    quote:
      "Communication was clear, delivery was fast, and the final product felt premium.",
    name: "Sofia M.",
    meta: "Product Lead, EU",
  },
  {
    quote:
      "Our WordPress build is now easy to edit and significantly faster on mobile.",
    name: "Daniel R.",
    meta: "Founder, US",
  },
  {
    quote:
      "They handled edge cases and polish that most teams ignore. Strong attention to detail.",
    name: "Ayesha K.",
    meta: "Agency Owner, UAE",
  },
  {
    quote:
      "Clean code, clear planning, and a smooth handover. Exactly what we needed.",
    name: "Robert T.",
    meta: "Operations, UK",
  },
  {
    quote:
      "They resolved urgent app bugs quickly and helped us ship with confidence.",
    name: "Hina S.",
    meta: "Marketing, UAE",
  },
  {
    quote:
      "Bug fixes were handled professionally and the app feels stable again.",
    name: "Mark L.",
    meta: "Founder, US",
  },
] as const;

function Dot() {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]"
    />
  );
}

function AvatarStack({ seed }: { seed: string }) {
  const items = [
    `${seed} A`,
    `${seed} B`,
    `${seed} C`,
    `${seed} D`,
  ] as const;
  return (
    <div className="flex -space-x-2">
      {items.map((label, idx) => (
        <div
          key={label}
          aria-hidden="true"
          className={`grid h-8 w-8 place-items-center rounded-full border border-white/60 text-[10px] font-black text-white shadow-sm ${
            idx % 2 === 0 ? "bg-[color:var(--ink)]" : "bg-[color:var(--accent)]"
          }`}
        >
          {label.split(" ").map((w) => w[0]).join("")}
        </div>
      ))}
    </div>
  );
}

function ReviewCard({
  t,
  size = "md",
}: {
  t: (typeof testimonials)[number];
  size?: "sm" | "md" | "lg";
}) {
  const pad = size === "lg" ? "p-8" : size === "sm" ? "p-6" : "p-7";
  const quoteClass =
    size === "lg" ? "text-base" : size === "sm" ? "text-sm" : "text-sm";

  return (
    <Surface className={`${pad}`} tone="plain">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-black/5 text-sm font-black">
            {t.name.split(" ").map((w) => w[0]).join("")}
          </div>
          <div>
            <div className="text-sm font-black">{t.name}</div>
            <div className="text-xs text-[color:var(--muted)]">{t.meta}</div>
          </div>
        </div>
        <div className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-700">
          5.0
        </div>
      </div>
      <blockquote
        className={`mt-4 leading-relaxed text-[color:var(--ink)]/85 ${quoteClass}`}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>
    </Surface>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="px-2 pt-6 sm:px-0 sm:pt-8">
        <Container>
          <Surface
            className="relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12"
            tone="plain"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0"
            >
              <Image
                src="/hero-bg.png"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover object-center opacity-35"
              />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/92 via-white/78 to-white/66"
            />

            <div className="relative z-20 dn-fade-up">
              <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-[color:var(--muted)] shadow-sm">
                <Dot />
                Available for new projects
              </div>

              <h1 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-5xl">
                Smart digital solutions
                <span className="mx-2 inline-flex items-center gap-2">
                  <span className="text-[color:var(--muted)]">for</span>
                  <span className="inline-flex items-center gap-2">
                    Mobile <Dot /> WordPress
                  </span>
                </span>
                and modern web.
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                {site.name} delivers mobile apps, custom WordPress themes, and
                clean web dashboards. You get clear communication, reliable
                delivery, and a polished finish.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact?intent=quote">Get a quote</Button>
                <Button href="/work" variant="outline">
                  View work
                </Button>
              </div>
              </div>

            <div className="mt-10">
              <Surface className="p-3 sm:p-4" tone="plain">
                <div className="grid gap-3 sm:grid-cols-12 sm:items-center">
                  <div className="sm:col-span-5">
                <div className="flex h-11 items-center gap-3 rounded-lg border border-black/10 bg-white px-4">
                  <span
                        aria-hidden="true"
                        className="grid h-7 w-7 place-items-center rounded-full bg-black/5 text-[color:var(--muted)]"
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path
                            fillRule="evenodd"
                            d="M8.5 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM1 8.5a7.5 7.5 0 1 1 13.19 4.79l3.51 3.52a1 1 0 0 1-1.41 1.41l-3.52-3.51A7.5 7.5 0 0 1 1 8.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <input
                        aria-label="Search"
                        placeholder="Search services (e.g. mobile app)"
                        className="w-full bg-transparent text-sm outline-none placeholder:text-[color:var(--muted)]"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div className="flex h-11 items-center rounded-lg border border-black/10 bg-white px-4 text-sm text-[color:var(--muted)]">
                      Service: Mobile / WordPress / Web
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div className="flex h-11 items-center rounded-lg border border-black/10 bg-white px-4 text-sm text-[color:var(--muted)]">
                      Timeline: 2-4 weeks
                    </div>
                  </div>
                  <div className="sm:col-span-1 sm:flex sm:justify-end">
                    <Link
                      href="/services"
                      className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[color:var(--ink)] px-4 text-sm font-bold text-white sm:w-auto"
                    >
                      Search
                    </Link>
                  </div>
                </div>
              </Surface>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:items-start">
              {[
                {
                  title: "Quick delivery",
                  desc: "Clear scope and predictable milestones.",
                },
                { title: "Clean builds", desc: "Maintainable code and UX polish." },
                {
                  title: "Support",
                  desc: "Bug fixes, improvements, and updates.",
                },
              ].map((f) => (
                <Surface
                  key={f.title}
                  className="min-h-[150px] p-6 lg:col-span-2 lg:h-[220px]"
                  tone="plain"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-black/5">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="h-6 w-6 text-[color:var(--ink)]"
                        fill="currentColor"
                      >
                        <path d="M16.704 7.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3.25-3.25a1 1 0 1 1 1.414-1.414l2.543 2.543 6.543-6.543a1 1 0 0 1 1.414 0Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-base font-black">{f.title}</div>
                      <div className="mt-1 text-sm leading-relaxed text-[color:var(--muted)]">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                </Surface>
              ))}

              <Surface className="p-6 lg:col-span-6" tone="plain">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-lg">
                    <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                      End-to-end
                    </div>
                    <div className="mt-2 text-xl font-black tracking-tight">
                      Mobile + WordPress, with backend if you need it.
                    </div>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">
                      If you already have APIs, we integrate cleanly. If you
                      don&apos;t, we can build backend services too.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[color:var(--muted)]">
                      Backend
                    </div>
                    <div
                      aria-hidden="true"
                      className="relative h-6 w-11 rounded-full bg-black/10"
                    >
                      <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-[color:var(--accent)]" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-[color:var(--muted)]">
                    Most projects start with a quick call and a scoped plan.
                  </div>
                  <Button href="/contact?intent=quote">Request quote</Button>
                </div>
              </Surface>
            </div>
            </div>
          </Surface>
        </Container>
      </section>

      <section className="pt-14 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                Explore
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Our expert services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-bold text-[color:var(--accent)] hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 flex justify-center dn-fade-up">
            <Surface
              tone="soft"
              className="relative w-full max-w-5xl overflow-hidden p-6 sm:p-7"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-28 -top-28 h-64 w-64 rounded-full bg-[color:var(--accent)]/12 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -right-28 h-72 w-72 rounded-full bg-[color:var(--accent-2)]/14 blur-2xl"
              />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold text-[color:var(--muted)] shadow-sm">
                    <span className="text-[color:var(--ink)]">Long-term</span>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-black/20" />
                    App management
                  </div>
                  <div className="mt-3 text-lg font-black tracking-tight sm:text-xl">
                    We can manage your application for you
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--muted)]">
                    Monthly support, updates, releases, monitoring, and ongoing
                    improvements. Perfect if you want a long-term team to handle
                    your apps.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Maintenance",
                      "Monitoring",
                      "Feature iterations",
                      "Release support",
                    ].map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-[color:var(--ink)]/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    href="/services#management"
                    variant="outline"
                    className="text-xs"
                  >
                    Learn more
                  </Button>
                  <Button href="/contact?intent=quote" className="text-xs">
                    Get started
                  </Button>
                </div>
              </div>
            </Surface>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((s, idx) => {
              const glowA =
                s.title === "Mobile Bug Fixes"
                  ? "bg-emerald-500/12"
                  : s.title.includes("Application Management")
                    ? "bg-amber-500/12"
                    : s.title.includes("WordPress")
                      ? "bg-blue-500/12"
                      : s.title.includes("Web Apps")
                        ? "bg-slate-500/10"
                        : "bg-indigo-500/10";
              const glowB =
                s.title === "Mobile Bug Fixes"
                  ? "bg-blue-500/10"
                  : s.title.includes("Application Management")
                    ? "bg-emerald-500/10"
                    : s.title.includes("WordPress")
                      ? "bg-emerald-500/10"
                      : s.title.includes("Web Apps")
                        ? "bg-blue-500/10"
                        : "bg-amber-500/10";

              return (
              <Surface
                key={s.title}
                className={`dn-fade-up relative overflow-hidden p-7 ${"featured" in s && s.featured ? "min-h-[260px] p-8 sm:p-10 md:col-span-2" : ""}`}
                tone={s.tone}
                style={{ animationDelay: `${80 + idx * 70}ms` }}
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <div className={`absolute -left-20 -top-24 h-56 w-56 rounded-full blur-3xl ${glowA}`} />
                  <div className={`absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl ${glowB}`} />
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-black tracking-tight">
                      {s.title}
                    </div>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        s.tone === "dark"
                          ? "text-white/70"
                          : "text-[color:var(--muted)]"
                      }`}
                    >
                      {s.desc}
                    </p>
                  </div>
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-lg ${
                      s.tone === "dark" ? "bg-white/10" : "bg-black/5"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`text-xs font-black ${
                        s.tone === "dark"
                          ? "text-white"
                          : "text-[color:var(--ink)]/80"
                      }`}
                    >
                      {s.badge}
                    </span>
                  </div>
                </div>

                <ul
                  className={`relative mt-5 grid gap-2 text-sm ${
                    s.tone === "dark"
                      ? "text-white/80"
                      : "text-[color:var(--ink)]/80"
                  }`}
                >
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${
                          s.tone === "dark"
                            ? "bg-white/60"
                            : "bg-[color:var(--accent)]"
                        }`}
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex items-center justify-between">
                  <AvatarStack seed={s.title.split(" ")[0] || "DN"} />
                  <Link
                    href={
                      "featured" in s && s.featured
                        ? "/services#management"
                        : s.title === "Mobile Bug Fixes"
                          ? "/services#bug-fixes"
                          : "/contact?intent=quote"
                    }
                    className={`rounded-full px-4 py-2 text-xs font-bold ${
                      s.tone === "dark"
                        ? "bg-white text-[color:var(--ink)]"
                        : "bg-black/5 text-[color:var(--ink)]"
                    }`}
                  >
                    {"featured" in s && s.featured
                      ? "Learn more"
                      : s.title === "Mobile Bug Fixes"
                        ? "See details"
                        : "Get quote"}
                  </Link>
                </div>
              </Surface>
            );
            })}
          </div>
        </Container>
      </section>

      <section className="pt-14 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                Made on {site.name}
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Selected work
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm font-bold text-[color:var(--accent)] hover:underline"
            >
              See all
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <Surface key={p.name} className="p-5" tone="plain">
                <div className="overflow-hidden rounded-lg border border-black/10 bg-gradient-to-br from-slate-50 to-white">
                  <div
                    className={`h-32 w-full ${
                      idx === 0
                        ? "bg-gradient-to-br from-blue-100 via-white to-slate-50"
                        : idx === 1
                          ? "bg-gradient-to-br from-emerald-100 via-white to-slate-50"
                          : "bg-gradient-to-br from-amber-100 via-white to-slate-50"
                    }`}
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-base font-black tracking-tight">
                        {p.name}
                      </div>
                      <div className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold text-[color:var(--muted)]">
                        {p.type}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">
                      {p.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-[color:var(--ink)]/75"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <WorldReach />

      <section className="py-14 sm:py-16">
        <Container>
          <Surface className="p-8 sm:p-10" tone="soft">
            <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                  Ready to start?
                </div>
                <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                  Tell us what you want to build.
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-[color:var(--muted)] sm:text-base">
                  Share your requirements, timeline, and budget range. We will
                  reply with a clear plan and honest estimate.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="/contact?intent=quote">Get a quote</Button>
                <Button href={`mailto:${site.email}`} variant="outline">
                  Email
                </Button>
              </div>
            </div>
          </Surface>
        </Container>
      </section>

      <section className="pb-14 sm:pb-16">
        <Container>
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
              What people say
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              Client reviews
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[color:var(--muted)]">
              Professional communication and real attention to detail, across
              mobile, WordPress, and web projects.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4 lg:translate-y-10">
              <ReviewCard t={testimonials[0]} size="lg" />
            </div>

            <div className="grid gap-4 lg:col-span-4">
              <div className="lg:mx-auto lg:w-[92%]">
                <ReviewCard t={testimonials[1]} size="sm" />
              </div>
              <ReviewCard t={testimonials[2]} />
              <div className="lg:mx-auto lg:w-[92%]">
                <ReviewCard t={testimonials[3]} size="sm" />
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-4 lg:translate-y-6">
              <ReviewCard t={testimonials[4]} />
              <ReviewCard t={testimonials[5]} />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button href="/reviews" variant="outline">
              Read more
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
