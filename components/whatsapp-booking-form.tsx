"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Room } from "@/lib/qafotel-data";
import { contactInfo } from "@/lib/qafotel-data";

export function WhatsAppBookingForm({ rooms }: { rooms: Room[] }) {
  const t = useTranslations("booking");
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = new FormData(e.currentTarget);
    const name = form.get("name") || "";
    const phone = form.get("phone") || "";
    const checkIn = form.get("checkIn") || "";
    const checkOut = form.get("checkOut") || "";
    const roomType = form.get("roomType") || "";
    const guests = form.get("guests") || "2";
    const message = form.get("message") || "";

    const selectedRoom = rooms.find((r) => r.slug === roomType);
    const roomPrice = selectedRoom ? `$${selectedRoom.priceUSD}` : "-";

    const text = `*PESANAN KAMAR QAFOTEL* 🏨
━━━━━━━━━━━━━━━━
👤 Nama: ${name}
📱 No. WA: ${phone}
📅 Check-in: ${checkIn}
📅 Check-out: ${checkOut}
🛏️ Tipe Kamar: ${selectedRoom?.name || roomType} (${roomPrice}/malam)
👥 Tamu: ${guests}
💬 Pesan: ${message || "-"}
━━━━━━━━━━━━━━━━
Terima kasih! 🙏`;

    const url = `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name */}
      <div>
        <label className="block font-body text-sm font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
          {t("fullName")}
        </label>
        <input
          name="name"
          required
          className="w-full bg-surface-low border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block font-body text-sm font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
          {t("phone")}
        </label>
        <input
          name="phone"
          required
          placeholder="08xxxxxxxxxx"
          className="w-full bg-surface-low border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
            {t("checkIn")}
          </label>
          <input
            name="checkIn"
            type="date"
            required
            className="w-full bg-surface-low border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block font-body text-sm font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
            {t("checkOut")}
          </label>
          <input
            name="checkOut"
            type="date"
            required
            className="w-full bg-surface-low border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Room Type */}
      <div>
        <label className="block font-body text-sm font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
          {t("roomType")}
        </label>
        <select
          name="roomType"
          required
          className="w-full bg-surface-low border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none transition-colors"
        >
          <option value="">{t("selectRoom")}</option>
          {rooms.map((room) => (
            <option key={room.slug} value={room.slug}>
              {room.name} — ${room.priceUSD}/malam
            </option>
          ))}
        </select>
      </div>

      {/* Guests */}
      <div>
        <label className="block font-body text-sm font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
          {t("guests")}
        </label>
        <input
          name="guests"
          type="number"
          min="1"
          max="10"
          defaultValue="2"
          className="w-full bg-surface-low border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block font-body text-sm font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
          {t("message")}
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder={t("messagePlaceholder")}
          className="w-full bg-surface-low border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={sending}
        className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-4 rounded-lg font-body text-xs font-semibold uppercase tracking-[0.1em] hover:bg-primary-container transition-colors disabled:opacity-70"
      >
        {sending ? t("sending") : t("sendBtn")}
      </button>
    </form>
  );
}
