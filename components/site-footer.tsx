import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/config";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import NewsletterForm from "./newsletter-form";

export default function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = `/${locale}`;
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-4 lg:px-16">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href={base} className="inline-flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Collab Cycling"
              width={40}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <span className="font-display text-xl font-extrabold uppercase tracking-tight">Collab Cycling</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm text-cream/70">{dict.footer.tagline}</p>

          <div className="mt-6 flex gap-4">
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-cream/70 transition-colors hover:text-kom">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-cream/70 transition-colors hover:text-kom">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={site.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="text-cream/70 transition-colors hover:text-kom">
              <Youtube className="h-5 w-5" />
            </a>
            <a href={site.socials.strava} target="_blank" rel="noreferrer" aria-label="Strava" className="text-cream/70 transition-colors hover:text-kom">
              <span className="text-sm font-semibold">Strava</span>
            </a>
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="eyebrow text-kom">{dict.footer.sitemap}</h3>
          <ul className="mt-5 space-y-2 text-sm">
            <li><Link href={`${base}/training-camps`} className="text-cream/80 hover:text-cream">{dict.nav.trainingCamps}</Link></li>
            <li><Link href={`${base}/team`} className="text-cream/80 hover:text-cream">{dict.nav.team}</Link></li>
            <li><Link href={`${base}/work-with-us`} className="text-cream/80 hover:text-cream">{dict.nav.workWithUs}</Link></li>
            <li><Link href={`${base}/blog`} className="text-cream/80 hover:text-cream">{dict.nav.blog}</Link></li>
            <li><Link href={`${base}/faq`} className="text-cream/80 hover:text-cream">{dict.nav.faq}</Link></li>
            <li><Link href={`${base}/collaborators`} className="text-cream/80 hover:text-cream">{dict.nav.collaborators}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="eyebrow text-kom">{dict.footer.contact}</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <a href={`mailto:${site.contact.email}`} className="break-all hover:text-cream">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-cream">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{site.contact.address}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <NewsletterForm dict={dict} />
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/60 sm:flex-row sm:px-10 lg:px-16">
          <p>© {new Date().getFullYear()} Collab Cycling. {dict.footer.rights}</p>
          <p>
            Developed by{" "}
            <a href="https://quailabs.tech/" target="_blank" rel="noreferrer" className="text-kom underline decoration-kom underline-offset-4 hover:text-cream">
              QuAI Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
