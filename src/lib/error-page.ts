// Dependency-free HTML fallback for catastrophic SSR failures.
// Must not import any app modules — if those modules are what failed,
// this page still needs to render.
export function renderErrorPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Saudia Transportation</title>
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background: #f8fafc;
        color: #0f172a;
        padding: 24px;
      }
      .card {
        max-width: 480px;
        width: 100%;
        background: #ffffff;
        border-radius: 16px;
        padding: 32px;
        text-align: center;
        box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
      }
      h1 { margin: 0 0 8px; font-size: 22px; color: #0a4d3c; }
      p  { margin: 0 0 20px; font-size: 14px; line-height: 1.6; color: #475569; }
      .row { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
      a, button {
        display: inline-flex; align-items: center; justify-content: center;
        height: 40px; padding: 0 18px; border-radius: 999px;
        font-size: 14px; font-weight: 600; text-decoration: none; cursor: pointer;
        border: 1px solid transparent;
      }
      .primary { background: #0a4d3c; color: #ffffff; }
      .secondary { background: #ffffff; color: #0f172a; border-color: #e2e8f0; }
    </style>
  </head>
  <body>
    <main class="card">
      <h1>We'll be right back</h1>
      <p>The site is temporarily unavailable. Please try again in a moment, or contact us directly on WhatsApp.</p>
      <div class="row">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </main>
  </body>
</html>`;
}
