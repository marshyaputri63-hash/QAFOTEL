import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { Link } from "@/i18n/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <div className="min-h-screen bg-cream font-body text-olive">
      <QafotelHeader />

      {/* Hero */}
      <section className="relative flex h-[500px] flex-col items-center justify-center text-center text-cream">
        <Image
          src="/images/hero-home.jpeg"
          alt="Qafotel interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative px-6">
          <h1 className="font-display text-5xl text-[#F2F2EC] md:text-6xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-3 font-hand text-3xl text-[#F2F2EC]">
            {t("heroSubtitle")}
          </p>
          <Link
            href="/rooms"
            className="mt-8 inline-block rounded-full bg-olive px-10 py-4 font-bold text-cream transition-transform hover:scale-105"
          >
            {t("bookStay")}
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:px-12">
        <h2 className="font-display mb-5 text-4xl">{t("welcomeTitle")}</h2>
        <p className="text-lg leading-relaxed text-[#444]">
          {t("welcomeText")}
        </p>
      </section>

      {/* Feature grid */}
      <section className="grid gap-10 bg-white px-6 py-12 md:grid-cols-2 md:px-12">
        <div className="overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(85,99,43,0.1)]">
          <div className="relative h-[350px]">
            <Image
              src="/images/room-oase.jpeg"
              alt="Hotel Room"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white p-8">
            <h3 className="font-display mb-3 text-2xl">
              {t("feature1Title")}
            </h3>
            <p className="mb-4 text-[#444]">{t("feature1Text")}</p>
            <Link
              href="/rooms"
              className="font-bold text-olive hover:text-olive-light"
            >
              {t("feature1Link")}
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(85,99,43,0.1)]">
          <div className="relative h-[350px]">
            <Image
              src="/images/cafe-interior.jpeg"
              alt={t("feature2Title")}
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white p-8">
            <h3 className="font-display mb-3 text-2xl">
              {t("feature2Title")}
            </h3>
            <p className="mb-4 text-[#444]">{t("feature2Text")}</p>
            <Link
              href="/cafe"
              className="font-bold text-olive hover:text-olive-light"
            >
              {t("feature2Link")}
            </Link>
          </div>
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
