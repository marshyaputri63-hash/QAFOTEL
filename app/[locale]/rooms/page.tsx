import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { Link } from "@/i18n/navigation";
import { getRooms, contactInfo } from "@/lib/qafotel-data";
import type { Locale } from "@/i18n/routing";

export default async function RoomsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rooms" });
  const rooms = getRooms(locale as Locale);

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      <QafotelHeader />

      {/* ── Hero ── */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={rooms[0].carousel[1] || rooms[0].carousel[0]}
            alt="Qafotel rooms"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-[40px] md:text-[56px] text-on-primary mb-4 leading-[1.2]">
            {t("heroTitle")}
          </h1>
          <p className="font-body text-lg text-on-primary/80 max-w-lg mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="w-full max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex flex-wrap items-center gap-3">
          {["All", "Deluxe", "Suite", "Standard", "Penthouse", "Family"].map(
            (filter) => (
              <button
                key={filter}
                className={`px-5 py-2.5 rounded-lg font-body text-xs font-semibold uppercase tracking-[0.1em] transition-all ${
                  filter === "All"
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>
      </section>

      {/* ── Room Grid ── */}
      <section className="w-full max-w-[1280px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <Link
              key={room.slug}
              href={`/rooms/${room.slug}`}
              className="group flex flex-col gap-4 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-high">
                <Image
                  src={room.carousel[0]}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div>
                <h3 className="font-display text-[20px] leading-[28px] text-primary mb-1 group-hover:text-surface-tint transition-colors">
                  {room.name}
                </h3>
                <p className="font-body text-[14px] leading-[20px] text-on-surface-variant mb-3 line-clamp-2">
                  {room.description}
                </p>
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-body text-xs text-on-surface-variant">
                    {room.size}
                  </span>
                  <span className="text-on-surface-variant">·</span>
                  <span className="font-body text-xs text-on-surface-variant">
                    {room.guests}
                  </span>
                  <span className="text-on-surface-variant">·</span>
                  <span className="font-body text-xs text-on-surface-variant">
                    {room.bed}
                  </span>
                </div>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                  From ${room.priceUSD}{" "}
                  <span className="text-on-surface-variant lowercase">
                    {t("perNight")}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
