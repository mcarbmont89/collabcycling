import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return { title: dict.trainingCamps.pageTitle };
}

export default function TrainingCampsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  return (
    <>
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow">{dict.trainingCamps.pageEyebrow}</p>
          <div>
            <h1 className="display-h1">{dict.trainingCamps.heading}</h1>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink-soft">
              {dict.trainingCamps.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Two destination cards */}
      <section className="section pt-0">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-10">
          <Link href={`${base}/alps-valloire`} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/training/alps-card.png"
                alt="Collab Alps — Valloire"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <p className="eyebrow text-cream/70">{dict.home.alps.eyebrow}</p>
                <h2 className="mt-3 font-display text-4xl font-light text-cream sm:text-5xl">
                  Valloire Galibier
                </h2>
                <p className="mt-4 text-base text-cream/80">{dict.home.alps.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-wider2 text-cream">
                  {dict.common.explore}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          <Link href={`${base}/majorca`} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/training/mallorca-card.jpg"
                alt="Collab Mallorca — Serra de Tramuntana"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <p className="eyebrow text-cream/70">{dict.home.mallorca.eyebrow}</p>
                <h2 className="mt-3 font-display text-4xl font-light text-cream sm:text-5xl">
                  Serra de Tramuntana
                </h2>
                <p className="mt-4 text-base text-cream/80">{dict.home.mallorca.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-wider2 text-cream">
                  {dict.common.explore}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
