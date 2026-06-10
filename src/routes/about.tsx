import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Heart, UserCheck, Sparkles } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageHeader } from "./book";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const pillars = [
  { icon: Heart, title: "Pilgrim-First Mindset", desc: "Most of our riders are Umrah pilgrims. Every detail of our service is shaped around their comfort and faith." },
  { icon: UserCheck, title: "Professional Drivers", desc: "Licensed, courteous, and deeply familiar with the routes between Makkah, Madinah, Jeddah and beyond." },
  { icon: ShieldCheck, title: "Safe & Reliable", desc: "Modern, well-maintained vehicles. On-time pickups. Transparent pricing. No surprises." },
  { icon: Sparkles, title: "Customer-First Approach", desc: "We treat every guest like family. Quick replies, clear communication, and dedicated support throughout your trip." },
];

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Saudia Transportation</title>
        <meta
          name="description"
          content="Learn about Saudia Transportation, providing safe, reliable, and comfortable Umrah taxi services, airport transfers, and private transport across Saudi Arabia."
        />
        <link rel="canonical" href="https://saudiatransportation.com/about" />
        <meta property="og:title" content="About Us | Saudia Transportation" />
        <meta
          property="og:description"
          content="Learn about Saudia Transportation, providing safe, reliable, and comfortable Umrah taxi services, airport transfers, and private transport across Saudi Arabia."
        />
        <meta property="og:url" content="https://saudiatransportation.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageHeader
        eyebrow="About Us"
        title="Trusted transport, built around the people who travel with us"
        subtitle="Saudia Transportation is dedicated to making every ride safe, comfortable, and dignified — especially for those visiting the holy cities."
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80"
              alt="Madinah at dusk"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Who we are</h2>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Saudia Transportation is a premium transportation provider operating across Saudi Arabia. We specialize in serving Umrah pilgrims, international tourists, and local residents — providing a seamless travel experience with carefully chosen vehicles and experienced drivers.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              From the moment you land in Jeddah or Madinah to your final drop at the airport, our team is committed to making your journey calm, on-time, and safe. We believe transport for pilgrims deserves more than a regular taxi — it deserves care.
            </p>
            <div className="mt-6"><WhatsAppButton>Talk to Our Team</WhatsAppButton></div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">What we stand for</h2>
            <p className="mt-3 text-foreground/80">The pillars that guide every booking, every ride, every day.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-2xl border bg-card p-6 shadow-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
