import Image from "next/image";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";

const values = [
  {
    title: "Sustainability",
    desc: "We prioritize eco-friendly practices in our hotel and café operations.",
  },
  {
    title: "Community",
    desc: "A hub for local artists, plant lovers, and digital nomads alike.",
  },
  {
    title: "Comfort",
    desc: "High-end amenities wrapped in a cozy, garden-like atmosphere.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream font-body text-olive">
      <QafotelHeader />

      {/* Hero */}
      <section className="px-5 py-14 text-center">
        <h1 className="font-display mb-2.5 text-5xl md:text-6xl">
          Where Nature Meets Rest
        </h1>
        <p className="mx-auto max-w-[600px] text-lg opacity-80">
          Discover the story behind our botanical sanctuary, where every corner
          is curated for peace and organic connection.
        </p>
      </section>

      {/* Our Story */}
      <section className="flex flex-col items-center gap-10 px-5 py-14 md:flex-row md:px-10">
        <div className="flex-1">
          <h2 className="font-display mb-5 text-3xl md:text-4xl">Our Story</h2>
          <p className="text-base leading-relaxed">
            Founded in 2023, Qafotel began as a dream to merge the tranquility
            of a lush greenhouse with the comfort of a boutique hotel. We
            believe that modern travelers deserve more than just a bed—they
            deserve a breath of fresh air. Our spaces are designed to blur the
            lines between indoors and outdoors.
          </p>
        </div>
        <div className="relative h-[260px] w-full max-w-[400px] rounded-[40px] bg-olive md:h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
            alt="Botanical Interior View"
            fill
            className="rounded-[40px] object-cover"
          />
        </div>
      </section>

      {/* Mission */}
      <section className="mx-5 my-10 rounded-[100px_0_100px_0] bg-olive px-8 py-14 text-center text-cream md:mx-10">
        <h2 className="font-display mb-5 text-3xl md:text-4xl">Our Mission</h2>
        <p className="mx-auto max-w-3xl text-lg italic leading-relaxed md:text-xl">
          &ldquo;To cultivate an environment where hospitality and nature
          coexist, providing our guests with a soulful retreat that rejuvenates
          the spirit through botanical beauty and mindful service.&rdquo;
        </p>
      </section>

      {/* Botanical Style */}
      <section className="flex flex-col-reverse items-center gap-10 px-5 py-14 md:flex-row md:px-10">
        <div className="relative h-[260px] w-full max-w-[400px] rounded-[40px] bg-olive md:h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
            alt="Café Aesthetic"
            fill
            className="rounded-[40px] object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-display mb-5 text-3xl md:text-4xl">
            The Botanical Style
          </h2>
          <p className="text-base leading-relaxed">
            Our aesthetic is defined by &apos;Organic Minimalism&apos;. We use
            raw materials, earth tones, and hundreds of living plants to create
            a living, breathing architecture. Hand-drawn accents and rounded
            edges in our design reflect the fluid, imperfect beauty of the
            natural world.
          </p>
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
