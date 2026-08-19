import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { GalleryGrid } from "@/components/gallery-grid";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gallery" });

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      <QafotelHeader />

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center px-5 pt-24 pb-16 overflow-hidden bg-surface-low rounded-b-[40px] md:rounded-b-[80px] mb-[80px]">
        <div className="relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-olive mb-4">{t("heroTitle")}</h1>
          <p className="text-lg text-on-surface-var max-w-lg mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 mb-[120px]">
        <GalleryGrid />
      </section>

      <QafotelFooter />
    </div>
  );
}
