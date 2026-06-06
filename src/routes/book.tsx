import { createFileRoute } from "@tanstack/react-router";
import { VehicleCard } from "@/components/VehicleCard";
import { PricingTable } from "@/components/PricingTable";
import { vehicles } from "@/lib/vehicles";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book A Taxi — Saudia Transportation" },
      { name: "description", content: "Choose from sedans, vans, SUVs and coasters. Fixed pricing for Umrah, airport, and Ziyarat transport. Book on WhatsApp." },
      { property: "og:title", content: "Book A Taxi — Saudia Transportation" },
      { property: "og:description", content: "Browse our fleet and view fixed-price routes. Instant booking on WhatsApp." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book A Taxi"
        title="Find the right vehicle for your journey"
        subtitle="Choose from our fleet of well-maintained sedans, vans, SUVs and coasters — all with professional drivers."
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {vehicles.map((v) => <VehicleCard key={v.slug} v={v} />)}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Hourly rates shown above. Detailed per-route pricing is available below.
          </p>
        </div>
      </section>

      <section id="pricing" className="bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
              Pricing
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Saudia Transportation Pricing List</h2>
            <p className="mt-3 text-foreground/80">Select your vehicle to view complete pricing for all routes.</p>
          </div>
          <div className="mt-10"><PricingTable /></div>
        </div>
      </section>
    </>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-brand-gradient py-14 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground">
          {eyebrow}
        </div>
        <h1 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">{subtitle}</p>}
      </div>
    </section>
  );
}
