import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const values = t.raw("values") as { title: string; desc: string }[];

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream font-body text-olive">
      <QafotelHeader />

      {/* Hero */}
      <section className="px-5 py-14 text-center">
        <h1 className="font-display mb-2.5 text-5xl md:text-6xl">
          {t("heroTitle")}
        </h1>
        <p className="mx-auto max-w-[600px] text-lg opacity-80">
          {t("heroText")}
        </p>
      </section>

      {/* Our Story */}
      <section className="flex flex-col items-center gap-10 px-5 py-14 md:flex-row md:px-10">
        <div className="flex-1">
          <h2 className="font-display mb-5 text-3xl md:text-4xl">
            {t("storyTitle")}
          </h2>
          <p className="text-base leading-relaxed">{t("storyText")}</p>
        </div>
        <div className="relative h-[260px] w-full max-w-[400px] rounded-[40px] bg-olive md:h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
            alt={t("storyImageAlt")}
            fill
            className="rounded-[40px] object-cover"
          />
        </div>
      </section>

      {/* Mission */}
      <section className="mx-5 my-10 rounded-[100px_0_100px_0] bg-olive px-8 py-14 text-center text-cream md:mx-10">
        <h2 className="font-display mb-5 text-3xl md:text-4xl">
          {t("missionTitle")}
        </h2>
        <p className="mx-auto max-w-3xl text-lg italic leading-relaxed md:text-xl">
          {t("missionText")}
        </p>
      </section>

      {/* Botanical Style */}
      <section className="flex flex-col-reverse items-center gap-10 px-5 py-14 md:flex-row md:px-10">
        <div className="relative h-[260px] w-full max-w-[400px] rounded-[40px] bg-olive md:h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
            alt={t("styleImageAlt")}
            fill
            className="rounded-[40px] object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-display mb-5 text-3xl md:text-4xl">
            {t("styleTitle")}
          </h2>
          <p className="text-base leading-relaxed">{t("styleText")}</p>
        </div>
      </section>

      {/* Values */}
      <section className="grid gap-5 px-5 py-10 md:grid-cols-3 md:px-10">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-[30px] border-2 border-olive bg-olive/10 p-7 text-center"
          >
            <h3 className="font-display mb-2.5 text-2xl">{v.title}</h3>
            <p className="text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </section>

      <QafotelFooter />
    </div>
  );
}
