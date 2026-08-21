"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { contactInfo } from "@/lib/qafotel-data";
import Image from "next/image";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSuccess(false);
    setError(false);

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      inquiry: form.get("inquiry") as string,
      message: form.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      <QafotelHeader />

      {/* ── Hero ── */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-surface-low">
        <Image
          src="/images/qafotel_landscape.jpeg"
          alt="Qafotel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-[40px] md:text-[56px] text-on-primary mb-4">
            {t("heroTitle")}
          </h1>
          <p className="font-body text-lg text-on-primary/80 max-w-lg mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  location_on
                </span>
              </div>
              <div>
                <h3 className="font-body text-sm font-semibold uppercase tracking-wider mb-1">
                  {t("address")}
                </h3>
                <p className="text-on-surface-variant">{contactInfo.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  photo_camera
                </span>
              </div>
              <div>
                <h3 className="font-body text-sm font-semibold uppercase tracking-wider mb-1">
                  Instagram
                </h3>
                <a
                  href="https://www.instagram.com/qafotelboutique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  @qafotelboutique
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
              </div>
              <div>
                <h3 className="font-body text-sm font-semibold uppercase tracking-wider mb-1">
                  {t("emailLabel")}
                </h3>
                <p className="text-on-surface-variant">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 hover:bg-primary-container transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
              </a>
              <div>
                <h3 className="font-body text-sm font-semibold uppercase tracking-wider mb-1">
                  {t("whatsapp")}
                </h3>
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-surface-tint transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-surface-lowest rounded-xl p-8 shadow-sm border border-outline-variant/20">
            {success ? (
              <div className="text-center py-12">
                <h2 className="font-display text-3xl text-primary mb-4">
                  {t("successTitle")}
                </h2>
                <p className="text-on-surface-variant">{t("successText")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block font-body text-sm font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                    {t("name")}
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full bg-surface-low border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                    {t("email")}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-surface-low border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                    {t("inquiry")}
                  </label>
                  <select
                    name="inquiry"
                    required
                    className="w-full bg-surface-low border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">{t("selectInquiry")}</option>
                    <option value="general">{t("general")}</option>
                    <option value="booking">{t("booking")}</option>
                    <option value="feedback">{t("feedback")}</option>
                    <option value="partnership">{t("partnership")}</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                    {t("message")}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={t("messagePlaceholder")}
                    required
                    className="w-full bg-surface-low border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
                {error && (
                  <p className="text-sm text-error">{t("errorText")}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-4 rounded-lg font-body text-xs font-semibold uppercase tracking-[0.1em] hover:bg-primary-container transition-colors disabled:opacity-70"
                >
                  {sending
                    ? t("sending")
                    : t("sendBtn")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
