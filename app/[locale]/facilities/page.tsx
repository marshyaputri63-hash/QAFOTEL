import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { Link } from "@/i18n/navigation";
import { cafeMenuLink } from "@/lib/qafotel-data";
import { ArrowRight, Check } from "lucide-react";

export default async function FacilitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "facilities" });

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      <QafotelHeader />

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center px-5 pt-24 pb-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface-low" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="col-span-1 md:col-span-6 flex flex-col items-start gap-6">
            <span className="font-semibold text-sm text-olive tracking-widest uppercase">
              {t("heroTag")}
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-on-surface max-w-2xl">
              {t("heroTitle")} <br />
              <span className="italic text-olive">Tranquility.</span>
            </h1>
            <p className="text-lg text-on-surface-var max-w-lg mt-4">
              {t("heroText")}
            </p>
            <a
              href="#facilities"
              className="mt-8 px-8 py-4 bg-olive text-white rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-olive-tint transition-colors duration-200"
            >
              {t("exploreBtn")}
            </a>
          </div>
          <div className="col-span-1 md:col-span-6 relative h-[60vh] min-h-[400px] w-full mt-12 md:mt-0">
            <div className="absolute inset-0 organic-shape bg-surface-highest overflow-hidden transform rotate-3 scale-105 transition-transform duration-1000 hover:rotate-0 hover:scale-100">
              <Image
                src="/images/hero-home.jpeg"
                alt="Qafotel facilities"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-olive-container rounded-full mix-blend-multiply opacity-50 blur-3xl" />
          </div>
        </div>
      </section>

      <div id="facilities" />

      {/* ── Jardin Coffee ── */}
      <section className="w-full py-[120px] px-5 md:px-16 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6">
              <div className="inline-block bg-oak text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full w-max">
                {t("jardinCoffee.tag")}
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-on-surface">
                {t("jardinCoffee.title")}
              </h2>
              <p className="text-base text-on-surface-var leading-relaxed">
                {t("jardinCoffee.text")}
              </p>
              <a
                href={cafeMenuLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-olive font-semibold text-sm tracking-wider uppercase hover:text-olive-tint transition-colors"
              >
                {t("jardinCoffee.viewMenu")} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden ambient-shadow">
                <Image
                  src="/images/cafe-interior.jpeg"
                  alt="Jardin Coffee"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meeting Room ── */}
      <section className="w-full py-[120px] px-5 md:px-16 bg-surface-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden ambient-shadow">
                <Image
                  src="/images/gallery-room.jpeg"
                  alt="Meeting Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 md:bottom-12 md:-right-16 bg-surface-lowest p-6 rounded-2xl ambient-shadow w-64">
                <p className="font-display text-2xl text-olive">30</p>
                <p className="font-semibold text-xs text-on-surface-var mt-1 tracking-wider uppercase">Max Guests</p>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-3 text-olive">
                <span className="font-semibold text-sm tracking-wider uppercase">{t("meetingRoom.tag")}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-on-surface">
                {t("meetingRoom.title")}
              </h2>
              <p className="text-base text-on-surface-var leading-relaxed">
                {t("meetingRoom.text")}
              </p>
              <div className="flex flex-col gap-3 mt-4">
                {["meetingRoom.features.0", "meetingRoom.features.1", "meetingRoom.features.2", "meetingRoom.features.3"].map((key, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-olive" />
                    <span className="text-on-surface">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outdoor Garden ── */}
      <section className="w-full py-[120px] px-5 md:px-16 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] organic-shape-2 overflow-hidden ambient-shadow">
              <Image
                src="/images/gallery-sunroom.jpeg"
                alt="Outdoor Garden"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <span className="px-4 py-1 bg-terracotta-container text-terracotta-on rounded-full font-semibold text-xs w-max tracking-widest uppercase">
                {t("outdoorGarden.tag")}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-on-surface">
                {t("outdoorGarden.title")}
              </h2>
              <p className="text-lg text-on-surface-var leading-relaxed">
                {t("outdoorGarden.text")}
              </p>
              <div className="flex flex-col gap-3 mt-4">
                {["outdoorGarden.features.0", "outdoorGarden.features.1", "outdoorGarden.features.2", "outdoorGarden.features.3"].map((key, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-olive" />
                    <span className="text-on-surface">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── City View ── */}
      <section className="w-full py-[120px] px-5 md:px-16 bg-surface-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6">
              <span className="font-semibold text-sm text-olive tracking-widest uppercase">
                {t("cityView.tag")}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-on-surface">
                {t("cityView.title")}
              </h2>
              <p className="text-base text-on-surface-var leading-relaxed">
                {t("cityView.text")}
              </p>
              <div className="flex flex-col gap-3 mt-4">
                {["cityView.features.0", "cityView.features.1", "cityView.features.2", "cityView.features.3"].map((key, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-olive" />
                    <span className="text-on-surface">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden ambient-shadow">
                <Image
                  src="/images/hero-home.jpeg"
                  alt="City View Terrace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
