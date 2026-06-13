import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max = 2000): string {
  return String(v ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot, silently accept and drop.
  if (clean(body.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: clean(body.name, 200),
    email: clean(body.email, 320),
    company: clean(body.company, 200),
    interest: clean(body.interest, 120),
    message: clean(body.message, 4000),
    receivedAt: new Date().toISOString(),
  };

  if (!lead.name) {
    return NextResponse.json({ error: "Please add your name." }, { status: 422 });
  }
  if (!EMAIL_RE.test(lead.email)) {
    return NextResponse.json(
      { error: "Please enter a valid work email." },
      { status: 422 }
    );
  }

  // Best-effort local persistence (works in dev / long-running servers;
  // serverless filesystems are ephemeral, which is fine, the webhook is canonical).
  try {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(
      path.join(dir, "leads.jsonl"),
      JSON.stringify(lead) + "\n",
      "utf8"
    );
  } catch {
    // ignore, non-fatal
  }

  // Optional: forward to a CRM / Slack / Zapier webhook if configured.
  // For the Archer CRM ingest, LEAD_WEBHOOK_SECRET is sent as x-inbound-secret
  // (must match Archer's INBOUND_LEAD_SECRET); harmless for other webhook targets.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.LEAD_WEBHOOK_SECRET) {
      headers["x-inbound-secret"] = process.env.LEAD_WEBHOOK_SECRET;
    }
    try {
      await fetch(webhook, {
        method: "POST",
        headers,
        body: JSON.stringify(lead),
      });
    } catch {
      // ignore, the lead is already captured locally
    }
  }

  return NextResponse.json({ ok: true });
}
