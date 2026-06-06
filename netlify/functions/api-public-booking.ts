import { Handler } from "@netlify/functions";
import { z } from "zod";

const schema = z.object({
  pickup: z.string().min(1).max(100),
  drop: z.string().min(1).max(100),
  date: z.string().min(1).max(20),
  time: z.string().min(1).max(20),
  passengers: z.string().min(1).max(20),
  vehicle: z.string().min(1).max(100),
  name: z.string().trim().min(2).max(80),
  whatsapp: z.string().trim().min(6).max(30),
  email: z.string().trim().max(120).email().optional().or(z.literal("")),
  notes: z.string().trim().max(600).optional().or(z.literal("")),
});

const TO = "info.saudiatransportation@gmail.com";
const FROM = "Saudia Transportation <onboarding@resend.dev>";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ ok: false, error: "Method not allowed" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: "Invalid input", issues: parsed.error.issues }) };
    }
    const d = parsed.data;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      return { statusCode: 500, body: JSON.stringify({ ok: false, error: "Email service not configured" }) };
    }

    const rows: [string, string][] = [
      ["Name", d.name],
      ["Phone / WhatsApp", d.whatsapp],
      ["Email", d.email || "—"],
      ["Pickup", d.pickup],
      ["Drop-off", d.drop],
      ["Date", d.date],
      ["Time", d.time],
      ["Passengers", d.passengers],
      ["Vehicle", d.vehicle],
      ["Notes", d.notes || "—"],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#ffffff;">
        <h2 style="color:#0a4d3c;margin:0 0 16px;">New Booking Request</h2>
        <p style="color:#555;margin:0 0 20px;font-size:14px;">A new booking request was submitted from saudiatransportation.com.</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${rows
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:bold;width:38%;">${escapeHtml(k)}</td>
              <td style="padding:10px 12px;border:1px solid #e5e7eb;">${escapeHtml(v)}</td>
            </tr>`,
            )
            .join("")}
        </table>
        <p style="color:#888;margin:24px 0 0;font-size:12px;">Please contact the customer as soon as possible.</p>
      </div>`;

    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: d.email || undefined,
        subject: `New Booking Request — ${d.name} (${d.pickup} → ${d.drop})`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", res.status, errText);
      return { statusCode: 502, body: JSON.stringify({ ok: false, error: "Failed to send email" }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Booking handler error:", err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: "Server error" }) };
  }
};
