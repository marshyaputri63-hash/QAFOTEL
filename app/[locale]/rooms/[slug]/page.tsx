import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { getRooms } from "@/lib/qafotel-data";
import type { Locale } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { contactInfo } from "@/lib/qafotel-data";

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "rooms" });
  const rooms = getRooms(locale as Locale);
  const room = rooms.find((r) => r.slug === slug);

  if (!room) return notFound();

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      <QafotelHeader />

      {/* ── Hero Image ── */}
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src={room.carousel[0]}
          alt={room.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 text-on-primary">
          <span className="bg-primary text-on-primary text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">
            {room.tag}
          </span>
          <h1 className="font-display text-4xl md:text-5xl">{room.name}</h1>
        </div>
      </section>

      {/* ── Details ── */}
      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-7">
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              {room.description}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-surface-low rounded-2xl p-4 text-center">
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
                  {t("guests")}
                </p>
                <p className="font-display text-lg text-primary">
                  {room.guests}
                </p>
              </div>
              <div className="bg-surface-low rounded-2xl p-4 text-center">
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
                  {t("bed")}
                </p>
                <p className="font-display text-lg text-primary">{room.bed}</p>
              </div>
              <div className="bg-surface-low rounded-2xl p-4 text-center">
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
                  {t("view")}
                </p>
                <p className="font-display text-lg text-primary">
                  {room.view}
                </p>
              </div>
            </div>

            {/* Amenities */}
            <h2 className="font-display text-2xl text-primary mb-6">
              {t("amenities")}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {room.amenities.map((a) => (
                <div
                  key={a}
                  className="flex items-center gap-3 bg-surface-low rounded-xl p-4"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    check_circle
                  </span>
                  <span className="text-sm font-medium">{a}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <h2 className="font-display text-2xl text-primary mt-10 mb-6">
              Features
            </h2>
            <ul className="space-y-3">
              {room.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-on-surface-variant"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Booking Card */}
          <div className="lg:col-span-5">
            <div className="bg-surface-lowest rounded-xl p-8 sticky top-24 shadow-sm border border-outline-variant/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl text-primary">
                  {room.name}
                </h3>
                <span className="font-body text-lg font-semibold text-primary">
                  ${room.priceUSD}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mb-6 uppercase tracking-[0.1em]">
                {t("perNight")}
              </p>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-on-primary py-3 rounded-lg font-body text-xs font-semibold uppercase tracking-[0.1em] text-center hover:bg-primary-container transition-all"
              >
                {t("bookWhatsApp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
