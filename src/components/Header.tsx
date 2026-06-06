import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Phone, Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/book", label: "Book A Taxi" },
  { to: "/services", label: "Our Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top utility bar */}
      <div className="bg-brand-dark text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-gold">
            <Phone className="h-3.5 w-3.5" /> {site.phone}
          </a>
          <a href={site.emailHref} className="inline-flex items-center gap-2 hover:text-gold">
            <Mail className="h-3.5 w-3.5" /> {site.email}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "border-b transition-all",
          scrolled ? "bg-background/95 backdrop-blur shadow-card" : "bg-background",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          {/* Logo placeholder */}
          <Link to="/" className="flex items-center gap-2" aria-label={site.name}>
            <img
              src={logo}
              alt="Saudia Transportation"
              className="h-12 w-auto sm:h-14"
              loading="eager"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary [&[data-status=active]]:bg-brand [&[data-status=active]]:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <WhatsAppButton size="sm" className="hidden sm:inline-flex">WhatsApp Us</WhatsAppButton>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-semibold transition-colors hover:bg-secondary [&[data-status=active]]:text-brand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
