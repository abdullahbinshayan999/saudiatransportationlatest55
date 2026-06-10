import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { PricingTable } from "@/components/PricingTable";
import { FAQ } from "@/components/FAQ";
import { faqs } from "@/lib/vehicles";
import { PageHeader } from "./book";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing | Saudia Transportation</title>
        <meta
          name="description"
          content="View transparent taxi pricing for Umrah transport, Makkah, Madinah, airport transfers, hotel rides, and intercity transportation across Saudi Arabia."
        />
        <link rel="canonical" href="https://saudiatransportation.com/pricing" />
        <meta property="og:title" content="Pricing | Saudia Transportation" />
        <meta
          property="og:description"
          content="View transparent taxi pricing for Umrah transport, Makkah, Madinah, airport transfers, hotel rides, and intercity transportation across Saudi Arabia."
        />
        <meta property="og:url" content="https://saudiatransportation.com/pricing" />
        <meta property="og:type" content="website" />
      </Helmet>
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
