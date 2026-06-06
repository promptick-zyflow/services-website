"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Primitives";

type Status = "idle" | "submitting" | "success" | "error";

const interests = [
  "Loan broker agent",
  "Project management agent",
  "Product manager agent",
  "Content agents",
  "Not sure yet",
];

export function LeadForm({ defaultInterest }: { defaultInterest?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot
    if (data.company_website) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-10 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-citron/15">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
            <path
              d="M5 11.5l4 4L17 7"
              stroke="var(--color-citron)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold">
          Request received.
        </h3>
        <p className="mt-3 text-sm text-muted">
          We&rsquo;ll be in touch within one business day to set up your scoping
          workshop.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-7 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Alex Morgan" />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          placeholder="alex@company.com"
        />
        <Field label="Company" name="company" placeholder="Acme Ltd" />
        <div className="flex flex-col gap-2">
          <label htmlFor="interest" className="text-sm text-muted">
            Interested in
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue={defaultInterest ?? interests[interests.length - 1]}
            className="h-11 rounded-lg border border-line bg-ink/60 px-3 text-sm text-bone outline-none transition-colors focus:border-citron/50"
          >
            {interests.map((o) => (
              <option key={o} value={o} className="bg-ink">
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-muted">
          What workflow would you point an agent at?{" "}
          <span className="text-faint">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="e.g. We spend hours preparing lender submissions…"
          className="rounded-lg border border-line bg-ink/60 p-3 text-sm text-bone outline-none transition-colors placeholder:text-faint focus:border-citron/50"
        />
      </div>

      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {status === "error" && (
        <p className="mt-4 text-sm text-spark">{error}</p>
      )}

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="primary"
          disabled={status === "submitting"}
          className="w-full sm:w-auto disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request a demo"}
        </Button>
        <p className="text-xs text-faint">
          No spam. We reply within one business day.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm text-muted">
        {label}
        {required && <span className="text-citron"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-lg border border-line bg-ink/60 px-3 text-sm text-bone outline-none transition-colors placeholder:text-faint focus:border-citron/50"
      />
    </div>
  );
}
