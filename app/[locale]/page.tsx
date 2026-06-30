import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { climbs, site } from "@/lib/config";
import { notFound } from "next/navigation";

export default function Home({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  return (
    <>
      {/* ─────────────────── HERO — FULL-BLEED PHOTO ─────────────────── */}
      <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/images/home/hero.png"
          alt="Cyclist riding through the French Alps"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient mask for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center sm:px-10 lg:px-16">
          <h1 className="display-h1 uppercase text-cream">{dict.home.heroTitle}</h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85 sm:text-xl">
            {dict.home.heroLine}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={site.challenge} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-kom px-8 py-3.5 font-display text-sm font-semibold text-cream transition-colors hover:bg-kom-deep">
              {dict.common.joinChallenge}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href={`${base}/alps-valloire`} className="btn-light">
              {dict.common.discoverMore}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── INTRO ─────────────────── */}
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <p className="eyebrow">{dict.home.intro.eyebrow}</p>
          </div>
          <div>
            <h2 className="display-h2 max-w-3xl">{dict.home.intro.heading}</h2>
            <p className="mt-8 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              {dict.home.intro.body}
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────── TDF ACCESS — FULL-BLEED PHOTO STRIP ─────────────────── */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/images/home/tdf-roads.jpg"
            alt="Tour de France route through the Alps"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <p className="eyebrow text-cream/70">{dict.home.tdf.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-cream sm:text-4xl lg:text-5xl">
                {dict.home.tdf.heading}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80">
                {dict.home.tdf.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── BIG STATEMENT ─────────────────── */}
      <section className="section bg-cream-deep">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">{dict.home.bigStatement.label}</p>
          <div className="mt-12 grid gap-2 sm:grid-cols-3 sm:items-baseline sm:gap-10">
            <p className="font-display text-6xl font-extrabold uppercase tracking-tight sm:text-7xl lg:text-8xl">
              {dict.home.bigStatement.train}
            </p>
            <p className="font-display text-6xl font-extrabold uppercase tracking-tight text-ink-soft sm:text-7xl lg:text-8xl">
              {dict.home.bigStatement.ride}
            </p>
            <p className="font-display text-7xl font-black uppercase tracking-tight text-kom sm:text-8xl lg:text-9xl">
              {dict.home.bigStatement.conquer}
            </p>
          </div>
          <div className="mt-14">
            <Link href={`${base}/training-camps`} className="btn-ghost">
              {dict.common.explore}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── COLLAB ALPS ─────────────────── */}
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/home/alps-card.jpg"
              alt="Collab Alps training camp"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">{dict.home.alps.eyebrow}</p>
            <h2 className="display-h2 mt-6">{dict.home.alps.heading}</h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              {dict.home.alps.body}
            </p>
            {/* Climb data strip */}
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/15 pt-6 sm:grid-cols-4">
              {climbs.slice(0, 4).map((c) => (
                <li key={c.name}>
                  <p className="climb-data">{c.name}</p>
                  <p className="mt-1.5 font-display text-2xl tabular-nums">
                    {c.altitude.toLocaleString("fr-FR")}
                    <span className="ml-1 text-base text-ink-soft">m</span>
                  </p>
                </li>
              ))}
            </ul>
            <Link href={`${base}/alps-valloire`} className="btn-primary mt-10">
              {dict.common.explore}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── COLLAB MALLORCA ─────────────────── */}
      <section className="section bg-cream-deep">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/home/mallorca-card.jpg"
                alt="Collab Mallorca cycling"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:order-1">
            <p className="eyebrow">{dict.home.mallorca.eyebrow}</p>
            <h2 className="display-h2 mt-6">{dict.home.mallorca.heading}</h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              {dict.home.mallorca.body}
            </p>
            <Link href={`${base}/majorca`} className="btn-primary mt-10">
              {dict.common.explore}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── UNIQUE EXPERIENCES — PHOTO GRID ─────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-end">
            <div>
              <p className="eyebrow">{dict.home.experiences.eyebrow}</p>
              <h2 className="display-h2 mt-6">{dict.home.experiences.heading}</h2>
            </div>
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {[
              { src: "/images/home/experience-01.png", alt: "Climbing in the Alps" },
              { src: "/images/home/experience-02.jpg", alt: "Group ride" },
              { src: "/images/home/experience-03.png", alt: "Cyclist portrait" },
              { src: "/images/home/experience-04.png", alt: "Group at summit" },
            ].map((img, i) => (
              <li key={i} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, 48vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────────────── BLOG TEASER ─────────────────── */}
      <section className="section bg-cream-deep">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">{dict.home.blog.eyebrow}</p>
          <h2 className="display-h2 mt-6">{dict.home.blog.heading}</h2>
          <ul className="mt-14 grid gap-10 lg:grid-cols-2">
            {[
              { src: "/images/home/blog-01.png", title: dict.home.blog.post1.title, body: dict.home.blog.post1.body },
              { src: "/images/home/blog-02.png", title: dict.home.blog.post2.title, body: dict.home.blog.post2.body },
            ].map((p, i) => (
              <li key={i}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.src} alt={p.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <h3 className="mt-6 font-display text-2xl sm:text-3xl">{p.title}</h3>
                <p className="mt-3 max-w-prose text-base leading-relaxed text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
