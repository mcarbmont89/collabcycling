import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, MapPin } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { site } from "@/lib/config";
import ContactForm from "@/components/contact-form";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return { title: dict.workWithUs.pageTitle };
}

export default function WorkWithUsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="/images/work/hero.png"
          alt="Working at Collab Cycling"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16">
          <p className="eyebrow text-cream/70">{dict.workWithUs.pageEyebrow}</p>
          <h1 className="display-h1 mt-4 max-w-4xl text-cream">{dict.workWithUs.heading}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <h2 className="display-h2">{dict.workWithUs.introTitle}</h2>
            <p className="mt-8 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              {dict.workWithUs.introBody}
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
            <Image
              src="/images/work/team-moment.jpg"
              alt="Working with the team"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-cream-deep">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow">{dict.workWithUs.missionTitle}</p>
          <div className="space-y-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            {dict.workWithUs.missionBody.split("\n\n").map((p, i) => (
              <p key={i} className="max-w-prose">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Location + Form */}
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          {/* Location */}
          <div>
            <p className="eyebrow">{dict.workWithUs.locationTitle}</p>
            <h2 className="display-h2 mt-6">{dict.workWithUs.locationTitle}</h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              {dict.workWithUs.locationBody}
            </p>

            <dl className="mt-10 space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-kom" aria-hidden />
                <div>
                  <dt className="eyebrow text-ink-soft/60">Address</dt>
                  <dd className="mt-1 text-base">{site.contact.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-kom" aria-hidden />
                <div>
                  <dt className="eyebrow text-ink-soft/60">{dict.workWithUs.hoursLabel}</dt>
                  <dd className="mt-1 text-base">{dict.workWithUs.hoursValue}</dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div className="lg:border-l lg:border-ink/15 lg:pl-16">
            <p className="eyebrow">{dict.workWithUs.formTitle}</p>
            <h2 className="display-h2 mt-6">{dict.workWithUs.formTitle}</h2>
            <div className="mt-10">
              <ContactForm dict={dict} subjectPrefix="Work with us" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
