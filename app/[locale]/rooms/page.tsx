import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { getRooms } from "@/lib/qafotel-data";
import { Link } from "@/i18n/navigation";

export default async function RoomsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rooms" });
  const rooms = getRooms(locale as "en" | "id");

  return (
    <div className="min-h-screen bg-cream font-body text-olive">
      <QafotelHeader />

      <div className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <div className="mb-10 text-center">
          <h1 className="font-display mb-2.5 text-4xl text-olive">
            {t("title")}
          </h1>
          <p className="mx-auto max-w-[500px] text-base text-[#666]">
            {t("intro")}
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {rooms.map((room) => (
            <div
              key={room.slug}
              className="overflow-hidden rounded-[20px] border border-[#e0e0e0] bg-white shadow-[0_10px_20px_rgba(85,99,43,0.1)] transition-transform hover:-translate-y-1.5"
            >
              <div className="relative h-[180px]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
                {room.badge && (
                  <span className="absolute right-3.5 top-3.5 rounded-full bg-olive px-3 py-1 text-[11px] text-white">
                    {room.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h2 className="font-display mb-2.5 text-xl text-olive">
                  {room.name}
                </h2>
                <div className="mb-4 flex gap-4 border-b border-[#f0f0f0] pb-2.5 text-xs text-[#777]">
                  <span>📏 {room.size}</span>
                  <span>👥 {room.guests}</span>
                  <span>🛏️ {room.bed}</span>
                </div>
                <p className="mb-4 line-clamp-3 text-[13px] leading-relaxed text-[#555]">
                  {room.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {room.amenities.map((a) => (
                    <span
                      key={a}
                      className="rounded border border-olive bg-cream px-2 py-0.5 text-[10px] text-olive"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-olive">
                    ${room.price}
                    <span className="text-xs font-normal text-[#888]">
                      {t("perNight")}
                    </span>
                  </div>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="rounded-full bg-olive px-4.5 py-2.5 text-[13px] font-semibold text-cream transition-opacity hover:opacity-90"
                  >
                    {t("viewDetails")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <QafotelFooter />
    </div>
  );
}
