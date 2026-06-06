## Root cause found

The published site is loading an old static SPA shell from `index.html` instead of the TanStack Start app shell. That HTML contains:

```html
<script type="module" src="/src/main.jsx"></script>
```

But this TanStack Start project does not have `src/main.jsx`. In production, `/src/main.jsx` returns HTML, so the browser console shows:

```text
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/html".
```

That blocks JavaScript startup and causes the blank white page. The Lovable preview currently renders, but the same stale entry-file/config mismatch can reappear on publish unless removed permanently.

## Fix plan

1. **Remove the stale SPA entry point**
   - Replace the old `index.html` SPA template with a minimal TanStack Start-safe shell so published builds cannot reference `/src/main.jsx` again.
   - Keep the app architecture as TanStack Start, not a pure Vite SPA.

2. **Lock deployment entry configuration to the correct SSR runtime**
   - Update `vite.config.ts` to explicitly use the TanStack Start server entry wrapper path.
   - Update `wrangler.jsonc` to point to the project server wrapper instead of relying directly on the framework default.
   - Preserve Cloudflare/Lovable compatibility while keeping the app deployable from the current TanStack Start structure.

3. **Add production-grade SSR failure protection**
   - Add a small server wrapper that lazy-loads the TanStack Start server entry, catches startup/runtime failures, logs the real error, and returns a readable HTML fallback instead of a blank white page.
   - Add a dependency-free error page renderer for catastrophic SSR failures.
   - Add short-lived global error capture so swallowed server-render errors still appear in logs.

4. **Improve app-level error boundaries**
   - Add a root route `errorComponent` in `src/routes/__root.tsx` so route/component errors render a branded recovery screen rather than breaking the whole app.
   - Keep the existing router-level `defaultErrorComponent` as the fallback safety net.
   - Do not modify normal design, layout, content, styling, or functionality.

5. **Verify after implementation**
   - Check preview loads without console/runtime errors.
   - Check all major routes: `/`, `/book`, `/services`, `/pricing`, `/about`, `/contact`, `/privacy-policy`, `/sitemap.xml`.
   - Check the published URL again after the fix is applied/published.
   - Confirm network requests no longer include `/src/main.jsx` and scripts load as JavaScript.

## Files expected to change

- `index.html`
- `vite.config.ts`
- `wrangler.jsonc`
- `src/server.ts` new
- `src/lib/error-page.ts` new
- `src/lib/error-capture.ts` new
- `src/routes/__root.tsx`

No page content, booking flow, visual design, or route structure will be changed unless required to restore loading stability.