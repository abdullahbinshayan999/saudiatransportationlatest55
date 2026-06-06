import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex items-center justify-center rounded-xl bg-white/95 p-3 shadow-card">
            <img src={logo} alt="Saudia Transportation" className="h-16 w-auto" loading="lazy" />
          </div>
          <p className="mt-4 text-sm text-primary-foreground/95 leading-relaxed">
            {site.tagline}. Trusted taxi service for Umrah pilgrims, tourists, and locals across Saudi Arabia.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-bold text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/", "Home"], ["/book", "Book A Taxi"], ["/services", "Our Services"],
              ["/pricing", "Pricing"], ["/about", "About Us"], ["/contact", "Contact Us"],
              ["/privacy-policy", "Privacy Policy"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to as string} className="text-primary-foreground/95 hover:text-gold">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-bold text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/95">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /><a href={site.phoneHref}>{site.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /><a href={site.emailHref}>{site.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /><span>Saudi Arabia</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-bold text-gold">Book Instantly</h4>
          <p className="mt-4 text-sm text-primary-foreground/95">
            Get a quote in seconds. Tap below to chat on WhatsApp.
          </p>
          <WhatsAppButton className="mt-4">WhatsApp Us Now</WhatsAppButton>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/95 sm:flex-row">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
