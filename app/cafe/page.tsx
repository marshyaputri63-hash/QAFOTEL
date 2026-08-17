import Image from "next/image";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { cafeMenu } from "@/lib/qafotel-data";

export default function CafePage() {
  return (
    <div className="min-h-screen bg-cream font-body text-olive">
      <QafotelHeader />

      {/* Hero */}
      <section className="flex h-[250px] flex-col items-center justify-center bg-olive px-5 text-center text-cream">
        <h1 className="font-display text-4xl md:text-5xl">Botanical Café</h1>
        <p className="mt-2.5 italic opacity-90">
          Sip, Snack, and Work amidst the greenery.
        </p>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-10 md:px-8">
        {/* Category nav */}
        <div className="sticky top-[76px] z-40 mb-10 flex justify-center gap-5 bg-cream p-2.5">
          {cafeMenu.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border-2 border-olive bg-white px-6 py-2.5 font-semibold text-olive transition-all hover:bg-olive hover:text-cream"
            >
              {section.title.split(" ")[0]}
            </a>
          ))}
        </div>

        {cafeMenu.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-40">
            <h2 className="font-display mb-8 mt-12 inline-block border-b-2 border-olive pb-1 text-3xl text-olive">
              {section.title}
            </h2>
            <div className="grid gap-7 sm:grid-cols-2">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-[20px] border border-olive/10 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1.5"
                >
                  <div className="relative h-[180px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2.5 flex items-baseline justify-between">
                      <h3 className="font-display text-xl text-olive">
                        {item.name}
                      </h3>
                      <span className="font-bold text-olive">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-[#666]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="my-14 rounded-[15px] border border-dashed border-olive bg-olive/5 p-5 text-center text-sm text-olive">
          <p>
            ✨ <strong>Note for Staff:</strong> This menu is powered by our CMS.
            Prices and seasonal items can be updated in the dashboard to reflect
            real-time availability.
          </p>
        </div>
      </div>

      <QafotelFooter />
    </div>
  );
}
