import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ComingSoon({
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="section">
      <div className="mx-auto grid max-w-4xl gap-8 text-center">
        <p className="eyebrow mx-auto">{eyebrow}</p>
        <h1 className="display-h1">{heading}</h1>
        <p className="mx-auto max-w-prose text-lg leading-relaxed text-ink-soft">
          {body}
        </p>
        {ctaLabel && ctaHref && (
          <div className="mt-6">
            <Link href={ctaHref} className="btn-primary mx-auto">
              {ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
