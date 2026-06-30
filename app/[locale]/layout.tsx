import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale, isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return {
    metadataBase: new URL("https://collabcycling.com"),
    title: {
      default: "Collab Cycling",
      template: "%s · Collab Cycling",
    },
    description: dict.footer.tagline,
    openGraph: { siteName: "Collab Cycling", type: "website" },
    twitter: { card: "summary_large_image" },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <div lang={locale} className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        {dict.common.skipToContent}
      </a>
      <SiteHeader locale={locale} dict={dict} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
