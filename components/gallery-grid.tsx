"use client";

import Image from "next/image";
import { useState } from "react";
import {
  galleryCategories,
  galleryItems,
} from "@/lib/qafotel-data";

type CategoryId = (typeof galleryCategories)[number]["id"];

export function GalleryGrid() {
  const [category, setCategory] = useState<CategoryId>("all");
  const [selected, setSelected] = useState<number | null>(null);

  const items =
    category === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  return (
    <>
      {/* Category filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2.5">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`rounded-full border border-olive px-4 py-2 text-sm transition-colors ${
              category === cat.id
                ? "bg-olive text-white"
                : "bg-transparent text-olive hover:bg-olive/10"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 gap-2.5 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            onClick={() => setSelected(index)}
            className={`group relative h-[180px] overflow-hidden rounded-xl border border-[#ddd] ${
              selected === index ? "border-2 border-olive" : ""
            }`}
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              className="object-cover transition-opacity group-hover:opacity-80"
            />
            <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-olive/80 px-2 py-2 text-left text-xs text-white transition-transform duration-300 group-hover:translate-y-0">
              {item.caption}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded bg-white/90 px-2.5 py-1 text-[10px] text-olive">
                VIEW LARGE
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-[80%] rounded-lg bg-white p-2.5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={() => setSelected(null)}
              className="absolute -right-2.5 -top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-olive text-sm text-white"
            >
              ×
            </button>
            <Image
              src={items[selected].src.replace("w=600", "w=1200")}
              alt={items[selected].caption}
              width={1200}
              height={800}
              className="h-auto w-full rounded"
            />
            <p className="mt-2.5 text-sm font-bold text-olive">
              {items[selected].caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
