import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { climbs } from "@/lib/config";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return { title: dict.alpsValloire.pageTitle };
}

export default function AlpsValloirePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  return (
    <>
      {/* Hero photo */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src="/images/alps/hero.png"
          alt="Valloire Galibier — Tour de France routes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16">
          <p className="eyebrow text-cream/70">{dict.alpsValloire.pageEyebrow}</p>
          <h1 className="display-h1 mt-4 max-w-3xl text-cream">{dict.alpsValloire.pageTitle}</h1>
        </div>
      </section>

      {/* Access intro */}
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="display-h3 max-w-xs">{dict.alpsValloire.heading}</h2>
          </div>
          <div>
            <p className="max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              {dict.alpsValloire.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Why Valloire — split with photo */}
      <section className="section bg-cream-deep">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/alps/why-valloire.png"
              alt="Valloire village in the French Alps"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Valloire</p>
            <h2 className="display-h2 mt-6">{dict.alpsValloire.whyTitle}</h2>
            <p className="mt-8 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              {dict.alpsValloire.whyBody}
            </p>
          </div>
        </div>
      </section>

      {/* Climb data — the legendary ascents */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">Tour de France</p>
              <h2 className="display-h2 mt-6">{dict.alpsValloire.climbsTitle}</h2>
            </div>
            <p className="max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              {dict.alpsValloire.climbsBody}
            </p>
          </div>

          <ul className="mt-14 grid gap-0 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {climbs.map((c, i) => (
              <li
                key={c.name}
                className="border-b border-ink/15 py-8 sm:border-r sm:pr-6 sm:last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
              >
                <p className="climb-data">N° {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-2xl">{c.name}</h3>
                <dl className="mt-5 grid grid-cols-3 gap-x-2 text-left">
                  <div>
                    <dt className="climb-data">Alt.</dt>
                    <dd className="font-display text-xl tabular-nums">
                      {c.altitude.toLocaleString("fr-FR")}<span className="text-sm text-ink-soft">m</span>
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

      {/* Pro Treatment — long-form content with full-bleed photo */}
      <section className="relative">
        <div className="relative h-[40vh] min-h-[320px] w-full overflow-hidden">
          <Image
            src="/images/alps/pro-treatment.png"
            alt="Pro treatment at Collab Cycling"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">Pro experience</p>
            <h2 className="display-h2 mt-6">{dict.alpsValloire.proTitle}</h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            {dict.alpsValloire.proBody.split("\n\n").map((p, i) => (
              <p key={i} className="max-w-prose">{p}</p>
            ))}
            <div className="pt-4">
              <Link href={`${base}/faq`} className="btn-ghost">
                {dict.nav.faq}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — 4 photos */}
      <section className="section bg-cream-deep">
        <div className="mx-auto max-w-7xl">
          <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <li key={n} className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={`/images/alps/gallery-0${n}.png`}
                  alt={`Camp moment ${n}`}
                  fill
                  sizes="(min-width: 1024px) 24vw, 48vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Book CTA */}
      <section className="section">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-h2">{dict.common.book}.</h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            {dict.faq.contactBody}
          </p>
          <Link href={`${base}/work-with-us`} className="btn-primary mt-10">
            {dict.common.book}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
