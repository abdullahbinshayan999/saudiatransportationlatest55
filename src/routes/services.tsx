import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Car, Plane, Hotel, MapPin, Users } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageHeader } from "./book";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const services = [
  { icon: Car, title: "Umrah Transport", desc: "Comfortable, dedicated transport for Umrah pilgrims between airports, hotels and the holy cities. Drivers experienced in pilgrim needs." },
  { icon: Plane, title: "Airport Transfers", desc: "Punctual pickups and drops at Jeddah, Madinah, Riyadh and Dammam airports. Flight tracking included." },
  { icon: Hotel, title: "Hotel Transfers", desc: "Smooth transfers between hotels in Makkah, Madinah and Jeddah with luggage assistance." },
  { icon: MapPin, title: "Ziyarat Tours", desc: "Guided Ziyarat tours in Makkah, Madinah, Wadi-e-Jin and Taif with knowledgeable drivers." },
  { icon: Users, title: "Private Family Transport", desc: "Spacious vehicles for families and groups — Hiace, Coaster and luxury SUVs available." },
];

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Saudia Transportation</title>
        <meta
          name="description"
          content="Explore reliable transportation services across Saudi Arabia including Umrah taxi, Makkah & Madinah transfers, airport & hotel pickups, Ziyarat tours, and private rides."
        />
        <link rel="canonical" href="https://saudiatransportation.com/services" />
        <meta property="og:title" content="Our Services | Saudia Transportation" />
        <meta
          property="og:description"
          content="Explore reliable transportation services across Saudi Arabia including Umrah taxi, Makkah & Madinah transfers, airport & hotel pickups, Ziyarat tours, and private rides."
        />
        <meta property="og:url" content="https://saudiatransportation.com/services" />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageHeader
        eyebrow="Our Services"
        title="Premium transport for every journey"
        subtitle="From spiritual journeys to family trips, our service is built around your comfort and reliability."
      />
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="flex flex-col rounded-2xl border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-primary-foreground shadow-card">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/80">{desc}</p>
                <div className="mt-5">
                  <WhatsAppButton message={`Hello, I'm interested in your ${title} service. Please share details.`} className="w-full">
                    Book on WhatsApp
                  </WhatsAppButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
