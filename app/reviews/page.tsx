import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Surface } from "@/components/Surface";
import { site } from "@/lib/site";
import { WriteReviewSection } from "@/components/WriteReviewSection";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Client feedback on delivery quality and communication.",
};

type Review = {
  quote: string;
  name: string;
  meta: string;
  avatar: string;
  service: "Mobile app" | "WordPress theme" | "Web app" | "Bug fixes";
  rating: 5;
};

const reviews: readonly Review[] = [
  {
    quote:
      "Communication was clear, delivery was fast, and the final product felt premium.",
    name: "Alexa F.",
    meta: "Product Lead, US",
    avatar: "/avatars/alexa.svg",
    service: "Mobile app",
    rating: 5,
  },
  {
    quote:
      "Our WordPress build is now easy to edit and significantly faster on mobile.",
    name: "Brooklyn S.",
    meta: "Agency Owner, UAE",
    avatar: "/avatars/brooklyn.svg",
    service: "WordPress theme",
    rating: 5,
  },
  {
    quote:
      "Clean code, clear planning, and a smooth handover. Exactly what we needed.",
    name: "Robert F.",
    meta: "Operations, UK",
    avatar: "/avatars/robert.svg",
    service: "Web app",
    rating: 5,
  },
  {
    quote:
      "They handled edge cases and polish that most teams ignore. Strong attention to detail.",
    name: "Kristin W.",
    meta: "Founder, EU",
    avatar: "/avatars/kristin.svg",
    service: "Mobile app",
    rating: 5,
  },
  {
    quote:
      "We finally have a WordPress setup our team can edit without fear. Everything is consistent and fast.",
    name: "Esther H.",
    meta: "Marketing, UAE",
    avatar: "/avatars/esther.svg",
    service: "WordPress theme",
    rating: 5,
  },
  {
    quote:
      "They fixed a crash that had been blocking our release and helped us ship the same week.",
    name: "Devon L.",
    meta: "Mobile Team, US",
    avatar: "/avatars/devon.svg",
    service: "Bug fixes",
    rating: 5,
  },
] as const;

const bugFixReviews: readonly Review[] = [
  {
    quote:
      "Crash fixed within a day, plus a clean plan for preventing regressions. Super reliable support.",
    name: "Devon L.",
    meta: "Founder, Canada",
    avatar: "/avatars/devon.svg",
    service: "Bug fixes",
    rating: 5,
  },
  {
    quote:
      "UI glitches and API edge cases were handled carefully. The app feels stable again.",
    name: "Esther H.",
    meta: "Startup, UAE",
    avatar: "/avatars/esther.svg",
    service: "Bug fixes",
    rating: 5,
  },
  {
    quote:
      "We had store rejection issues and performance warnings. Everything got resolved with clear updates.",
    name: "Kristin W.",
    meta: "Product Owner, UK",
    avatar: "/avatars/kristin.svg",
    service: "Bug fixes",
    rating: 5,
  },
] as const;

function Stars({ value }: { value: 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5`}>
      {Array.from({ length: value }).map((_, idx) => (
        <svg
          key={idx}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-amber-500"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 0 0-.364 1.118l1.287 3.959c.3.921-.755 1.688-1.539 1.118l-3.366-2.447a1 1 0 0 0-1.176 0l-3.366 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.959a1 1 0 0 0-.364-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69l1.299-3.958Z" />
        </svg>
      ))}
    </div>
  );
}

function ServicePill({
  service,
  theme = "light",
}: {
  service: Review["service"];
  theme?: "light" | "dark";
}) {
  const tone =
    theme === "dark"
      ? service === "Bug fixes"
        ? "bg-emerald-400/15 text-emerald-200"
        : service === "Mobile app"
          ? "bg-blue-400/15 text-blue-200"
          : service === "WordPress theme"
            ? "bg-indigo-400/15 text-indigo-200"
            : "bg-white/10 text-white/80"
      : service === "Bug fixes"
        ? "bg-emerald-500/10 text-emerald-700"
        : service === "Mobile app"
          ? "bg-blue-500/10 text-blue-700"
          : service === "WordPress theme"
            ? "bg-indigo-500/10 text-indigo-700"
            : "bg-slate-500/10 text-slate-700";

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${tone}`}>
      {service}
    </span>
  );
}

