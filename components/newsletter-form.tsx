"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/config";
import type { Dictionary } from "@/lib/dictionary";

export default function NewsletterForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") || "");
    const subject = encodeURIComponent("Newsletter subscription");
    const body = encodeURIComponent(`Please add this email to the newsletter list:\n${email}`);
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <label className="eyebrow text-cream/70" htmlFor="newsletter-email">
        {dict.footer.newsletter}
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder={dict.footer.emailPlaceholder}
        className="w-full rounded-full border border-cream/20 bg-cream/5 px-5 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-kom"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-kom px-7 py-3 font-display text-sm font-semibold text-cream transition-colors hover:bg-kom-deep"
      >
        {dict.common.submit}
        <ArrowRight className="h-4 w-4" />
      </button>
      {status === "sent" && (
        <p className="text-xs text-cream/60">{dict.newsletter.success}</p>
      )}
    </form>
  );
}
