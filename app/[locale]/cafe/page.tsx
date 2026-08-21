import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { getCafeMenu, cafeMenuLink } from "@/lib/qafotel-data";
import type { Locale } from "@/i18n/routing";

export default async function CafePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cafe" });
  const menu = getCafeMenu(locale as Locale);

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      <QafotelHeader />

      <main className="pt-20">
        {/* ── Hero Section ── */}
        <section className="relative w-full h-[90vh] min-h-[650px] flex items-center justify-center -mt-20 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/jardincoffee.jpeg"
              alt="Jardin Coffee exterior"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/80" />
          </div>

          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 pt-16 flex flex-col items-center text-center">
            <div className="mb-8">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-surface-lowest shadow-2xl p-2 mx-auto">
                <Image
                  src="/images/logo-jardin.jpeg"
                  alt="Jardin Coffee logo"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <p className="font-body text-xs uppercase tracking-widest text-secondary-container mb-4">
              An Oasis of Flavor at Qafotel
            </p>
            <h1 className="font-display text-[40px] md:text-[64px] text-on-primary max-w-3xl mb-8 leading-[1.2]">
              Where Modernity Meets Botanical Bliss
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href={cafeMenuLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-on-secondary rounded-lg font-body text-xs font-semibold uppercase tracking-[0.1em] hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                LIHAT MENU
                <span className="material-symbols-outlined ml-2 text-[20px]">
                  menu_book
                </span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface/10 backdrop-blur-md border border-on-primary/30 text-on-primary rounded-lg font-body text-xs font-semibold uppercase tracking-[0.1em] hover:bg-surface/20 transition-all"
              >
                DISCOVER MORE
              </a>
            </div>
          </div>
        </section>

        {/* ── Introduction Section ── */}
        <section
          className="py-16 md:py-32 bg-surface relative z-20 -mt-8 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
          id="about"
        >
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">
                The Experience
              </span>
              <h2 className="font-display text-[32px] leading-[40px] text-primary mb-6">
                A Sanctuary for the Senses
              </h2>
              <p className="font-body text-lg leading-[28px] text-on-surface-variant mb-6">
                Nestled within the architectural elegance of Qafotel, Jardin
                Coffee offers a lush, organic retreat. We believe in the
                restorative power of nature, reflected in both our verdant
                surroundings and our carefully curated menu.
              </p>
              <p className="font-body text-base leading-[24px] text-on-surface-variant mb-8">
                Whether you&apos;re seeking a quiet morning espresso bathed in natural
                light or a refreshing afternoon botanical infusion, our space is
                designed to give you room to breathe and savor every moment.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-display text-[24px] leading-[32px] text-secondary">
                    7am - 9pm
                  </span>
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-outline">
                    DAILY HOURS
                  </span>
                </div>
                <div className="w-px h-12 bg-outline-variant" />
                <div className="flex flex-col">
                  <span className="font-display text-[24px] leading-[32px] text-secondary">
                    Lobby Level
                  </span>
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-outline">
                    LOCATION
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
                <div className="mt-12 md:mt-24">
                  <Image
                    src="/images/jardincoffeev2.jpeg"
                    alt="Latte art"
                    width={400}
                    height={320}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div>
                  <Image
                    src="/images/indoorv3.jpeg"
                    alt="Jardin Coffee interior"
                    width={400}
                    height={384}
                    className="w-full h-80 md:h-96 object-cover rounded-xl shadow-xl"
                  />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-fixed/30 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </section>

        {/* ── Signature Menu Section ── */}
        <section className="py-16 md:py-32 bg-surface-lowest">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4 block">
                  Our Brews &amp; Bites
                </span>
                <h2 className="font-display text-[32px] leading-[40px] text-primary">
                  Crafted with Intention
                </h2>
                <p className="font-body text-base leading-[24px] text-on-surface-variant mt-4">
                  Explore a selection of our signature offerings, highlighting
                  local ingredients and masterful techniques.
                </p>
              </div>
              <a
                href={cafeMenuLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.1em] text-primary hover:text-secondary transition-colors"
              >
                FULL MENU
                <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menu[0]?.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex flex-col bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {item.signature && (
                      <div className="absolute top-4 right-4 bg-surface-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full border border-outline-variant/50">
                        <span className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                          SIGNATURE
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-display text-[24px] leading-[32px] text-primary mb-2">
                      {item.name}
                    </h3>
                    <p className="font-body text-base leading-[24px] text-on-surface-variant mb-6 flex-grow">
                      {item.desc}
                    </p>
                    <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4">
                      <span className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-outline">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href={cafeMenuLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-primary text-on-primary rounded-lg font-body text-xs font-semibold uppercase tracking-[0.1em] hover:bg-primary-container transition-all shadow-md"
              >
                LIHAT MENU LENGKAP
              </a>
            </div>
          </div>
        </section>
      </main>

      <QafotelFooter />
    </div>
  );
}
