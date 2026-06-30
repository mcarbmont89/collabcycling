"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { site } from "@/lib/config";
import LanguageSwitcher from "./language-switcher";

export default function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const base = `/${locale}`;

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-16">
        {/* Logo */}
        <Link href={base} className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src="/images/logo.png"
            alt="Collab Cycling"
            width={48}
            height={48}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden font-display text-base font-extrabold uppercase leading-[0.95] tracking-tight sm:inline">
            Collab
            <br />
            Cycling
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href={`${base}/training-camps`}
            className="font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-kom"
          >
            {dict.nav.trainingCamps}
          </Link>

          {/* Information dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setInfoOpen(true)}
            onMouseLeave={() => setInfoOpen(false)}
          >
            <button
              type="button"
              onClick={() => setInfoOpen((v) => !v)}
              className="flex items-center gap-1 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-kom"
              aria-expanded={infoOpen}
            >
              {dict.nav.information}
              <ChevronDown className="h-3 w-3" aria-hidden />
            </button>
            {infoOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full min-w-[14rem] border border-ink/10 bg-cream pt-2 shadow-lg"
              >
                {[
                  { href: `${base}/team`, label: dict.nav.team },
                  { href: `${base}/work-with-us`, label: dict.nav.workWithUs },
                  { href: `${base}/blog`, label: dict.nav.blog },
                  { href: `${base}/faq`, label: dict.nav.faq },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:bg-cream-deep hover:text-kom"
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href={`${base}/collaborators`}
            className="font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-kom"
          >
            {dict.nav.collaborators}
          </Link>
          <a
            href={site.challenge}
            target="_blank"
            rel="noreferrer"
            className="font-display text-sm font-bold uppercase tracking-wide text-kom transition-colors hover:text-kom-deep"
          >
            {dict.nav.challenge} ↗
          </a>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher current={locale} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-ink/10 bg-cream lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {[
              { href: `${base}/training-camps`, label: dict.nav.trainingCamps },
              { href: `${base}/team`, label: dict.nav.team },
              { href: `${base}/work-with-us`, label: dict.nav.workWithUs },
              { href: `${base}/blog`, label: dict.nav.blog },
              { href: `${base}/faq`, label: dict.nav.faq },
              { href: `${base}/collaborators`, label: dict.nav.collaborators },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/10 py-3 font-sans text-xs uppercase tracking-wider2 text-ink-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.challenge}
                target="_blank"
                rel="noreferrer"
                className="block border-b border-ink/10 py-3 font-sans text-xs uppercase tracking-wider2 text-kom"
              >
                {dict.nav.challenge} ↗
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
