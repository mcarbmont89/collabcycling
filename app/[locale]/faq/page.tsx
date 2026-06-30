import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import FaqAccordion from "@/components/faq-accordion";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return { title: dict.faq.pageTitle };
}

export default function FaqPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <section className="section bg-cream-deep">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">{dict.faq.pageEyebrow}</p>
          <h1 className="display-h1 mt-6 max-w-4xl">{dict.faq.heading}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {dict.faq.intro}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-4xl">
          <FaqAccordion sections={dict.faq.sections} />
        </div>
      </section>

      <section className="section bg-ink text-cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-kom">{dict.faq.contactPrompt}</p>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight sm:text-5xl">
            {dict.faq.contactPrompt}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/80 sm:text-lg">
            {dict.faq.contactBody}
          </p>
          <Link
            href={`/${locale}/work-with-us`}
            className="mt-10 inline-flex items-center gap-2 bg-kom px-7 py-3.5 font-sans text-sm uppercase tracking-wider2 text-cream transition-colors hover:bg-kom-deep"
          >
            {dict.common.send}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
