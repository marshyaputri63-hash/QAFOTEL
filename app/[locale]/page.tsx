import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { getRooms } from "@/lib/qafotel-data";
import type { Locale } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const rooms = getRooms(locale as Locale);

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      <QafotelHeader />

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-20 rounded-b-[40px] md:rounded-b-[80px] overflow-hidden bg-surface-low mb-[120px]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/hero-home.jpeg"
            alt="Qafotel interior"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center mt-20 md:mt-32">
          <h1 className="font-display text-5xl md:text-7xl text-olive mb-6 max-w-3xl drop-shadow-sm">
            {t("heroTitle")}
          </h1>
          <p className="text-lg md:text-xl text-on-surface-var max-w-md mx-auto bg-surface-bright/60 p-4 rounded-2xl">
            {t("heroSubtitle")}
          </p>
          <Link
            href="/rooms"
            className="mt-8 bg-olive text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-olive-tint transition-colors ambient-shadow"
          >
            {t("bookStay")}
          </Link>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 mb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 md:col-start-2">
            <h2 className="font-display text-4xl md:text-5xl text-olive mb-6">
              {t("welcomeTitle")}
            </h2>
            <p className="text-base text-on-surface-var mb-6 leading-relaxed">
              {t("welcomeText")}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-oak font-semibold text-sm tracking-wider uppercase hover:text-oak-dark transition-colors"
            >
              {t("discoverPhilosophy")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:col-span-5 md:col-start-8 relative">
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-surface-mid">
              <Image
                src="/images/leaf.jpeg"
                alt="Qafotel room detail"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-oak-container/30 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* ── Jardin Coffee ── */}
      <section className="w-full bg-surface-mid px-5 md:px-16 py-20 mb-[120px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-terracotta-container/10 rounded-l-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1 aspect-square rounded-[40px] overflow-hidden ambient-shadow">
            <Image
              src="/images/cafe-interior.jpeg"
              alt="Jardin Coffee"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block bg-oak text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
              {t("jardinCoffeeTag")}
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-olive">
              {t("jardinCoffeeTitle")}
            </h2>
            <p className="text-base text-on-surface-var leading-relaxed">
              {t("jardinCoffeeText")}
            </p>
            <Link
              href="/cafe"
              className="inline-block px-6 py-3 border border-oak text-oak font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-oak hover:text-white transition-all duration-200"
            >
              {t("viewMenu")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Room Preview ── */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 mb-[120px]">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-olive mb-4">
            {t("roomsTitle")}
          </h2>
          <p className="text-base text-on-surface-var">
            {t("roomsSubtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Leaf */}
          <div className="group bg-surface-highest rounded-3xl overflow-hidden cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <Image
                src="/images/leaf.jpeg"
                alt="The Leaf Room"
                width={800}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-xl text-olive">The Leaf Room</h3>
                <span className="font-semibold text-sm text-oak">Rp 1.300.000</span>
              </div>
              <p className="text-sm text-on-surface-var mb-6 line-clamp-2">
                {rooms[0].description}
              </p>
              <div className="w-full h-[0.5px] bg-oak/30 mb-4" />
              <Link
                href="/rooms/leaf"
                className="text-olive font-semibold text-sm flex items-center justify-between group-hover:text-olive-tint transition-colors uppercase tracking-wider"
              >
                {t("exploreRoom")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          {/* Oase */}
          <div className="group bg-surface-highest rounded-3xl overflow-hidden cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <Image
                src="/images/room-oase.jpeg"
                alt="The Oase Room"
                width={800}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-xl text-olive">The Oase Room</h3>
                <span className="font-semibold text-sm text-oak">Rp 1.850.000</span>
              </div>
              <p className="text-sm text-on-surface-var mb-6 line-clamp-2">
                {rooms[1].description}
              </p>
              <div className="w-full h-[0.5px] bg-oak/30 mb-4" />
              <Link
                href="/rooms/oase"
                className="text-olive font-semibold text-sm flex items-center justify-between group-hover:text-olive-tint transition-colors uppercase tracking-wider"
              >
                {t("exploreSuite")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
