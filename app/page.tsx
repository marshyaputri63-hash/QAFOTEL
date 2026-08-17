import Image from "next/image";
import Link from "next/link";
import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream font-body text-olive">
      <QafotelHeader />

      {/* Hero */}
      <section className="relative flex h-[500px] flex-col items-center justify-center text-center text-cream">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          alt="Qafotel interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative px-6">
          <h1 className="font-display text-5xl md:text-6xl">
            Where Nature Meets Comfort
          </h1>
          <p className="mt-3 font-hand text-3xl">
            A sanctuary of rest and botanical delights
          </p>
          <Link
            href="/rooms"
            className="mt-8 inline-block rounded-full bg-olive px-10 py-4 font-bold text-cream transition-transform hover:scale-105"
          >
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:px-12">
        <h2 className="font-display mb-5 text-4xl">Welcome to Qafotel</h2>
        <p className="text-lg leading-relaxed text-[#444]">
          Experience the unique harmony between a boutique hotel and Jardin Coffee. Whether you&apos;re seeking a peaceful night&apos;s
          rest in our curated rooms or a vibrant workspace surrounded by
          greenery, Qafotel is your home in the heart of the city.
        </p>
      </section>

      {/* Feature grid */}
      <section className="grid gap-10 bg-white px-6 py-12 md:grid-cols-2 md:px-12">
        <div className="overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(85,99,43,0.1)]">
          <div className="relative h-[350px]">
            <Image
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
              alt="Hotel Room"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white p-8">
            <h3 className="font-display mb-3 text-2xl">Curated Living</h3>
            <p className="mb-4 text-[#444]">
              Discover our two signature room types, designed for ultimate
              relaxation with organic textures and modern amenities.
            </p>
            <Link
              href="/rooms"
              className="font-bold text-olive hover:text-olive-light"
            >
              Explore Rooms &rarr;
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(85,99,43,0.1)]">
          <div className="relative h-[350px]">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
              alt="Jardin Coffee"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white p-8">
            <h3 className="font-display mb-3 text-2xl">Jardin Coffee</h3>
            <p className="mb-4 text-[#444]">
              Sip on artisan coffee and enjoy fresh pastries in our
              greenhouse-inspired café, the perfect spot for work or leisure.
            </p>
            <Link
              href="/cafe"
              className="font-bold text-olive hover:text-olive-light"
            >
              View Menu &rarr;
            </Link>
          </div>
        </div>
      </section>

      <QafotelFooter />
    </div>
  );
}
