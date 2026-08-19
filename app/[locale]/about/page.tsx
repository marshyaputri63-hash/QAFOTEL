import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      <QafotelHeader />

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center px-5 pt-24 pb-16 overflow-hidden bg-surface-low rounded-b-[40px] md:rounded-b-[80px] mb-[120px]">
        <div className="relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-olive mb-4">{t("storyTitle")}</h1>
          <p className="text-sm text-on-surface-var uppercase tracking-widest">{t("foundedYear")}</p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 mb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <h2 className="font-display text-4xl text-olive mb-6">{t("storyTitle")}</h2>
            <p className="text-base text-on-surface-var leading-relaxed mb-6">
              {t("storyText")}
            </p>
          </div>
          <div className="md:col-span-6 relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-surface-mid relative">
              <Image
                src="/images/hero-home.jpeg"
                alt={t("storyImageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="mx-5 my-10 rounded-[100px_0_100px_0] bg-olive px-8 py-14 text-center text-white md:mx-10 mb-[120px]">
        <h2 className="font-display mb-5 text-3xl md:text-4xl">{t("missionTitle")}</h2>
        <p className="mx-auto max-w-3xl text-lg italic leading-relaxed md:text-xl opacity-90">
          {t("missionText")}
        </p>
      </section>

      {/* ── Style ── */}
      <section className="flex flex-col-reverse items-center gap-10 px-5 py-14 md:flex-row md:px-16 max-w-7xl mx-auto mb-[120px]">
        <div className="relative w-full md:w-1/2 aspect-[4/5] rounded-[40px] overflow-hidden bg-surface-mid">
          <Image
            src="/images/gallery-sunroom.jpeg"
            alt={t("styleImageAlt")}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-display text-4xl text-olive mb-6">{t("styleTitle")}</h2>
          <p className="text-base text-on-surface-var leading-relaxed">
            {t("styleText")}
          </p>
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
