import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { Link } from "@/i18n/navigation";
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

      <main className="pt-20">
        {/* ── Hero Section ── */}
        <section className="relative h-[90vh] w-full min-h-[650px] flex items-center justify-center -mt-20">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/qafotel_landscape.jpeg"
              alt="Qafotel suite"
              fill
              priority
              className="object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 pt-24">
            <div className="max-w-2xl text-on-primary">
              <h1 className="font-display text-[40px] md:text-[64px] text-on-primary mb-6 leading-[1.2] md:leading-[72px] tracking-[-0.02em]">
                {t("heroTitle").split("\n")[0]}
                <br />
                <span className="italic text-surface-low/90">
                  {t("heroTitle").split("\n")[1]}
                </span>
              </h1>
              <p className="font-body text-xs uppercase tracking-widest text-surface-low/80 mb-4">
                {t("heroSubtitle")}
              </p>
              <div className="flex items-center gap-2 font-body text-xs text-surface-low/80">
                <span className="material-symbols-outlined text-[16px]">
                  location_on
                </span>
                <span>JL. Ruhui Rahayu, Balikpapan</span>
              </div>
            </div>
          </div>

          {/* Booking Widget - Desktop */}
          <div className="absolute bottom-8 left-0 right-0 z-20 w-full max-w-[1280px] mx-auto px-6 hidden md:block">
            <div className="bg-surface rounded-2xl shadow-2xl p-6 md:p-8 flex items-end gap-4 md:gap-6 justify-between border border-outline-variant/20">
              <div className="flex-1 grid grid-cols-3 gap-4 md:gap-6 min-w-0">
                <div className="flex flex-col gap-2 cursor-pointer">
                  <label className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">
                    {t("checkIn")}
                  </label>
                  <div className="flex items-center justify-between border-b border-outline-variant pb-2 hover:border-primary transition-colors">
                    <span className="font-body text-lg text-on-surface">
                      May 24, 2025
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant">
                      calendar_today
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 cursor-pointer">
                  <label className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">
                    {t("checkOut")}
                  </label>
                  <div className="flex items-center justify-between border-b border-outline-variant pb-2 hover:border-primary transition-colors">
                    <span className="font-body text-lg text-on-surface">
                      May 25, 2025
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant">
                      calendar_today
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 cursor-pointer">
                  <label className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">
                    {t("guests")}
                  </label>
                  <div className="flex items-center justify-between border-b border-outline-variant pb-2 hover:border-primary transition-colors">
                    <span className="font-body text-lg text-on-surface">
                      2 Guests
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
              <button className="bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-body text-xs font-semibold uppercase tracking-[0.1em] hover:bg-primary-container transition-all flex items-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg shrink-0">
                {t("checkAvailability")}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Mobile Booking Widget */}
        <section className="md:hidden px-6 mt-12">
          <div className="bg-surface rounded-xl shadow-md p-6 flex flex-col gap-4 border border-outline-variant/20">
            <div className="flex items-center justify-between border-b border-outline-variant pb-2">
              <span className="font-body text-base text-on-surface">
                {t("checkIn")}
              </span>
              <span className="font-body text-base text-on-surface-variant">
                {t("mobileDates")}
              </span>
            </div>
            <Link
              href="/rooms"
              className="bg-primary text-on-primary w-full py-3 rounded-lg font-body text-xs font-semibold uppercase tracking-[0.1em] text-center"
            >
              {t("mobileBookNow")}
            </Link>
          </div>
        </section>

        {/* ── Rooms Section ── */}
        <section className="pt-24 md:pt-36 pb-16 w-full max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-4">
              {t("roomsLabel")}
            </h3>
            <h2 className="font-display text-[32px] leading-[40px] text-primary">
              {t("roomsTitle")}
            </h2>
          </div>

          <div className="relative group">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 justify-start md:justify-center scrollbar-hide px-6 md:px-0">
              {rooms.map((room) => (
                <Link
                  key={room.slug}
                  href={`/rooms/${room.slug}`}
                  className="flex-none w-[280px] md:w-[300px] snap-start flex flex-col gap-4 group/card cursor-pointer"
                >
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-surface-container-high">
                    <Image
                      src={room.carousel[0]}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-display text-[20px] leading-[28px] text-primary mb-1 group-hover/card:text-surface-tint transition-colors">
                      {room.name}
                    </h4>
                    <p className="font-body text-[14px] leading-[20px] text-on-surface-variant mb-3 line-clamp-2">
                      {room.description}
                    </p>
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Rp {(room.priceUSD * 15000).toLocaleString("id-ID")}{" "}
                      <span className="text-on-surface-variant lowercase">
                        {t("perNight")}
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Story / Manifesto Section ── */}
        <section className="py-16 md:py-32 bg-surface-low w-full">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/qafotel_landscape.jpeg"
                alt="Qafotel lobby"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 md:pl-12">
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                {t("storyLabel")}
              </h3>
              <h2 className="font-display text-[32px] leading-[40px] text-primary max-w-md">
                {t("storyTitle")}
              </h2>
              <p className="font-body text-lg leading-[28px] text-on-surface-variant max-w-lg">
                {t("storyText")}
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-primary hover:text-surface-tint transition-colors group"
                >
                  {t("discoverMore")}
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Guest Reviews Section ── */}
        <section className="py-16 md:py-32 w-full max-w-[1280px] mx-auto px-6 bg-surface">
          <div className="text-center mb-12">
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-4">
              {t("reviewsLabel")}
            </h3>
            <h2 className="font-display text-[32px] leading-[40px] text-primary">
              {t("reviewsTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "RATNA S.",
                location: "Jakarta",
                text: '"Surga tersembunyi! Kamar cantik, pelayanan luar biasa, dan lokasi strategis. Perhatian terhadap cahaya alami dan pepohonan membuat menginap kami sangat santai."',
              },
              {
                name: "BUDI H.",
                location: "Surabaya",
                text: '"Perhatian terhadap detail tidak tertandingi. Terasa seperti pengalaman personal dari awal sampai akhir. Kafe di bawah juga luar biasa enak."',
              },
              {
                name: "DIAN P.",
                location: "Yogyakarta",
                text: '"Tenang, bergaya, dan sangat bersih. Kami pasti akan kembali! Arsitektur dan desainnya saja sudah sepadan dengan perjalanan."',
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-surface-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col gap-6 h-full transition-shadow hover:shadow-md"
              >
                <div className="flex gap-1 text-secondary-fixed-dim">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body text-base text-on-surface italic flex-grow">
                  {review.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden flex-shrink-0" />
                  <div>
                    <p className="font-body text-[13px] font-semibold text-primary">
                      {review.name}
                    </p>
                    <p className="font-body text-[12px] text-on-surface-variant">
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features Footer ── */}
        <section className="py-12 bg-surface border-t border-outline-variant/20 w-full">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[32px] mb-2 font-light">
                bed
              </span>
              <h4 className="font-body text-[11px] font-semibold text-primary uppercase">
                {t("features.comfort")}
              </h4>
              <p className="font-body text-[13px] text-on-surface-variant hidden md:block">
                {t("features.comfortDesc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[32px] mb-2 font-light">
                location_on
              </span>
              <h4 className="font-body text-[11px] font-semibold text-primary uppercase">
                {t("features.location")}
              </h4>
              <p className="font-body text-[13px] text-on-surface-variant hidden md:block">
                {t("features.locationDesc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[32px] mb-2 font-light">
                restaurant
              </span>
              <h4 className="font-body text-[11px] font-semibold text-primary uppercase">
                {t("features.experience")}
              </h4>
              <p className="font-body text-[13px] text-on-surface-variant hidden md:block">
                {t("features.experienceDesc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[32px] mb-2 font-light">
                shield
              </span>
              <h4 className="font-body text-[11px] font-semibold text-primary uppercase">
                {t("features.safe")}
              </h4>
              <p className="font-body text-[13px] text-on-surface-variant hidden md:block">
                {t("features.safeDesc")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <QafotelFooter />
    </div>
  );
}
