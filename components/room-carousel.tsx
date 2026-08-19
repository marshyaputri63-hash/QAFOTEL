"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function RoomCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const t = useTranslations();

  if (images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden ambient-shadow">
      <Image
        src={images[index]}
        alt={`Room image ${index + 1}`}
        fill
        className="object-cover transition-opacity duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label={t("previousImage")}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label={t("nextImage")}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface hover:bg-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={t("goToImage", { n: i + 1 })}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-olive" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
