import { Users, Briefcase, Snowflake } from "lucide-react";
import { Vehicle } from "@/lib/vehicles";
import { WhatsAppButton } from "./WhatsAppButton";

export function VehicleCard({ v }: { v: Vehicle }) {
  const message = `Hello, I'd like to book the ${v.name}. Please share details.`;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        <img
          src={v.image}
          alt={v.name}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        {/* Prominent seating badge (top-left) */}
        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-bold text-primary-foreground shadow-card">
          <Users className="h-3.5 w-3.5" /> {v.seater} Seater
        </div>
        {/* Prominent hourly rate badge (top-right) */}
        <div className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-extrabold text-gold-foreground shadow-card">
          SR {v.hourly}/Hour
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold leading-tight">{v.name}</h3>

        {/* Highlighted rate + capacity row */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl border-2 border-gold/40 bg-gold/10 px-3 py-2 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/70">Hourly Rate</div>
            <div className="font-display text-lg font-extrabold text-gold-foreground">SR {v.hourly}<span className="text-xs font-bold">/hr</span></div>
          </div>
          <div className="rounded-xl border-2 border-brand/30 bg-brand/10 px-3 py-2 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/70">Seating</div>
            <div className="font-display text-lg font-extrabold text-brand">{v.seater} Seater</div>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-foreground/80">{v.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-foreground">
          <li className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
            <Snowflake className="h-3.5 w-3.5 text-brand" /> AC / Heater
          </li>
          <li className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
            <Briefcase className="h-3.5 w-3.5 text-brand" /> {v.bags} Bags
          </li>
        </ul>
        <div className="mt-5">
          <WhatsAppButton message={message} className="w-full">Book on WhatsApp</WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
