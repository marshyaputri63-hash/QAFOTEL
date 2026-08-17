"use client";

import Image from "next/image";
import { useState } from "react";

export function RoomCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative mb-8 h-[300px] overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] md:h-[450px]">
      <Image
        src={images[index]}
        alt={alt}
        fill
        className="object-cover"
      />
      <button
        aria-label="Previous image"
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-olive shadow transition-colors hover:bg-white"
      >
        ‹
      </button>
      <button
        aria-label="Next image"
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-olive shadow transition-colors hover:bg-white"
      >
        ›
      </button>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2.5">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to image ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === index ? "bg-olive" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
