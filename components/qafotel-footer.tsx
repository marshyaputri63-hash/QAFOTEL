"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { contactInfo } from "@/lib/qafotel-data";

export function QafotelFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-primary px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <Image
          src="/images/logo-qafotel.jpeg"
          alt="Qafotel"
          width={160}
          height={64}
          className="h-14 w-auto object-contain"
        />
        <nav className="flex flex-wrap justify-center gap-8">
          <Link href="/rooms" className="text-sm font-semibold text-on-primary/70 hover:text-on-primary transition-colors uppercase tracking-wider">
            {t("rooms")}
          </Link>
          <Link href="/cafe" className="text-sm font-semibold text-on-primary/70 hover:text-on-primary transition-colors uppercase tracking-wider">
            {t("jardinCoffee")}
          </Link>
          <Link href="/about" className="text-sm font-semibold text-on-primary/70 hover:text-on-primary transition-colors uppercase tracking-wider">
            {t("sustainability")}
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-on-primary/70 hover:text-on-primary transition-colors uppercase tracking-wider">
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-6 text-on-primary/60 text-sm">
          <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-on-primary transition-colors">
            WhatsApp
          </a>
          <a href={`mailto:${contactInfo.email}`} className="hover:text-on-primary transition-colors">
            {contactInfo.email}
          </a>
        </div>
        <div className="w-full h-px bg-on-primary/20" />
        <p className="text-sm text-on-primary/50">
          © 2026 Qafotel. {t("tagline")}
        </p>
      </div>
    </footer>
  );
}
