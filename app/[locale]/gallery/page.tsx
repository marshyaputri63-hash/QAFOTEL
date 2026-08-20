import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { GalleryGrid } from "@/components/gallery-grid";
import Image from "next/image";

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
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/koridor.jpeg"
            alt="Qafotel gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-[40px] md:text-[56px] text-on-primary mb-4">
            {t("heroTitle")}
          </h1>
          <p className="font-body text-lg text-on-primary/80 max-w-lg mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <GalleryGrid />
      </section>

      <QafotelFooter />
    </div>
  );
}
