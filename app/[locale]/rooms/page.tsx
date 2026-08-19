import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { Link } from "@/i18n/navigation";
import { getRooms, contactInfo } from "@/lib/qafotel-data";
import type { Locale } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { WhatsAppBookingForm } from "@/components/whatsapp-booking-form";

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
      <section className="relative w-full min-h-[50vh] flex items-center justify-center px-5 pt-24 pb-16 overflow-hidden bg-surface-low rounded-b-[40px] md:rounded-b-[80px] mb-[80px]">
        <div className="relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-olive mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-on-surface-var max-w-lg mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* ── Room Cards ── */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 mb-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.slug} className="group bg-surface-highest rounded-3xl overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={room.image}
                  alt={room.name}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {room.tag && (
                  <span className="absolute top-4 left-4 bg-olive text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                    {room.tag}
                  </span>
                )}
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl text-olive mb-2">{room.name}</h3>
                <p className="text-sm text-on-surface-var mb-6 leading-relaxed">
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-on-surface-var">
                  <span>{room.guests}</span>
                  <span>·</span>
                  <span>{room.bed}</span>
                  <span>·</span>
                  <span>{room.view}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((a) => (
                    <span key={a} className="bg-surface-mid text-on-surface-var text-xs font-semibold px-3 py-1 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
                <div className="w-full h-[0.5px] bg-oak/30 mb-6" />
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-olive">
                    Rp {room.priceRupiah.toLocaleString("id-ID")} <span className="text-sm font-body text-on-surface-var">{t("perNight")}</span>
                  </span>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="text-olive font-semibold text-sm flex items-center gap-2 hover:text-olive-tint transition-colors uppercase tracking-wider"
                  >
                    {t("exploreRoom")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WhatsApp Booking Form ── */}
      <section className="max-w-2xl mx-auto px-5 md:px-16 mb-[120px]">
        <div className="bg-surface-highest rounded-3xl p-8 md:p-12">
          <h2 className="font-display text-3xl text-olive mb-2">{t("booking.title")}</h2>
          <p className="text-sm text-on-surface-var mb-8">{t("booking.subtitle")}</p>
          <WhatsAppBookingForm rooms={rooms} />
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
