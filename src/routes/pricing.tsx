import { createFileRoute } from "@tanstack/react-router";
import { PricingTable } from "@/components/PricingTable";
import { FAQ } from "@/components/FAQ";
import { faqs } from "@/lib/vehicles";
import { PageHeader } from "./book";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Saudia Transportation" },
      { name: "description", content: "Fixed taxi prices across Saudi Arabia for all vehicle types and routes. Transparent — no hidden charges." },
      { property: "og:title", content: "Saudia Transportation Pricing List" },
      { property: "og:description", content: "View fixed prices for all routes and vehicles. No hidden charges." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Saudia Transportation Pricing List"
        subtitle="Select your vehicle to view complete pricing for all routes — fixed and transparent."
      />
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4"><PricingTable /></div>
      </section>
      <section className="bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Pricing FAQ</h2>
            <p className="mt-2 text-foreground/80">Quick answers about how our pricing works.</p>
          </div>
          <div className="mt-10"><FAQ /></div>
        </div>
      </section>
    </>
  );
}
