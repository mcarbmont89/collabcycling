"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || "/";

  function pathForLocale(target: Locale) {
    // Replace the leading /<locale> with /<target>
    const segments = pathname.split("/");
    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = target;
      return segments.join("/") || `/${target}`;
    }
    return `/${target}${pathname}`;
  }

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-wider2">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1.5 text-ink-soft/40">·</span>}
          <Link
            href={pathForLocale(l)}
            aria-current={l === current ? "page" : undefined}
            className={
              l === current
                ? "text-ink"
                : "text-ink-soft/60 transition-colors hover:text-kom"
            }
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
