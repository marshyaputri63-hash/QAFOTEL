"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getGalleryItems, getGalleryCategories } from "@/lib/qafotel-data";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";

export function GalleryGrid() {
  const locale = useLocale() as Locale;
  const t = useTranslations("gallery");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<number | null>(null);

  const categories = getGalleryCategories(locale);
  const items = getGalleryItems(locale);
  const visible =
    filter === "all" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-2.5 rounded-lg font-body text-xs font-semibold uppercase tracking-[0.1em] transition-all ${
              filter === cat.id
                ? "bg-primary text-on-primary"
                : "bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-on-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-display text-lg">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && visible[selected] && (
        <div
          className="fixed inset-0 z-[100] bg-on-surface/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-on-primary hover:opacity-80 transition-opacity"
            onClick={() => setSelected(null)}
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>
          <div className="relative max-w-4xl w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={visible[selected].src}
              alt={visible[selected].caption}
              fill
              className="object-cover"
            />
          </div>
          <p className="absolute bottom-8 text-on-primary font-display text-xl text-center w-full">
            {visible[selected].caption}
          </p>
        </div>
      )}
    </>
  );
}