function ReviewCard({
  r,
  tone = "plain",
}: {
  r: Review;
  tone?: "plain" | "soft" | "dark";
}) {
  const ink =
    tone === "dark" ? "text-white/85" : "text-[color:var(--ink)]/85";
  const meta =
    tone === "dark" ? "text-white/60" : "text-[color:var(--muted)]";
  const avatarFrame =
    tone === "dark" ? "border-white/10 bg-white/95" : "border-black/10 bg-white";
  const scorePill =
    tone === "dark"
      ? "bg-white/10 text-white/85"
      : "bg-black/5 text-[color:var(--ink)]/75";

  return (
    <Surface className="h-full p-7 sm:p-8" tone={tone}>
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Using SVG avatars; `next/image` would require additional SVG config. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={r.avatar}
              alt={`${r.name} profile`}
              className={`h-11 w-11 rounded-full border object-cover shadow-sm ${avatarFrame}`}
              loading="lazy"
            />
            <div>
              <div className="text-sm font-black tracking-tight">{r.name}</div>
              <div className={`text-xs ${meta}`}>{r.meta}</div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <ServicePill
              service={r.service}
              theme={tone === "dark" ? "dark" : "light"}
            />
            <Stars value={r.rating} />
          </div>
        </div>

        <blockquote className={`mt-5 text-sm leading-relaxed sm:text-base ${ink}`}>
          &ldquo;{r.quote}&rdquo;
        </blockquote>

        <div className="mt-6 flex items-center justify-between">
          <div className={`text-xs font-semibold ${meta}`}>
            Verified delivery
          </div>
          <div className={`rounded-full px-3 py-1 text-xs font-bold ${scorePill}`}>
            {r.rating}.0
          </div>
        </div>
      </div>
    </Surface>
  );
}

export default function ReviewsPage() {
  return (
    <section className="px-2 py-12 sm:px-0 sm:py-14">
      <Container>
        <Surface className="relative overflow-hidden p-8 sm:p-10" tone="soft">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--accent)]/12 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--accent-2)]/12 blur-2xl"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                Reviews
              </div>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Trusted feedback from global clients
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                Clear communication, clean delivery, and stable builds. Below
                are sample reviews you can replace with real client feedback as
                you complete more projects.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-sm font-bold">
                  <span className="text-[color:var(--ink)]">5.0</span>
                  <span className="text-[color:var(--muted)]">
                    average rating
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-sm font-bold">
                  <span className="text-[color:var(--ink)]">Fast</span>
                  <span className="text-[color:var(--muted)]">responses</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-sm font-bold">
                  <span className="text-[color:var(--ink)]">On-time</span>
                  <span className="text-[color:var(--muted)]">delivery</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="/contact?intent=quote">Get a quote</Button>
                <Button href={`mailto:${site.email}`} variant="outline">
                  Email
                </Button>
              </div>
            </div>
          </div>
        </Surface>

        <WriteReviewSection />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={`${r.name}-${r.meta}-${r.service}`} r={r} />
          ))}
        </div>

        <Surface
          id="bug-fixes"
          className="scroll-mt-[96px] mt-10 overflow-hidden p-8 sm:p-10"
          tone="dark"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <div className="text-xs font-bold uppercase tracking-wider text-white/65">
                Mobile bug fixes
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight">
                Quick fixes. Clear updates. Stable releases.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                If your app has crashes, UI glitches, API issues, store
                rejections, or performance problems, we can jump in and stabilize
                it fast.
              </p>
              <div className="mt-6">
                <Button href="/services">See services</Button>
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-8 lg:grid-cols-3">
              {bugFixReviews.map((r) => (
                <ReviewCard
                  key={`${r.name}-${r.meta}-${r.quote.slice(0, 16)}`}
                  r={r}
                  tone="dark"
                />
              ))}
            </div>
          </div>
        </Surface>

        <Surface className="mt-10 p-8 sm:p-10" tone="soft">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                Want results like this?
              </h2>
              <p className="mt-2 text-sm text-[color:var(--muted)] sm:text-base">
                Send a short message and we will respond quickly with next
                steps.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/contact">Contact</Button>
              <Button href={`mailto:${site.email}`} variant="outline">
                Email
              </Button>
            </div>
          </div>
        </Surface>
      </Container>
    </section>
  );
}
