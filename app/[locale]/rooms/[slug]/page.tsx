import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { RoomCarousel } from "@/components/room-carousel";
import { getRooms } from "@/lib/qafotel-data";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const room = getRooms(locale as "en" | "id").find((r) => r.slug === slug);
  return { title: room ? `${room.detailTitle} | Qafotel` : "Qafotel" };
}

function formatRupiah(value: number) {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "roomDetail" });
  const room = getRooms(locale as "en" | "id").find((r) => r.slug === slug);
  if (!room) notFound();

  const service = Math.round(room.priceRupiah * 0.05);
  const tax = Math.round(room.priceRupiah * 0.11);
  const total = room.priceRupiah + service + tax;

  return (
    <div className="min-h-screen bg-cream font-body text-olive">
      <QafotelHeader />

      <div className="mx-auto max-w-[1100px] px-5 py-10 md:px-8">
        <Link
          href="/rooms"
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-olive"
        >
          <span aria-hidden>←</span> {t("backToRooms")}
        </Link>

        <RoomCarousel images={room.carousel} alt={room.detailTitle} />

        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <span className="mb-5 inline-block rounded-full bg-olive px-3 py-1 text-xs text-cream">
              {room.tag}
            </span>
            <h1 className="font-display mb-2.5 text-3xl md:text-4xl">
              {room.detailTitle}
            </h1>
            <p className="mb-8 text-base leading-relaxed opacity-90">
              {room.detailDescription}
            </p>

            <div className="mt-10">
              <h3 className="mb-5 inline-block border-b-2 border-olive pb-1">
                {t("amenities")}
              </h3>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
                {room.detailAmenities.map((a) => (
                  <div key={a.label} className="flex items-center gap-2.5 text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-olive/10">
                      {a.icon}
                    </span>
                    {a.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="mb-5 inline-block border-b-2 border-olive pb-1">
                {t("features")}
              </h3>
              <ul className="space-y-2 pl-5">
                {room.features.map((f) => (
                  <li key={f} className="text-sm">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking card */}
          <aside>
            <div className="sticky top-24 h-fit rounded-[20px] border border-olive/20 bg-white p-7 shadow-[0_15px_35px_rgba(85,99,43,0.05)]">
              <div className="text-[28px] font-bold">
                {formatRupiah(room.priceRupiah)}
              </div>
              <div className="mb-5 text-sm opacity-70">{t("perNight")}</div>
              <div className="border-t border-dashed border-[#ccc] pt-5">
                <div className="mb-2.5 flex justify-between text-sm">
                  <span>{t("nightStay")}</span>
                  <span>{formatRupiah(room.priceRupiah)}</span>
                </div>
                <div className="mb-2.5 flex justify-between text-sm">
                  <span>{t("serviceCharge")}</span>
                  <span>{formatRupiah(service)}</span>
                </div>
                <div className="mb-2.5 flex justify-between text-sm">
                  <span>{t("tax")}</span>
                  <span>{formatRupiah(tax)}</span>
                </div>
                <div className="mt-2.5 flex justify-between border-t border-[#eee] pt-2.5 text-lg font-bold">
                  <span>{t("totalEstimate")}</span>
                  <span>{formatRupiah(total)}</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-6 block w-full rounded-xl bg-olive py-4 text-center font-bold text-cream transition-transform hover:-translate-y-0.5"
              >
                {t("bookThisRoom")}
              </Link>
              <p className="mt-4 text-center text-xs opacity-60">
                {t("bookingNote")}
              </p>
            </div>
          </aside>
        </div>
      </div>

      <QafotelFooter />
    </div>
  );
}
