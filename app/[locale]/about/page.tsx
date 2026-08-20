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
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/koridor.jpeg"
            alt="Qafotel lobby"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-[40px] md:text-[56px] text-on-primary mb-4">
            {t("storyTitle")}
          </h1>
          <p className="font-body text-xs uppercase tracking-widest text-on-primary/80">
            {t("foundedYear")}
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <h2 className="font-display text-[32px] md:text-[40px] text-primary mb-6">
              {t("storyTitle")}
            </h2>
            <p className="font-body text-base text-on-surface-variant leading-relaxed mb-6">
              {t("storyText")}
            </p>
          </div>
          <div className="md:col-span-6 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-high relative">
              <Image
                src="/images/resepionist.jpeg"
                alt={t("storyImageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="mx-6 my-10 rounded-xl bg-primary px-8 py-14 text-center text-on-primary md:mx-10">
        <h2 className="font-display text-[32px] md:text-[40px] mb-5">
          {t("visionTitle")}
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed md:text-xl opacity-90">
          {t("visionText")}
        </p>
      </section>

      {/* ── Mission ── */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 md:py-32">
        <h2 className="font-display text-[32px] md:text-[40px] text-primary mb-8 text-center">
          {t("missionTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.raw("missionItems").map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-4 bg-surface-low rounded-xl p-6">
              <span className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0 font-body text-sm font-semibold">
                {i + 1}
              </span>
              <p className="font-body text-base text-on-surface-variant leading-relaxed pt-1">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Style ── */}
      <section className="flex flex-col-reverse items-center gap-10 px-6 py-16 md:flex-row md:px-16 max-w-[1280px] mx-auto">
        <div className="relative w-full md:w-1/2 aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-high">
          <Image
            src="/images/tanaman_di_tangga.jpeg"
            alt={t("styleImageAlt")}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-display text-[32px] md:text-[40px] text-primary mb-6">
            {t("styleTitle")}
          </h2>
          <p className="font-body text-base text-on-surface-variant leading-relaxed">
            {t("styleText")}
          </p>
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
