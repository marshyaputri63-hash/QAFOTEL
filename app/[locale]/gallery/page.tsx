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
    <div className="min-h-screen bg-cream font-body text-olive">
      <QafotelHeader />

      <header className="px-5 pb-4 pt-10 text-center">
        <h1 className="font-display mb-2.5 text-4xl text-olive">
          {t("title")}
        </h1>
        <p className="mx-auto max-w-[500px] text-sm text-[#666]">
          {t("intro")}
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-5 pt-4 md:px-8">
        <GalleryGrid />
      </main>

      <QafotelFooter />
    </div>
  );
}
