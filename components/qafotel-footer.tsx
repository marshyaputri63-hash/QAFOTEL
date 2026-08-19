"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function QafotelFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-surface-highest rounded-t-xl px-6 py-12 flex flex-col gap-8 max-w-7xl mx-auto text-center">
      <div className="font-display text-xl font-bold tracking-tight text-olive uppercase">
        QAFOTEL
      </div>
      <nav className="flex flex-wrap justify-center gap-6">
        <Link href="/rooms" className="text-sm font-semibold text-on-surface-var hover:text-olive transition-colors uppercase tracking-wider">
          {t("rooms")}
        </Link>
        <Link href="/cafe" className="text-sm font-semibold text-on-surface-var hover:text-olive transition-colors uppercase tracking-wider">
          {t("jardinCoffee")}
        </Link>
        <Link href="/about" className="text-sm font-semibold text-on-surface-var hover:text-olive transition-colors uppercase tracking-wider">
          {t("sustainability")}
        </Link>
        <Link href="/contact" className="text-sm font-semibold text-on-surface-var hover:text-olive transition-colors uppercase tracking-wider">
          {t("contact")}
        </Link>
      </nav>
      <p className="text-sm text-oak">
        © 2026 QAFOTEL. {t("tagline")}
      </p>
    </footer>
  );
}
