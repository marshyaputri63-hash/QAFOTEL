import { QafotelHeader } from "@/components/qafotel-header";
import { QafotelFooter } from "@/components/qafotel-footer";
import { GalleryGrid } from "@/components/gallery-grid";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream font-body text-olive">
      <QafotelHeader />

      <header className="px-5 pb-4 pt-10 text-center">
        <h1 className="font-display mb-2.5 text-4xl text-olive">
          Visual Sanctuary
        </h1>
        <p className="mx-auto max-w-[500px] text-sm text-[#666]">
          Explore the intersection of luxury living and botanical serenity.
          Every corner of Qafotel is designed for peace.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-5 pt-4 md:px-8">
        <GalleryGrid />
      </main>

      <QafotelFooter />
    </div>
  );
}
