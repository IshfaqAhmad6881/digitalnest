import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Surface } from "@/components/Surface";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact us for mobile development, custom WordPress themes, or web app work.",
};

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const intent = sp.intent === "quote" ? "quote" : "general";

  return (
    <section className="px-2 py-12 sm:px-0 sm:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-5">
            <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
              Contact
            </div>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              Let&apos;s build something great.
            </h1>
            <p className="text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
              Tell us what you need: mobile development, a custom WordPress theme
              (block-first and fast), or a clean dashboard/web app. We reply with
              a clear plan and honest estimate.
            </p>

            <Surface className="p-6" tone="plain">
              <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                Email
              </div>
              <a
                className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[color:var(--accent)] hover:underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              <div className="mt-3 text-sm text-[color:var(--muted)]">
                {site.locationLine}
              </div>
            </Surface>
          </div>

          <Surface className="p-7 sm:p-8" tone="soft">
            <div className="text-lg font-extrabold tracking-tight">
              {intent === "quote" ? "Quote request" : "Project inquiry"}
            </div>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              {intent === "quote"
                ? "Fill the details below. When you submit, it opens an email draft addressed to "
                : "Write your message here. When you submit, it opens an email draft addressed to "}
              {site.email}.
            </p>
            <div className="mt-6">
              <ContactForm intent={intent} />
            </div>
          </Surface>
        </div>
      </Container>
    </section>
  );
}
