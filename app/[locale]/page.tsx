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

      {/* ── Hero — Full Screen Elegant ── */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-v2.jpeg"
            alt="Qafotel interior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl">
          <h1 className="[font-family:var(--font-cinzel)] text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-lg font-bold">
            {t("heroTitle")}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto mb-10 leading-relaxed">
            {t("heroSubtitle")}
          </p>
          <Link
            href="/rooms"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-white/20 transition-all duration-300"
          >
            {t("bookStay")}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl text-olive-dark mb-6 leading-tight">
              {t("welcomeTitle")}
            </h2>
            <p className="text-base text-on-surface-var mb-8 leading-relaxed">
              {t("welcomeText")}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-oak-dark font-semibold text-sm tracking-wider uppercase hover:text-oak transition-colors"
            >
              {t("discoverPhilosophy")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden ambient-shadow">
              <Image
                src="/images/leaf.jpeg"
                alt="Qafotel room detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Jardin Coffee Section ── */}
      <section className="w-full bg-surface-low py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 aspect-square rounded-2xl overflow-hidden ambient-shadow">
            <Image
              src="/images/home.jpeg"
              alt="Jardin Coffee"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block bg-oak text-white text-[10px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
              {t("jardinCoffeeTag")}
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-olive-dark leading-tight">
              {t("jardinCoffeeTitle")}
            </h2>
            <p className="text-base text-on-surface-var leading-relaxed">
              {t("jardinCoffeeText")}
            </p>
            <Link
              href="/cafe"
              className="inline-block px-8 py-3 border border-olive text-olive font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-olive hover:text-white transition-all duration-300"
            >
              {t("viewMenu")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Room Preview ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-24 md:py-32">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-olive-dark mb-4">
            {t("roomsTitle")}
          </h2>
          <p className="text-base text-on-surface-var">
            {t("roomsSubtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Leaf */}
          <div className="group bg-surface-lowest rounded-2xl overflow-hidden cursor-pointer ambient-shadow">
            <div className="aspect-[16/10] overflow-hidden">
              <Image
                src="/images/leaf.jpeg"
                alt="The Leaf Room"
                width={800}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-2xl text-olive-dark">The Leaf Room</h3>
                <span className="font-semibold text-lg text-oak-dark">Rp 1.300.000</span>
              </div>
              <p className="text-sm text-on-surface-var mb-6 leading-relaxed">
                {rooms[0].description}
              </p>
              <Link
                href="/rooms/leaf"
                className="text-olive font-semibold text-sm flex items-center justify-between group-hover:text-olive-tint transition-colors uppercase tracking-wider"
              >
                {t("exploreRoom")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          {/* Oase */}
          <div className="group bg-surface-lowest rounded-2xl overflow-hidden cursor-pointer ambient-shadow">
            <div className="aspect-[16/10] overflow-hidden">
              <Image
                src="/images/room-oase.jpeg"
                alt="The Oase Room"
                width={800}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-2xl text-olive-dark">The Oase Room</h3>
                <span className="font-semibold text-lg text-oak-dark">Rp 1.850.000</span>
              </div>
              <p className="text-sm text-on-surface-var mb-6 leading-relaxed">
                {rooms[1].description}
              </p>
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
