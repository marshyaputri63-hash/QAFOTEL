import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { getCafeMenu, cafeMenuLink } from "@/lib/qafotel-data";
import type { Locale } from "@/i18n/routing";
import { ExternalLink } from "lucide-react";

export default async function CafePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cafe" });
  const menu = getCafeMenu(locale as Locale);

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      <QafotelHeader />

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center px-5 pt-24 pb-16 overflow-hidden bg-surface-low rounded-b-[40px] md:rounded-b-[80px] mb-[80px]">
        <div className="relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-olive mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-on-surface-var max-w-lg mx-auto mb-6">
            {t("heroSubtitle")}
          </p>
          <p className="text-sm text-oak font-semibold tracking-wider uppercase mb-8">
            {t("tagline")}
          </p>
          <a
            href={cafeMenuLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-olive text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-olive-tint transition-colors ambient-shadow"
          >
            {t("menuBtn")} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── Menu Sections ── */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 mb-[120px]">
        <div className="space-y-16">
          {menu.map((section) => (
            <div key={section.id}>
              <h2 className="font-display text-3xl text-olive mb-8 text-center">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <div key={item.name} className="bg-surface-low rounded-2xl p-6 ambient-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display text-lg text-on-surface">{item.name}</h3>
                      <span className="font-semibold text-sm text-oak">{item.price}</span>
                    </div>
                    <p className="text-sm text-on-surface-var leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <a
            href={cafeMenuLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-olive text-olive font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-olive hover:text-white transition-all duration-200"
          >
            {t("menuBtn")} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
