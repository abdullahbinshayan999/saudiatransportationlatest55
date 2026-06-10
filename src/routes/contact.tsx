import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { site } from "@/lib/site";
import { toast } from "sonner";
import { PageHeader } from "./book";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get Your Ride Quote — Saudia Transportation" },
      { name: "description", content: "Book your taxi in Saudi Arabia in seconds. Pickup, drop-off, vehicle type — get instant pricing & confirmation on WhatsApp." },
      { property: "og:title", content: "Get Your Ride Quote — Saudia Transportation" },
      { property: "og:description", content: "Instant taxi quote on WhatsApp. Fixed pricing, professional drivers, 24/7 service." },
    ],
  }),
  component: ContactPage,
});

const LOCATIONS = [
  "Madina Airport",
  "Madina Hotel",
  "Makkah Hotel",
  "Jeddah Airport",
  "Jeddah Hotel",
  "Train Station (Makkah)",
  "Train Station (Madinah)",
  "Riyadh",
  "Dammam",
  "Taif",
  "AlUla",
] as const;

const PASSENGERS = ["1–3", "4–6", "7–10", "11–15", "15+"] as const;

const VEHICLES = [
  "4 Seater (Camry / Sonata)",
  "7 Seater (Staria)",
  "11 Seater (Hiace)",
  "7 Seater (GMC / Chevrolet)",
  "18 Seater (Coaster)",
] as const;

