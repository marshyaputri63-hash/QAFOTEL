"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { Toaster } from "@/components/ui/sonner";
import { contactInfo } from "@/lib/qafotel-data";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    toast.success(t("toast", { name: (data.get("name") as string) || "" }));
    setSubmitted(true);
    form.reset();
  }

  return (
    <div className="min-h-screen bg-cream font-body text-[#333]">
      <QafotelHeader />
      <Toaster position="top-center" />

      <main className="mx-auto grid max-w-[1000px] gap-10 px-5 py-14 md:grid-cols-[1fr_1.5fr]">
        {/* Contact info */}
        <div className="rounded-[30px_0_30px_0] bg-olive p-8 text-white">
          <svg
            className="mb-5 h-10 w-10 fill-white"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
          <h1 className="font-display mb-6 text-3xl">{t("title")}</h1>
          <p className="mb-8 text-sm opacity-90">{t("intro")}</p>

          <div className="space-y-6">
            <div className="flex items-center gap-3.5">
              <span aria-hidden>📍</span>
              <div className="text-sm">
                <strong>{t("address")}</strong>
                <br />
                {contactInfo.address}
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span aria-hidden>📞</span>
              <div className="text-sm">
                <strong>{t("phone")}</strong>
                <br />
                {contactInfo.phone}
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span aria-hidden>✉️</span>
              <div className="text-sm">
                <strong>{t("email")}</strong>
                <br />
                {contactInfo.email}
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-3.5">
            {["IG", "FB", "TW"].map((s) => (
              <span
                key={s}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-xs font-bold"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-[0_30px_0_30px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:p-10">
          {submitted && (
            <p className="mb-6 rounded-lg bg-olive/10 px-4 py-3 text-sm font-semibold text-olive">
              {t("submitted")}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-semibold text-olive"
              >
                {t("fullName")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t("fullName")}
                className="w-full rounded-lg border border-[#ddd] px-3 py-3 font-body outline-none transition-colors focus:border-olive"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-semibold text-olive"
              >
                {t("emailAddress")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="yourname@email.com"
                className="w-full rounded-lg border border-[#ddd] px-3 py-3 font-body outline-none transition-colors focus:border-olive"
              />
            </div>
            <div>
              <label
                htmlFor="inquiry"
                className="mb-2 block font-semibold text-olive"
              >
                {t("inquiryType")}
              </label>
              <select
                id="inquiry"
                name="inquiry"
                required
                defaultValue=""
                className="w-full rounded-lg border border-[#ddd] px-3 py-3 font-body outline-none transition-colors focus:border-olive"
              >
                <option value="" disabled>
                  {t("selectCategory")}
                </option>
                <option value="room">{t("optionRoom")}</option>
                <option value="cafe">{t("optionCafe")}</option>
                <option value="other">{t("optionGeneral")}</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-semibold text-olive"
              >
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder={t("messagePlaceholder")}
                className="w-full rounded-lg border border-[#ddd] px-3 py-3 font-body outline-none transition-colors focus:border-olive"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-olive py-4 font-semibold text-white transition-colors hover:bg-olive-light"
            >
              {t("sendMessage")}
            </button>
          </form>
        </div>
      </main>

      <QafotelFooter />
    </div>
  );
}
