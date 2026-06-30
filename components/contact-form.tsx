"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/config";
import type { Dictionary } from "@/lib/dictionary";

export default function ContactForm({
  dict,
  subjectPrefix = "Site contact",
}: {
  dict: Dictionary;
  subjectPrefix?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    setStatus("sending");
    const subject = encodeURIComponent(`${subjectPrefix} — ${name || email}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-1.5">
        <label htmlFor="name" className="eyebrow">
          {dict.workWithUs.formName}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="border-b border-ink/30 bg-transparent py-2.5 text-base text-ink outline-none focus:border-kom"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="email" className="eyebrow">
          {dict.workWithUs.formEmail}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="border-b border-ink/30 bg-transparent py-2.5 text-base text-ink outline-none focus:border-kom"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="message" className="eyebrow">
          {dict.workWithUs.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-y border-b border-ink/30 bg-transparent py-2.5 text-base text-ink outline-none focus:border-kom"
        />
      </div>
      <div className="pt-2">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {dict.common.send}
          <Send className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </form>
  );
}
