"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function QafotelFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-olive-dark px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <div className="font-display text-2xl font-bold tracking-wider text-white uppercase">
          QAFOTEL
        </div>
        <nav className="flex flex-wrap justify-center gap-8">
          <Link href="/rooms" className="text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-wider">
            {t("rooms")}
          </Link>
          <Link href="/cafe" className="text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-wider">
            {t("jardinCoffee")}
          </Link>
          <Link href="/about" className="text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-wider">
            {t("sustainability")}
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-wider">
            {t("contact")}
          </Link>
        </nav>
        <div className="w-full h-px bg-white/20" />
        <p className="text-sm text-white/50">
          © 2026 QAFOTEL. {t("tagline")}
        </p>
      </div>
    </footer>
  );
}
