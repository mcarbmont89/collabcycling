import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import ComingSoon from "@/components/coming-soon";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return { title: dict.collaborators.pageTitle };
}

export default function CollaboratorsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  return (
    <ComingSoon
      eyebrow={dict.collaborators.pageEyebrow}
      heading={dict.collaborators.heading}
      body={dict.collaborators.comingSoon}
      ctaLabel={dict.collaborators.formTitle}
      ctaHref={`/${locale}/work-with-us`}
    />
  );
}
