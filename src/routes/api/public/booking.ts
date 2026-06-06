import { createFileRoute } from "@tanstack/react-router";

// Booking handler converted to external serverless functions for Vercel/Netlify.
// Keep a placeholder route so the SPA build doesn't include in-repo server handlers.
export const Route = createFileRoute("/api/public/booking")({
  component: () => null,
});