const schema = z
  .object({
    pickup: z.string().min(1, "Please select pickup"),
    drop: z.string().min(1, "Please select drop-off"),
    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),
    passengers: z.string().min(1, "Required"),
    vehicle: z.string().min(1, "Please select a vehicle"),
    name: z.string().trim().min(2, "Please enter your name").max(80),
    whatsapp: z
      .string()
      .trim()
      .regex(/^\+?\d[\d\s-]{7,20}$/, "Enter a valid WhatsApp number"),
    email: z
      .string()
      .trim()
      .max(120)
      .optional()
      .refine((v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Enter a valid email"),
    notes: z.string().trim().max(600).optional(),
  })
  .refine((d) => d.pickup !== d.drop, {
    message: "Pickup and drop-off cannot be the same",
    path: ["drop"],
  });

type Form = z.infer<typeof schema>;

const initial: Form = {
  pickup: "",
  drop: "",
  date: "",
  time: "",
  passengers: "",
  vehicle: "",
  name: "",
  whatsapp: "",
  email: "",
  notes: "",
};

function ContactPage() {
  const [form, setForm] = useState<Form>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "quote-form" || location.hash === "#quote-form") {
      const el = document.getElementById("quote-form");
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      }
    }
  }, [location.hash]);

  const update =
    (k: keyof Form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Partial<Record<keyof Form, string>> = {};
      r.error.issues.forEach((i) => {
        errs[i.path[0] as keyof Form] = i.message;
      });
      setErrors(errs);
      const firstKey = r.error.issues[0]?.path[0] as string | undefined;
      if (firstKey) {
        document.querySelector<HTMLElement>(`[data-field="${firstKey}"]`)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
      toast.error("Please fix the highlighted fields and try again.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("/api/public/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(r.data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        console.error("Booking submission failed:", res.status, json);
        throw new Error(json.error || `Submission failed (${res.status})`);
      }
      setSubmitted(true);
      setForm(initial);
      toast.success("Booking request submitted successfully!");
      setTimeout(() => {
        document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } catch (err) {
      console.error("Booking error:", err);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };


  const inputCls =
    "h-11 w-full rounded-xl border-2 border-border bg-background px-4 text-sm font-medium text-foreground outline-none transition-colors focus:border-brand";
  const labelCls = "mb-1.5 block text-sm font-bold text-foreground";
  const errCls = "mt-1 block text-xs font-semibold text-destructive";
  const today = new Date().toISOString().split("T")[0];

  const StepHeader = ({ n, title }: { n: number; title: string }) => (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-primary-foreground">
        {n}
      </span>
      <h3 className="font-display text-lg font-extrabold">{title}</h3>
      <div className="ml-2 h-px flex-1 bg-border" />
    </div>
  );

  return (
    <>
      <PageHeader
        eyebrow="Get Your Ride Quote"
        title="Book Your Ride in Seconds"
        subtitle="Fill in your trip details and our team will contact you shortly"
      />

      <section id="quote-form" className="py-14 sm:py-20 scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-extrabold">Get in touch</h2>
            <p className="mt-2 text-sm text-foreground/80">
              Reach us through any channel below — WhatsApp recommended for fastest reply.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="rounded-2xl border bg-card p-5 shadow-card">
                <a href={site.phoneHref} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground/70">
                      Phone
                    </div>
                    <div className="font-display text-lg font-bold">{site.phone}</div>
                  </div>
                </a>
              </li>
              <li className="rounded-2xl border bg-card p-5 shadow-card">
                <a href={site.emailHref} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground/70">
                      Email
                    </div>
                    <div className="font-display text-base font-bold break-all">{site.email}</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border bg-card p-6 shadow-elegant sm:p-8"
            >
              <div>
                <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                  Get Your Ride Quote
                </h2>
                <p className="mt-1 text-sm text-foreground/80">
                  Fill in your trip details and our team will email you back shortly.
                </p>
              </div>

              {/* Step 1 */}
              <div className="mt-7">
                <StepHeader n={1} title="Trip Details" />
                <p className="-mt-2 mb-4 text-xs font-semibold text-brand">
                  Select your route to get exact pricing
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block" data-field="pickup">
                    <span className={labelCls}>
                      Pickup Location <span className="text-destructive">*</span>
                    </span>
                    <select value={form.pickup} onChange={update("pickup")} className={inputCls}>
                      <option value="">Select pickup…</option>
                      {LOCATIONS.map((l) => (
                        <option key={l} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                    {errors.pickup && <span className={errCls}>{errors.pickup}</span>}
                  </label>

                  <label className="block" data-field="drop">
                    <span className={labelCls}>
                      Drop-off Location <span className="text-destructive">*</span>
                    </span>
                    <select value={form.drop} onChange={update("drop")} className={inputCls}>
                      <option value="">Select drop-off…</option>
                      {LOCATIONS.map((l) => (
                        <option key={l} value={l} disabled={l === form.pickup}>
                          {l}
                        </option>
                      ))}
                    </select>
                    {errors.drop && <span className={errCls}>{errors.drop}</span>}
                  </label>

                  <label className="block" data-field="date">
                    <span className={labelCls}>
                      Date <span className="text-destructive">*</span>
                    </span>
                    <input
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={update("date")}
                      className={inputCls}
                    />
                    {errors.date && <span className={errCls}>{errors.date}</span>}
                  </label>

                  <label className="block" data-field="time">
                    <span className={labelCls}>
                      Pickup Time <span className="text-destructive">*</span>
                    </span>
                    <input
                      type="time"
                      value={form.time}
                      onChange={update("time")}
                      className={inputCls}
                    />
                    {errors.time && <span className={errCls}>{errors.time}</span>}
                  </label>

                  <label className="block" data-field="passengers">
                    <span className={labelCls}>
                      Passengers <span className="text-destructive">*</span>
                    </span>
                    <select
                      value={form.passengers}
                      onChange={update("passengers")}
                      className={inputCls}
                    >
                      <option value="">Select passengers…</option>
                      {PASSENGERS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    {errors.passengers && <span className={errCls}>{errors.passengers}</span>}
                  </label>

                  <label className="block" data-field="vehicle">
                    <span className={labelCls}>
                      Vehicle Type <span className="text-destructive">*</span>
                    </span>
                    <select
                      value={form.vehicle}
                      onChange={update("vehicle")}
                      className={inputCls}
                    >
                      <option value="">Select vehicle…</option>
                      {VEHICLES.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                    {errors.vehicle && <span className={errCls}>{errors.vehicle}</span>}
                  </label>
                </div>
              </div>

              {/* Step 2 */}
              <div className="mt-8">
                <StepHeader n={2} title="Contact Details" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block" data-field="name">
                    <span className={labelCls}>
                      Full Name <span className="text-destructive">*</span>
                    </span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your full name"
                      className={inputCls}
                    />
                    {errors.name && <span className={errCls}>{errors.name}</span>}
                  </label>

                  <label className="block" data-field="whatsapp">
                    <span className={labelCls}>
                      WhatsApp Number <span className="text-destructive">*</span>
                    </span>
                    <input
                      type="tel"
                      value={form.whatsapp}
                      onChange={update("whatsapp")}
                      placeholder="+1 (872) 322-8435"
                      className={inputCls}
                    />
                    {errors.whatsapp && <span className={errCls}>{errors.whatsapp}</span>}
                  </label>

                  <label className="block sm:col-span-2" data-field="email">
                    <span className={labelCls}>Email (optional)</span>
                    <input
                      type="email"
                      value={form.email ?? ""}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      className={inputCls}
                    />
                    {errors.email && <span className={errCls}>{errors.email}</span>}
                  </label>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mt-8">
                <StepHeader n={3} title="Additional Info" />
                <label className="block" data-field="notes">
                  <span className={labelCls}>Special Requests (optional)</span>
                  <textarea
                    rows={4}
                    value={form.notes ?? ""}
                    onChange={update("notes")}
                    placeholder="Flight number, hotel name, extra luggage, child seats, etc."
                    className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-sm font-medium text-foreground outline-none transition-colors focus:border-brand"
                  />
                  {errors.notes && <span className={errCls}>{errors.notes}</span>}
                </label>
              </div>

              {/* Success message */}
              {submitted && (
                <div className="mt-6 rounded-2xl border-2 border-brand bg-brand/10 p-4 text-sm font-semibold text-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                    <span>
                      Thank you! Your booking request has been submitted successfully. Our team will contact you shortly.
                    </span>
                  </div>
                </div>
              )}

              {/* CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-bold text-primary-foreground shadow-elegant transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:h-14 sm:text-base"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Submitting…
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Submit Booking Request
                  </>
                )}
              </button>

              {/* Trust strip */}
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-bold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  Fixed Pricing – No Hidden Charges
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-bold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  Professional Drivers
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
