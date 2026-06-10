import { Outlet, Link, createRootRoute, useRouter } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
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
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: RootErrorComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Helmet>
        <title>Saudia Transportation | Premium Umrah Taxi Service in Saudi Arabia</title>
        <meta name="description" content="Book reliable Umrah taxi services in Saudi Arabia. Premium Makkah, Madinah, Jeddah airport and hotel transfers, Ziyarat tours, and private rides with fixed pricing." />
        <link rel="canonical" href="https://saudiatransportation.com/" />

        <meta property="og:title" content="Saudia Transportation | Premium Umrah Taxi Service in Saudi Arabia" />
        <meta property="og:description" content="Book reliable Umrah taxi services in Saudi Arabia. Premium Makkah, Madinah, Jeddah airport and hotel transfers, Ziyarat tours, and private rides with fixed pricing." />
        <meta property="og:url" content="https://saudiatransportation.com/" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Saudia Transportation",
          "url": "https://saudiatransportation.com"
        }`}</script>
      </Helmet>
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
