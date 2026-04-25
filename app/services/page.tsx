import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Surface } from "@/components/Surface";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile app development and custom WordPress themes. Delivery-focused engineering with a premium finish.",
};

const serviceBlocks = [
  {
    title: "Mobile App Development",
    intro:
      "From MVP to production-ready release, we build apps that feel fast and look polished.",
    bullets: [
      "Flutter / React Native builds",
      "REST/GraphQL integrations",
      "Auth, payments, push notifications",
      "App Store / Play Store preparation",
    ],
  },
  {
    title: "Application Management (Long-term)",
    intro:
      "If you want us to manage your application long-term, we handle updates, stability, and continuous improvements.",
    bullets: [
      "Ongoing maintenance and monitoring",
      "Feature iterations and roadmap support",
      "Performance + security improvements",
      "Release management and ongoing support",
    ],
  },
  {
    title: "Mobile Bug Fixes",
    intro:
      "Crash fixes, UI issues, store rejections, performance problems, and release support.",
    bullets: [
      "Triage + reproduction steps",
      "Crash / API / state bugs",
      "Performance and memory fixes",
      "Release + store submission support",
    ],
  },
  {
    title: "Custom WordPress Themes",
    intro:
      "Custom themes that are easy for clients to edit without breaking layout.",
    bullets: [
      "Block-first builds (Gutenberg)",
      "ACF options, flexible sections",
      "Performance and SEO pass",
      "Clean handoff for content teams",
    ],
  },
  {
    title: "Web Apps and Dashboards",
    intro:
      "Internal tools and customer portals that make your business run smoother.",
    bullets: [
      "Role-based access, auth flows",
      "Admin dashboards and analytics",
      "Component-driven UI systems",
      "Maintainable TypeScript code",
    ],
  },
  {
    title: "Maintenance and Support",
    intro: "Keep shipping without surprises. We support, monitor, and improve.",
    bullets: [
      "Bug fixes and iteration cycles",
      "Performance improvements",
      "Security updates and backups",
      "Ongoing feature delivery",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <section className="px-2 py-12 sm:px-0 sm:py-14">
      <Container>
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
            Services
          </div>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Clear scope. Clean delivery. Premium finish.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
            We help founders and teams build mobile products and WordPress
            experiences that feel international-level: reliable performance,
            consistent UI, and thoughtful details.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {serviceBlocks.map((s) => {
            const isManagement = s.title.startsWith("Application Management");
            const isBugFix = s.title === "Mobile Bug Fixes";

            return (
            <Surface
              key={s.title}
              id={
                isManagement ? "management" : isBugFix ? "bug-fixes" : undefined
              }
              className={`p-7 sm:p-8 ${isManagement ? "lg:col-span-2" : ""}`}
              tone={isManagement ? "soft" : "plain"}
            >
              {isManagement ? (
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold text-[color:var(--muted)]">
                  Long-term support
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-black/20" />
                  App management
                </div>
              ) : null}
              <h2 className="text-lg font-extrabold tracking-tight">
                {s.title}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{s.intro}</p>
              <ul className="mt-4 grid gap-2 text-sm text-[color:var(--ink)]/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {isManagement ? (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-[color:var(--muted)]">
                    Want us to handle your app long-term? Share your current
                    stack and pain-points.
                  </div>
                  <Button href="/contact?intent=quote">Get a quote</Button>
                </div>
              ) : null}
            </Surface>
          );
          })}
        </div>

        <Surface className="mt-10 p-8 sm:p-10" tone="soft">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                Want a quote?
              </h2>
              <p className="mt-2 text-sm text-[color:var(--muted)] sm:text-base">
                Send a short message and we will reply with a clear plan and an
                honest estimate.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/contact">Contact</Button>
              <Button href={`mailto:${site.email}`} variant="outline">
                {site.email}
              </Button>
            </div>
          </div>
        </Surface>
      </Container>
    </section>
  );
}
