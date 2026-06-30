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
    <form onSubmit={handleSubmit} className="grid gap-3" noValidate>
      <label className="eyebrow text-cream/70" htmlFor="newsletter-email">
        {dict.footer.newsletter}
      </label>
      <div className="flex items-center gap-3 border-b border-cream/30 pb-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder={dict.footer.emailPlaceholder}
          className="flex-1 bg-transparent text-sm text-cream outline-none placeholder:text-cream/40"
        />
        <button
          type="submit"
          aria-label={dict.common.submit}
          className="text-cream/70 transition-colors hover:text-cream"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {status === "sent" && (
        <p className="text-xs text-cream/60">{dict.newsletter.success}</p>
      )}
    </form>
  );
}
