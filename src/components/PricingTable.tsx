import { useState } from "react";
import { pricingTabs } from "@/lib/vehicles";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export function PricingTable() {
  const [active, setActive] = useState(pricingTabs[0].id);
  const tab = pricingTabs.find((t) => t.id === active)!;

  return (
    <div>
      <div className="mb-6 text-center">
        <h3 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
          Choose Your Preferred Vehicle
        </h3>
      </div>
      <div className="-mx-4 overflow-x-auto px-4">
        <div role="tablist" className="flex min-w-max gap-2 pb-2">
          {pricingTabs.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.id)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-bold transition-all",
                  isActive
                    ? "border-brand bg-brand text-primary-foreground shadow-card"
                    : "border-border bg-card text-foreground hover:border-brand/40",
                )}
              >
                {t.label}
                {t.badge && (
                  <span className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-bold",
                    isActive ? "bg-gold text-gold-foreground" : "bg-gold/20 text-gold-foreground",
                  )}>{t.badge}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div key={active} className="mt-6 animate-fade-slide-in">
        <div className="overflow-hidden rounded-2xl border bg-card shadow-card">
          {/* Desktop table */}
          <table className="hidden w-full md:table">
            <thead className="bg-brand text-primary-foreground">
              <tr>
                <th className="px-5 py-4 text-left text-sm font-bold">Route</th>
                <th className="px-5 py-4 text-right text-sm font-bold">Price</th>
              </tr>
            </thead>
            <tbody>
              {tab.rows.map((r, i) => (
                <tr key={r.route} className={cn("border-t", i % 2 === 1 && "bg-surface")}>
                  <td className="px-5 py-3.5 text-sm font-medium text-foreground">{r.route}</td>
                  <td className="px-5 py-3.5 text-right text-sm font-bold text-brand">SAR {r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Mobile cards */}
          <ul className="divide-y md:hidden">
            {tab.rows.map((r) => (
              <li key={r.route} className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="text-sm font-medium text-foreground">{r.route}</span>
                <span className="shrink-0 rounded-full bg-brand/10 px-3 py-1 text-sm font-bold text-brand">SAR {r.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gold/40 bg-gold/10 p-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <p className="text-sm font-semibold text-foreground">All prices are fixed with no hidden charges.</p>
          </div>
          <WhatsAppButton message={`Hello, I'd like to book a ${tab.label}. Please share details.`}>
            Book Now
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
