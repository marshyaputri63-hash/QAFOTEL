"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { contactInfo } from "@/lib/qafotel-data";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

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
      <section className="relative w-full min-h-[50vh] flex items-center justify-center px-5 pt-24 pb-16 overflow-hidden bg-surface-low rounded-b-[40px] md:rounded-b-[80px] mb-[80px]">
        <div className="relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-olive mb-4">{t("heroTitle")}</h1>
          <p className="text-lg text-on-surface-var max-w-lg mx-auto">{t("heroSubtitle")}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-16 mb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-olive-container flex items-center justify-center text-olive-on shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-1">{t("address")}</h3>
                <p className="text-on-surface-var">{contactInfo.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-olive-container flex items-center justify-center text-olive-on shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-1">{t("phone")}</h3>
                <p className="text-on-surface-var">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-olive-container flex items-center justify-center text-olive-on shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-1">{t("emailLabel")}</h3>
                <p className="text-on-surface-var">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-olive flex items-center justify-center text-white shrink-0 hover:bg-olive-tint transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-1">{t("whatsapp")}</h3>
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive hover:text-olive-tint transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-surface-highest rounded-3xl p-8">
            {success ? (
              <div className="text-center py-12">
                <h2 className="font-display text-3xl text-olive mb-4">{t("successTitle")}</h2>
                <p className="text-on-surface-var">{t("successText")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold text-on-surface-var mb-1.5 uppercase tracking-wider">{t("name")}</label>
                  <input name="name" required className="w-full bg-surface-low border border-outline-var rounded-xl px-4 py-3 text-sm text-on-surface focus:border-olive focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface-var mb-1.5 uppercase tracking-wider">{t("email")}</label>
                  <input name="email" type="email" required className="w-full bg-surface-low border border-outline-var rounded-xl px-4 py-3 text-sm text-on-surface focus:border-olive focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface-var mb-1.5 uppercase tracking-wider">{t("inquiry")}</label>
                  <select name="inquiry" required className="w-full bg-surface-low border border-outline-var rounded-xl px-4 py-3 text-sm text-on-surface focus:border-olive focus:outline-none transition-colors">
                    <option value="">{t("selectInquiry")}</option>
                    <option value="general">{t("general")}</option>
                    <option value="booking">{t("booking")}</option>
                    <option value="feedback">{t("feedback")}</option>
                    <option value="partnership">{t("partnership")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface-var mb-1.5 uppercase tracking-wider">{t("message")}</label>
                  <textarea name="message" rows={4} placeholder={t("messagePlaceholder")} required className="w-full bg-surface-low border border-outline-var rounded-xl px-4 py-3 text-sm text-on-surface focus:border-olive focus:outline-none transition-colors resize-none" />
                </div>
                {error && <p className="text-sm text-red-600">{t("errorText")}</p>}
                <button type="submit" disabled={sending} className="w-full flex items-center justify-center gap-2 bg-olive text-white py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-olive-tint transition-colors ambient-shadow disabled:opacity-70">
                  {sending ? t("sending") : <><Send className="w-4 h-4" /> {t("sendBtn")}</>}
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
