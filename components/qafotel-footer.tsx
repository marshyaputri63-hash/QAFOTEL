"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function QafotelFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const footerLinks = [
    t("privacyPolicy"),
    t("termsOfService"),
    t("faq"),
  ];

  return (
    <footer className="bg-olive px-6 py-12 text-center text-cream md:px-12">
      <div className="mb-6 flex flex-wrap items-center justify-center gap-6">
        {footerLinks.map((label) => (
          <Link
            key={label}
            href="/contact"
            className="text-sm opacity-80 transition-opacity hover:opacity-100"
          >
            {label}
          </Link>
        ))}
      </div>
      <p className="text-sm opacity-90">{t("rights", { year })}</p>
    </footer>
  );
}
