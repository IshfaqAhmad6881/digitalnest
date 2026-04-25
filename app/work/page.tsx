import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Surface } from "@/components/Surface";

export const metadata: Metadata = {
  title: "Work",
  description: "A small selection of projects across mobile and WordPress.",
};

const items = [
  {
    title: "Atlas Delivery",
    kind: "Mobile app",
    problem:
      "A delivery business needed a reliable driver workflow and real-time order updates.",
    solution:
      "Built a streamlined mobile experience with status tracking, notifications, and admin visibility.",
    stack: ["Mobile", "Maps", "Notifications"],
  },
  {
    title: "Craft Agency Theme",
    kind: "WordPress theme",
    problem:
      "An agency needed a flexible website that stays fast while being easy to edit.",
    solution:
      "Delivered a custom block-first theme, clean templates, and performance-focused implementation.",
    stack: ["WordPress", "Blocks", "SEO"],
  },
  {
    title: "Clarity Clinic Portal",
    kind: "Web app",
    problem:
      "A clinic needed booking, payments, and staff operations in one place.",
    solution:
      "Designed a dashboard-focused portal with clear roles, secure access, and smooth workflows.",
    stack: ["Dashboard", "Payments", "Admin"],
  },
] as const;

export default function WorkPage() {
  return (
    <section className="px-2 py-12 sm:px-0 sm:py-14">
      <Container>
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
            Work
          </div>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Projects that prioritize clarity and polish
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
            These are representative examples. Replace them with your real
            case-studies as you collect client projects and screenshots.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {items.map((p) => (
            <Surface key={p.title} className="p-7 sm:p-8" tone="plain">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-black tracking-tight">
                    {p.title}
                  </h2>
                  <div className="mt-1 text-sm font-semibold text-[color:var(--muted)]">
                    {p.kind}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-[color:var(--ink)]/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                    Problem
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--ink)]/80">
                    {p.problem}
                  </p>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                    Solution
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--ink)]/80">
                    {p.solution}
                  </p>
                </div>
              </div>
            </Surface>
          ))}
        </div>

        <Surface
          className="mt-10 flex flex-col gap-3 p-8 sm:flex-row sm:items-center sm:justify-between"
          tone="soft"
        >
          <div>
            <div className="text-lg font-extrabold tracking-tight">
              Have a project in mind?
            </div>
            <div className="mt-1 text-sm text-[color:var(--muted)]">
              Share your timeline and scope. We will reply with a clear plan.
            </div>
          </div>
          <Button href="/contact">Contact</Button>
        </Surface>
      </Container>
    </section>
  );
}
