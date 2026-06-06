import { createFileRoute } from "@tanstack/react-router";

// Sitemap generation was an SSR GET handler. For SPA/static hosting,
// remove the server handler. Keep a placeholder route to avoid build errors.
export const Route = createFileRoute("/sitemap.xml")({
  component: () => null,
});
