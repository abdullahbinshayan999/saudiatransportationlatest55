import { Outlet, Link, createRootRoute, useRouter } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";
import { PageLoadPopup, SideWhatsAppBar } from "@/components/PageLoadPopup";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-brand">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  // eslint-disable-next-line no-console
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-bold text-brand">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          An unexpected error occurred. Please try again, or return home.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            Try again
          </button>
          <Link to="/" className="inline-flex h-10 items-center justify-center rounded-full border-2 border-border px-5 text-sm font-semibold text-foreground hover:bg-secondary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Saudia Transportation — Trusted Taxi for Pilgrims & Tourists" },
      { name: "description", content: "Premium taxi service across Saudi Arabia for Umrah pilgrims, tourists, and locals. Airport, hotel, Ziyarat & intercity transport. Book on WhatsApp." },
      { name: "author", content: "Saudia Transportation" },
      { property: "og:title", content: "Saudia Transportation — Trusted Taxi for Pilgrims & Tourists" },
      { property: "og:description", content: "Premium taxi service across Saudi Arabia for Umrah pilgrims, tourists, and locals. Airport, hotel, Ziyarat & intercity transport. Book on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Saudia Transportation — Trusted Taxi for Pilgrims & Tourists" },
      { name: "twitter:description", content: "Premium taxi service across Saudi Arabia for Umrah pilgrims, tourists, and locals. Airport, hotel, Ziyarat & intercity transport. Book on WhatsApp." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/P0k7d6jj7RQbTykzq5Ke5TMrIYA2/social-images/social-1777708801940-Saudia_Transportation_Logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/P0k7d6jj7RQbTykzq5Ke5TMrIYA2/social-images/social-1777708801940-Saudia_Transportation_Logo.webp" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://gulf-transport-hub.lovable.app/#organization",
              name: "Saudia Transportation",
              url: "https://gulf-transport-hub.lovable.app",
              logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/P0k7d6jj7RQbTykzq5Ke5TMrIYA2/social-images/social-1777708801940-Saudia_Transportation_Logo.webp",
              areaServed: { "@type": "Country", name: "Saudi Arabia" },
              email: "info.saudiatransportation@gmail.com",
            },
            {
              "@type": "WebSite",
              "@id": "https://gulf-transport-hub.lovable.app/#website",
              url: "https://gulf-transport-hub.lovable.app",
              name: "Saudia Transportation",
              publisher: { "@id": "https://gulf-transport-hub.lovable.app/#organization" },
              inLanguage: "en",
            },
          ],
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: RootErrorComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <SideWhatsAppBar />
      <PageLoadPopup />
      <Toaster />

    </div>
  );
}
