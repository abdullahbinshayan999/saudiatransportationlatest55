import { StrictMode, startTransition } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

startTransition(() => {
  const app = (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );

  if (document.body.hasChildNodes() && document.body.firstElementChild?.id !== "root") {
    hydrateRoot(document, app);
    return;
  }

  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(app);
  }
});