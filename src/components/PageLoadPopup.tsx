import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { waLink } from "@/lib/site";

export function PageLoadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("sts_popup_seen")) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem("sts_popup_seen", "1"); } catch {}
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/50 p-4 backdrop-blur-sm sm:items-center" role="dialog" aria-modal="true">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-background shadow-elegant animate-fade-slide-in">
        <div className="bg-brand-gradient p-6 text-primary-foreground">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp">
              <MessageCircle className="h-6 w-6 text-whatsapp-foreground" />
            </div>
            <button onClick={close} aria-label="Close" className="rounded-full p-1 hover:bg-primary-foreground/10">
              <X className="h-5 w-5" />
            </button>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold">Get an Instant Quote</h3>
          <p className="mt-2 text-sm text-primary-foreground/95">
            Contact us on WhatsApp for a quote and ride booking.
          </p>
        </div>
        <div className="p-5">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp font-semibold text-whatsapp-foreground shadow-card hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp Us Now
          </a>
          <button
            onClick={close}
            className="mt-3 w-full rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

export function SideWhatsAppBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-2 rounded-r-full bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground shadow-elegant hover:brightness-110 lg:inline-flex animate-fade-slide-in"
    >
      <MessageCircle className="h-5 w-5" />
      Chat on WhatsApp
    </a>
  );
}
