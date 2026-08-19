import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "landing" });

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface overflow-hidden">
      {/* ── Full-screen Hero ── */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-home.jpeg"
            alt="Qafotel"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-on-surface/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          {/* Logo */}
          <h1 className="font-display text-6xl md:text-8xl text-white mb-4 tracking-tight drop-shadow-lg">
            QAFOTEL
          </h1>

          {/* Tagline */}
          <p className="font-display italic text-xl md:text-2xl text-white/90 mb-2">
            {t("tagline")}
          </p>
          <p className="text-sm md:text-base text-white/70 max-w-md mb-10 tracking-wider uppercase">
            {t("subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/home"
              className="bg-white text-olive px-10 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-surface-low transition-colors ambient-shadow"
            >
              {t("enterBtn")}
            </Link>
            <Link
              href="/rooms"
              className="border border-white text-white px-10 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-white/10 transition-colors"
            >
              {t("bookBtn")}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-xs tracking-widest uppercase">{t("scroll")}</span>
          <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── Quick Preview Section ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-16 py-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-olive mb-4">
            {t("previewTitle")}
          </h2>
          <p className="text-base text-on-surface-var max-w-lg mx-auto">
            {t("previewText")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hotel */}
          <Link href="/home" className="group relative aspect-[4/5] rounded-3xl overflow-hidden ambient-shadow">
            <Image
              src="/images/leaf.jpeg"
              alt="Hotel"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-display text-2xl mb-1">{t("hotel")}</h3>
              <p className="text-sm text-white/80">{t("hotelDesc")}</p>
            </div>
          </Link>

          {/* Jardin Coffee */}
          <Link href="/cafe" className="group relative aspect-[4/5] rounded-3xl overflow-hidden ambient-shadow">
            <Image
              src="/images/cafe-interior.jpeg"
              alt="Jardin Coffee"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-display text-2xl mb-1">Jardin Coffee</h3>
              <p className="text-sm text-white/80">{t("cafeDesc")}</p>
            </div>
          </Link>

          {/* Facilities */}
          <Link href="/facilities" className="group relative aspect-[4/5] rounded-3xl overflow-hidden ambient-shadow">
            <Image
              src="/images/gallery-sunroom.jpeg"
              alt="Facilities"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-display text-2xl mb-1">{t("facilities")}</h3>
              <p className="text-sm text-white/80">{t("facilitiesDesc")}</p>
            </div>
          </Link>
        </div>

        {/* Enter button */}
        <div className="text-center mt-16">
          <Link
            href="/home"
            className="inline-block bg-olive text-white px-10 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-olive-tint transition-colors ambient-shadow"
          >
            {t("exploreBtn")}
          </Link>
        </div>
      </section>

      {/* ── Minimal Footer ── */}
      <footer className="w-full bg-surface-highest px-6 py-8 text-center">
        <p className="font-display text-lg font-bold tracking-tight text-olive uppercase mb-2">
          QAFOTEL
        </p>
        <p className="text-xs text-on-surface-var">
          © 2026 QAFOTEL. {t("tagline")}
        </p>
      </footer>
    </div>
  );
}
