import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Hotel, MapPin, Car, ShieldCheck, Clock, UserCheck, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { VehicleCard } from "@/components/VehicleCard";
import { PricingTable } from "@/components/PricingTable";
import { FAQ } from "@/components/FAQ";
import { vehicles, faqs } from "@/lib/vehicles";
import makkahHero from "@/assets/makkah-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saudia Transportation — Trusted Taxi for Pilgrims" },
      { name: "description", content: "Reliable taxi service across Saudi Arabia. Umrah, airport, hotel & Ziyarat transport. Professional drivers. Fixed pricing. Book on WhatsApp." },
      { property: "og:title", content: "Saudia Transportation — Trusted Taxi in Saudi Arabia" },
      { property: "og:description", content: "Premium taxi service for Umrah pilgrims, tourists, and residents. 24/7 booking on WhatsApp." },
    ],
    links: [
      { rel: "preload", as: "image", href: makkahHero, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Saudia Transportation",
          description: "Premium taxi and private transfer service across Saudi Arabia for Umrah pilgrims, tourists, and residents. Airport, hotel, Ziyarat, and intercity transport with professional English-speaking drivers.",
          provider: { "@id": "https://gulf-transport-hub.lovable.app/#organization" },
          areaServed: { "@type": "Country", name: "Saudi Arabia" },
          serviceType: ["Airport transfer", "Umrah transport", "Hotel transfer", "Ziyarat tour", "Intercity taxi"],
          url: "https://gulf-transport-hub.lovable.app",
        }),
      },
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
  component: HomePage,
});



function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-5 pt-8 pb-14 sm:px-4 lg:pt-10 lg:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="animate-fade-slide-in text-center sm:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-bold text-gold-foreground">
                <Sparkles className="h-3.5 w-3.5" /> Premium Taxi Service in Saudi Arabia
              </div>
              <h1 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-balance text-foreground sm:mt-5 sm:text-5xl sm:leading-[1.15] sm:tracking-normal lg:text-6xl">
                Welcome to <span className="text-brand">Saudia Transportation</span>
              </h1>
              <p className="mx-auto mt-3 max-w-[26rem] font-display text-[17px] font-semibold leading-snug text-balance text-foreground sm:mx-0 sm:mt-4 sm:max-w-none sm:text-xl sm:leading-normal">
                Trusted Taxi Service for Pilgrims, Tourists & Locals in Saudi Arabia
              </p>
              <p className="mx-auto mt-4 max-w-[28rem] text-balance text-[15px] leading-[1.65] text-foreground/80 sm:mx-0 sm:max-w-xl sm:text-base sm:leading-relaxed">
                We provide reliable and affordable transportation across Saudi Arabia. Whether you're traveling for Umrah, visiting as a tourist, or moving around as a resident, our service is designed for comfort and convenience. With professional drivers and well-maintained vehicles, every journey is safe, smooth, and on time.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8 sm:justify-start">
                <WhatsAppButton size="lg">Book via WhatsApp</WhatsAppButton>
                <Link
                  to="/contact"
                  hash="quote-form"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-gold bg-background px-7 text-sm font-bold text-gold-foreground shadow-card transition-all hover:bg-gold hover:text-gold-foreground"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <ul className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-semibold sm:mt-8 sm:gap-x-6 sm:justify-start">
                {[
                  { icon: ShieldCheck, label: "Safe Rides" },
                  { icon: Clock, label: "24/7 Service" },
                  { icon: UserCheck, label: "Professional Drivers" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-2 text-foreground">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-gold/30 shadow-elegant">
                <img
                  src={makkahHero}
                  alt="Makkah skyline at sunset with the Clock Tower and Kaaba"
                  width={1200}
                  height={900}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/3] h-full w-full object-cover lg:aspect-[5/4]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Services" title="Comprehensive Transport Across Saudi Arabia" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Car, title: "Umrah Transport", desc: "Dedicated transport for pilgrims to Makkah & Madinah." },
              { icon: Plane, title: "Airport Transfers", desc: "On-time pickups and drops at all major airports." },
              { icon: Hotel, title: "Hotel Transfers", desc: "Smooth transfers between hotels in holy cities." },
              { icon: MapPin, title: "Ziyarat Tours", desc: "Guided Ziyarat tours with experienced drivers." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-elegant">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-primary-foreground shadow-card transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Why Choose Us" title="Travel With Confidence, Every Single Time" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "24/7 Availability", desc: "Book anytime, day or night. We're always ready to drive you." },
              { icon: UserCheck, title: "Professional Drivers", desc: "Licensed, experienced and respectful drivers familiar with pilgrim routes." },
              { icon: Car, title: "Clean & Comfortable Vehicles", desc: "Modern, well-maintained vehicles with AC, ample luggage space." },
              { icon: ShieldCheck, title: "Affordable & Transparent", desc: "Fixed prices with no hidden charges. Pay exactly what's quoted." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border-2 border-transparent bg-surface p-6 transition-all hover:border-gold/40 hover:bg-card hover:shadow-card">
                <Icon className="h-8 w-8 text-brand" />
                <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED VEHICLES */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Fleet" title="Choose Your Perfect Ride" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => <VehicleCard key={v.slug} v={v} />)}
          </div>
        </div>
      </section>

      {/* FULL PRICING TABLE */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Pricing" title="Fixed, Transparent Fares" />
          <div className="mt-10">
            <PricingTable />
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-3xl bg-brand-gradient p-8 text-primary-foreground shadow-elegant sm:p-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">
                  Fixed Pricing
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Transparent rates across every route in Saudi Arabia</h2>
                <p className="mt-3 max-w-xl text-primary-foreground/85">
                  From Jeddah Airport to Makkah, Madinah Ziyarat tours, and intercity routes — every fare is fixed. No hidden charges, ever.
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {["Fixed routes & per-hour rates", "All vehicle types covered", "Same fare day or night"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> {t}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link to="/pricing" className="inline-flex h-12 items-center justify-center rounded-full bg-background px-7 text-sm font-bold text-foreground shadow-card hover:bg-gold hover:text-gold-foreground">
                  See Full Pricing
                </Link>
                <WhatsAppButton size="lg" className="!bg-gold !text-gold-foreground">Book on WhatsApp</WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10"><FAQ /></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-dark py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Ready to book your ride?</h2>
          <p className="mt-3 text-primary-foreground/85">
            Get an instant quote on WhatsApp. Our team is ready 24/7 to plan your trip.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <WhatsAppButton size="lg">WhatsApp Us Now</WhatsAppButton>
            <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-gold px-7 text-sm font-bold text-gold hover:bg-gold hover:text-gold-foreground">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title, align = "center" }: { eyebrow: string; title: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl font-extrabold text-balance sm:text-4xl">{title}</h2>
    </div>
  );
}
