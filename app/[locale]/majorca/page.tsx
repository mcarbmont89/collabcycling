import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { climbsMallorca } from "@/lib/config";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return { title: dict.majorca.pageTitle };
}

export default function MajorcaPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[440px] w-full overflow-hidden">
        <Image
          src="/images/mallorca/hero.jpg"
          alt="Serra de Tramuntana, Mallorca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16">
          <p className="eyebrow text-cream/70">{dict.majorca.pageEyebrow}</p>
          <h1 className="display-h1 mt-4 max-w-3xl text-cream">{dict.majorca.heading}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow">Mallorca</p>
          <p className="max-w-prose text-lg leading-relaxed text-ink-soft">
            {dict.majorca.intro}
          </p>
        </div>
      </section>

      {/* Climbs */}
      <section className="section bg-cream-deep">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">Serra de Tramuntana</p>
              <h2 className="display-h2 mt-6">{dict.majorca.climbsTitle}</h2>
            </div>
            <p className="max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              {dict.majorca.climbsBody}
            </p>
          </div>

          <ul className="mt-14 grid gap-0 border-t border-ink/15 sm:grid-cols-3">
            {climbsMallorca.map((c, i) => (
              <li
                key={c.name}
                className="border-b border-ink/15 py-8 sm:border-r sm:pr-6 sm:last:border-r-0"
              >
                <p className="climb-data">N° {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-2xl">{c.name}</h3>
                <dl className="mt-5 grid grid-cols-3 gap-x-2">
                  <div>
                    <dt className="climb-data">Alt.</dt>
                    <dd className="font-display text-xl tabular-nums">
                      {c.altitude}<span className="text-sm text-ink-soft">m</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="climb-data">Long.</dt>
                    <dd className="font-display text-xl tabular-nums">
                      {c.length}<span className="text-sm text-ink-soft">km</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="climb-data">Grad.</dt>
                    <dd className="font-display text-xl tabular-nums">
                      {c.gradient}<span className="text-sm text-ink-soft">%</span>
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-h2">{dict.common.book}.</h2>
          <Link href={`${base}/work-with-us`} className="btn-primary mt-10">
            {dict.common.book}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
