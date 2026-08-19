import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { getRooms } from "@/lib/qafotel-data";
import type { Locale } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { WhatsAppBookingForm } from "@/components/whatsapp-booking-form";
import { Wifi, Coffee, Thermometer, Tv, Droplets, Flower2 } from "lucide-react";

const amenityIcons: Record<string, React.ReactNode> = {
  "Garden Access": <Flower2 className="w-5 h-5" />,
  "Akses Taman": <Flower2 className="w-5 h-5" />,
  "High-speed WiFi": <Wifi className="w-5 h-5" />,
  "WiFi Cepat": <Wifi className="w-5 h-5" />,
  "Espresso Maker": <Coffee className="w-5 h-5" />,
  "Pembuat Espresso": <Coffee className="w-5 h-5" />,
  "Climate Control": <Thermometer className="w-5 h-5" />,
  "Kontrol Suhu": <Thermometer className="w-5 h-5" />,
  'Smart TV 43"': <Tv className="w-5 h-5" />,
  'Smart TV 55"': <Tv className="w-5 h-5" />,
  "Organic Toiletries": <Droplets className="w-5 h-5" />,
  "Perlengkapan Mandi Organik": <Droplets className="w-5 h-5" />,
  "Panoramic View": <Flower2 className="w-5 h-5" />,
  "Pemandangan Panorama": <Flower2 className="w-5 h-5" />,
  "Rainfall Shower": <Droplets className="w-5 h-5" />,
  "Shower Hujan": <Droplets className="w-5 h-5" />,
};

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
          src={room.image}
          alt={room.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <span className="bg-olive text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">
            {room.tag}
          </span>
          <h1 className="font-display text-4xl md:text-5xl">{room.name}</h1>
        </div>
      </section>

      {/* ── Details ── */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-7">
            <p className="text-lg text-on-surface-var mb-8 leading-relaxed">
              {room.description}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-surface-low rounded-2xl p-4 text-center">
                <p className="text-xs font-semibold text-on-surface-var uppercase tracking-wider mb-1">{t("guests")}</p>
                <p className="font-display text-lg text-olive">{room.guests}</p>
              </div>
              <div className="bg-surface-low rounded-2xl p-4 text-center">
                <p className="text-xs font-semibold text-on-surface-var uppercase tracking-wider mb-1">{t("bed")}</p>
                <p className="font-display text-lg text-olive">{room.bed}</p>
              </div>
              <div className="bg-surface-low rounded-2xl p-4 text-center">
                <p className="text-xs font-semibold text-on-surface-var uppercase tracking-wider mb-1">{t("view")}</p>
                <p className="font-display text-lg text-olive">{room.view}</p>
              </div>
            </div>

            {/* Amenities */}
            <h2 className="font-display text-2xl text-olive mb-6">{t("amenities")}</h2>
            <div className="grid grid-cols-2 gap-4">
              {room.amenities.map((a) => (
                <div key={a} className="flex items-center gap-3 bg-surface-low rounded-xl p-4">
                  <span className="text-olive">{amenityIcons[a] || <Flower2 className="w-5 h-5" />}</span>
                  <span className="text-sm font-medium">{a}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <h2 className="font-display text-2xl text-olive mt-10 mb-6">Features</h2>
            <ul className="space-y-3">
              {room.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-on-surface-var">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Booking */}
          <div className="lg:col-span-5">
            <div className="bg-surface-highest rounded-3xl p-8 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl text-olive">{room.name}</h3>
                <span className="font-display text-xl text-oak">
                  Rp {room.priceRupiah.toLocaleString("id-ID")}
                </span>
              </div>
              <p className="text-xs text-on-surface-var mb-6 uppercase tracking-wider">{t("perNight")}</p>
              <WhatsAppBookingForm rooms={rooms} />
            </div>
          </div>
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
