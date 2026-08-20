/**
 * Shared data for Qafotel Boutique — Organic Elegance design system.
 * Rooms, cafe menu, gallery, and contact info.
 */

import type { Locale } from "@/i18n/routing";

// ── Contact & WhatsApp ──
export const contactInfo = {
  address: "JL. Ruhui Rahayu",
  phone: "+6281241087024",
  phoneRaw: "6281241087024",
  email: "concierge@qafotel.com",
  whatsappLink: "https://wa.me/6281241087024",
};

// ── Google Drive Menu Link ──
export const cafeMenuLink =
  "https://drive.google.com/file/d/1F7W8hRoodqrUizsu6_Z--1fF5B_ETI9f/view?usp=drivesdk";

// ── AIDA Design Image URLs ──
const images = {
  // Hero / landing
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqf4caHpqftKcZsFX4bHMoDA3aZGwVOkcrnK5L8OFJONm--FIEzu7RZ8Q9prSOK1GbaVDbPOQTB9htSzZqbINOdWF_9N-OAUOy5koxr6JNCs-80wzzPzZPtIGBVjwxAttVa-LCptbBmgQZZuI3XtlwS-x2pfSKJdUGfJ7x18NPesHYvQ3JHf0Usp2nC6ske5Cxc8O5Fz2ohHTpTGXVETlIj2-mjdy1_D3nPApYFPmulUXqIjtnMG6VVjMeI4GEoXgkTU0",
  lobby: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDQxwsKYDht56-Qpj4hZ05-pIGr8lFsdd9AEbQrouJb6jGRaieisSJiVQg9W1NLtotstwJL4O_knKgwuYYdXMCzFEkQFQa_OlLJVcFb1rHOIDNeILsR6ujRgwUltu1e8S3e_BbRbjdbbPQNyQZsg_JK_hk7XKI3vIY_hfHB3mCPlGUaHQaZpc6c9sY-EuUcgU99w0CUfBKdJ22mJ2SmHxfBeGcMwDh8kY8TL1KEIf28Hf-GoLKXKmBWg",
  // Room images
  deluxe: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhvvu8-WvIv8KlQwWt-zfhTK_d6HgLhvaNZ1DqdhWydYWUP_ATM67GyN5V1aavdJKzYOGLZAkBD9oJZt6QW201YZMFazEVQGvKc-AjppPIyOAOWwa10U9rgGZxrJRruHskve3IJKCqqydrlqEkOcLBv15g2_b8snCneDcnGpc9nIaM3-s-C4GKq1i6JLMFNP3613uwgavRxBxyNROg50-OZ_4plfgFpmvxyUCVeTWXmcKx27UgEkxh3A",
  garden: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgn6a2-qNJQuTK8T2cdHzMj9Uao3CzMSz9vUx29JUIJq_U5ZA67Yo4h87kG9YZMGoVlfRO4QqXJjclkFnw07nlk-PJBwqZOpQnjGIvjDXFAKWceJEAXZYBdmT_OzB8tOg88-8QmNtLnIYwjplUD7eDQPKLQQNRm-tdVgaSnUFTEKvLclCIdxtiubKA5y0g8O3i9rg1Fn-hVyQOCgk4nVIW25yWdIdQt_AR7IjscBLvqiwROYFCT1mqAw",
  executive: "https://lh3.googleusercontent.com/aida-public/AB6AXuANbcWxoj8r-r5j5zEFdco8cX4jMkTYOqsXhUI375rgivu2gMRLbAAv-9Rhdqq7ziExKvqqDj1NitRgqn7CZI5XKLgz1_tGj_KnLUwgmQ0h6MWlw4aKMDh34Xm5xUVVIMUQpf5YVXcY_bEGjaecetVdK2gAcVZdcanWCltUttVvxdU1HVI66LqI5yPCAZo3Oi8hp-mB_ba4AT5mNzmRiOnuRjA7BQwvOBdiqD3FxkD0D_XRtZO2qYsYIg",
  premium: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjkROKY1R2WEooZtZZUrmgXYWP4h-7Owhs0yWpobDmsI5BpG15IBLg-ubmjZmHRYrzAUDrQXo4j6z74zlRfHQd3GXxRbNloLkBlK-KLYzcud2UObbhinl3GAB95cR12xZbFmAe_JLROxcG3I6IMkQ6motH-0AL61AJAooqSXYa0eM0bB6vD0C68N3Ge6Clz7TDG6K2Jfac071r3MVwoyIitDYG73FM-wb4mA2TwAplaSWByTvUmQVPew",
  suite: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBLodGJhlGy7G1hwqD_kExyX1Tae96AdSO7d2r410hO5Xgz5zc_I_i8ZAhdXqSIuKSveJd5_rZfXnAcUX9McPiND9SpRHovKbtVumOM8nM44N5dHOSGTgeGTmjtqkqbefLX1nZhV5cIOSU5BzwnCdCe9Amf0LJjpvN3cVxBQqftTcXkU-R6tMD-BUymIf6g4LSG-VeXX7PIWhf5RS5L9alLqJNq_0FmE9OzI5KmU0zqhKihR9ZGu4tpA",
  gardenRoom: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEoUoAkEehzGcf8-MkoHA0GfLvPSjUBmPkm13NuM3nx8Dtfsd2G3o5LGWraxw8woEgNkbuqyoUmubxUGeb-qVRFI1ht1MiSNgGkW1cckSAxOY9DfSwKmuF5x6WepAr9aSiOhi7WIygNbB6PHrSE-OUaHwE30BAfKyK33CTdif3rM-vVg1uwwVBjjMAU3chlCsFkYI-oUMEFZmz24yipHvXpacGkNwl5Gtxn7At3J36r-lRMMoHKhFt2g",
  deluxeRoom: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxh6tu-My2S4qWfFy1sVIykovfLoqXOuWQ8-yzMFglc3Vlzd4RgcLZarbxPepmUW37b4YGjELGZX1g00AkktfLMHbBBbrkFSynR0uhyuagdhjpvUg6-R6ZeiG-pKMLA_tTRBI8pihgDMZydv6mD3QrSWGFDUPW8VrxT3f7eqyAtRV2bBr_VGpLntKAhdAhkYMw5AVPjQOt5HAS-leX00EdIJheO3xJcCyjMzr0HQ9dwBhYIK6cbGrnwA",
  // Cafe
  jardinExterior: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsBFB4tKVb3ohUmRJM9XxKxyM7gOrWIgSU_uOCgCXf2AWQhsB119hEQZWMBSFePHh2UOZWRUuAEQ6iyy-bkHiTgwxIom5PTh5yaswebw1k43mkqhFdqH7C3ZpFXaQKr2PToQ9FKXeBnGXwEoHb7qjCPIg1JGz-kh8oMs4oZlU5P3ljtEyhaxAW5BSjF3QQAO1uBXtj4_Hq4Vp472utUJ9OO88mR3hP9v_cvroVtYAp7fRNWONnkXj_4uuwPMq6VTcQ7Y8",
  jardinLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYXAasmGiSN5SrTqAA3E9jWozElwNwlZsXuwSKJfBcDrklxFmzFh198w7o6ozuGnU4eWV_-fSWTgIA5FUmzCMe56-C9Pw1nInjQtII_AhuepVkiSP5tJ9DUDkauqbQ6kiHDbcjPNnybcP2KH5if5b3zcDKqyG8H4VoG7XdxClUnhflGbjDvRCGBJqKiLhYx7v_GHZ3KYQ-QWucbEIuO8zvA-71UAVzbXw0ZG8Qby2AC4SY0Y-m5rVrRQ",
  matcha: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6UmI5YQJHmwoHWMevuqbke18Igkm3UFEpOZ5GM5aiiqQVgdDMuathIKdceie94e7KX7gvAywOmDo2datawVqODKG-wV_yMCe-zeCJoXyApOG-ArbnyR4my8rU_3D84u7Y1Q1Z9cZtNa_DS46Et6b3ZNJDtoZXV3fd_DhR6-NAzQWM2faIWVAtyzv9uBbKNdzfNA7xQUrBcQ3V5xVzQ5Af5m7jKdCvlcmEspMufQnhn5mvfxSfhsFhyw",
  pourover: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2fNSnk-v3uTDw-QqFP_g2tAYB-R3aHPPJG2izZr6FpqclL4BhEWL76UpFtfu76F_WDW5uOsop7-bxe5Np0Uvb4QHzb7yiUPUUbafDnfbh7NcNM9w81X0pRiqc81QX3vtIHvNFh-tw7GZEcGX0195Aunfhkl6zvvXUCI2bxufAg3XqRP3ubQ_JIUm24rdCOweyf_9QthA2ZaxBHUOW5KzVNApZwap_Lff-O9Ehr8vYEm9gBErjNCbyXA",
  avotoast: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkFTOUy-HHdSJsVMaeNGRSeiQPa-sTkV36OW1lXIjJV4i9rqeJ94CLAxulh0Lbe_1I4SltjK98VEzYv0CxiwJEnOCdtTdp33nVbK8Inqvck0i4s16tw8p4ngaHGufd2JoZoRZg3xm11eTy8-MEOFaXf7voEvb4luseoh0veqn0sOwa_q1PbVngN_p2WANku4nYYD4efCK64lU21Kmv-nAzts8xenScPoXFlNzqJi5sICUoYE5YUixEdg",
  cafeLatte: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYCQ6CZ1GhKcDaoMbZW-KeZ-N-BukILdCebt9h2YlpvYv4e4HnGMrk5f3TCGu0nlg2ndMFc-A-xn6bwbDNpf9I5C2lyJAH1aQc6tA9FCIEPO2snvScFcXBc1x0gmAxn4B3O1Iqc9nrZjPojJ3HGJxYrLmU9vumg7iSGoAv8pzIhvDbrKzstYtrsa3GFNMKf8iSE0UmrnJ0ja_sC0-gnqpc_szlxOt3AGLrNYtuqNdZZcL8pZQcp2sgkw",
  cafeInterior: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3qdHYljKpk_whz6uEqLUFtoLNx6owNPIOC52eCegIfPHeBRA6B96y4_q_Y2ZhvVp1-xM4fVvQ9YKRL2xmwhzRWu0i2E448g-IvwWdGSpUtNgRsxcGM90D4qv7O9BtFLDL5eg9fG8E8XttYFgescfnpIafdoGoikt2u32gih8eGpuKoUTSjzIm6U4iKDW8PoXnf0SxF1Ir9ho5Danhu2nBglGTLQKajd7MICKw_SUSSyLdZF888khhLw",
  // Gallery
  galleryLobby: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaBNGLu2ZBPpzxzirc2GaD4UI_PaJHvUQIkwWysaw5i_kWopsYs8jlYx0Bz8IU7FawfIAMibx5sY3AentgiaG-DTdOWn4amkc8IJgoN6WIgLZ7Gv74hSzW1vcZ-lS_SgVa6W9UqTkPSgwHSFgCHmT5C3-Ct9sdqcp_JNrw5KLLW1p7RhuMe637f1LosPAuRKK_7o3LO_P2ae8zucbIJZoitpPIzfrGBbPYYrYH83jKUnb2mpeVdQmUEA",
  galleryLinen: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4Suaq0wTP7ZjSSaQx4YrQ-tF7hZaMMMW5p526mYXsLUs28XakR7QTaWt6QzBpRzMwr9qluxf-gTke3D9B5iMjGfgsyDrg6LodaYUQSmD4_IeABDOESll-w4w_tFLR9-qTBn4AnjnRzQQDmjaZ8mOIe_Qlhg7I641SlBLhBkDLK4jXv84AAwUG2JnTBTQiyVEkOG0h36aiqwA4a78EbD05qLfpVURR1f5Ik1ySgJXbxTTrn4N0gNFu6w",
  galleryPool: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQki_HOZES_5pWia0IYrsnIhbcV818toz7EXp4v7rAB5MANnbk5jJIwJN2QBPgDZkDbUtic_nvEmsGM-KJ5qZsrTRb9jU0BIzJYJXpOfLelO6wNVVnLFLMlaqXjOEJbxt0jPEX9PPEdt_1eG3NnOuudOjzJI3yESQjWet8obd7xWSKtXzqe03F5da20B-5R6lSkbd1eJKdzhejt5OigNkrmbFoooE4H9uo19S0wRK9Q6wgzoty1RGWkQ",
  galleryCourtyard: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv_FXbIECINJeVik8HVQXOFYNI-EEx2UW8iqZcCFzyDnjxksPe8jMXh9Ir54DyXgLwqOVNwKUjonktaXPm7zbyBpOikeBxatnEZr4legawI2dQke9gdDpAa0QWTp3G_i6qyqxYAs_IiLs6_i7Swy9fAPYUMK8CIagI36zcuozCWxkPz5rCkZxohuPhff2pPkHtybFtIHpWFjUH69k2n8AOzgTyRYXmKpjMvLKdCZEojajLdR_lXSB3uw",
  // Spa / Wellness
  spa: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmimwAYPwJY4PUSMXqkufpUY6KWF1OWOHqyuo_FcDvv_2WkKGqqdzJjQHJIV8fCNHz0HDSHDPPItrNoxgQLVHu58LlKusrCdODiQ1IIVvYmauwiCxBaGFPKdN3xiB7Oe96TnrALhaWOKoB5tbiVY4Jv3fIUNqezez6ufyhEKyqwI6gi0BktcbPeBYgX_SzgO-4AFA-wX75L0uN7pvPbAmk9pik8gR7jFze3AoXe5XHG3tN3-EqC6_f0A",
};

// ── Rooms ──
export type Room = {
  slug: string;
  name: string;
  tag: string;
  size: string;
  guests: string;
  bed: string;
  view: string;
  description: string;
  amenities: string[];
  features: string[];
  priceUSD: number;
  rating: number;
  image: string;
  carousel: string[];
};

const roomsEn: Room[] = [
  {
    slug: "deluxe",
    name: "Deluxe Room",
    tag: "Cozy Comfort",
    size: "32 sqm",
    guests: "2 Adults",
    bed: "Queen",
    view: "Garden View",
    description:
      "Cozy comfort with modern essentials. Perfect for short stays and mindful retreats.",
    amenities: ["Free WiFi", "King Bed", "Espresso Machine", "Garden View"],
    features: [
      "32 sqm Living Space",
      "Queen Size Bed",
      "Garden View",
      "Dedicated Workspace",
    ],
    priceUSD: 129,
    rating: 4.9,
    image: images.deluxe,
    carousel: [images.deluxe, images.deluxeRoom],
  },
  {
    slug: "garden",
    name: "Garden Suite",
    tag: "Best View",
    size: "45 sqm",
    guests: "2 Adults",
    bed: "King",
    view: "Private Terrace",
    description:
      "Wake up to garden views and fresh air. Features a private terrace for ultimate relaxation.",
    amenities: ["Terrace", "Garden View", "Deep Tub", "King Bed"],
    features: [
      "45 sqm Living Space",
      "King Size Bed",
      "Private Terrace",
      "Deep Soaking Tub",
    ],
    priceUSD: 189,
    rating: 5.0,
    image: images.garden,
    carousel: [images.garden, images.gardenRoom],
  },
  {
    slug: "executive",
    name: "Executive Suite",
    tag: "Elevated Luxury",
    size: "65 sqm",
    guests: "2 Adults",
    bed: "King",
    view: "Panoramic View",
    description:
      "Extra space. Elevated experience. Features a separate lounge area and panoramic vistas.",
    amenities: ["Lounge Area", "Panoramic View", "Premium Service", "King Bed"],
    features: [
      "65 sqm Living Space",
      "Separate Lounge",
      "Panoramic View",
      "Premium Service",
    ],
    priceUSD: 289,
    rating: 4.9,
    image: images.executive,
    carousel: [images.executive, images.premium],
  },
];

const roomsId: Room[] = [
  {
    slug: "deluxe",
    name: "Deluxe Room",
    tag: "Nyaman & Hangat",
    size: "32 sqm",
    guests: "2 Dewasa",
    bed: "Queen",
    view: "Pemandangan Taman",
    description:
      "Kenyamanan modern yang hangat. Sempurna untuk menginap singkat dan retret mindful.",
    amenities: ["WiFi Gratis", "Tempat Tidur King", "Mesin Espresso", "Pemandangan Taman"],
    features: [
      "Ruang 32 sqm",
      "Tempat Tidur Queen",
      "Pemandangan Taman",
      "Ruang Kerja Khusus",
    ],
    priceUSD: 129,
    rating: 4.9,
    image: images.deluxe,
    carousel: [images.deluxe, images.deluxeRoom],
  },
  {
    slug: "garden",
    name: "Garden Suite",
    tag: "Pemandangan Terbaik",
    size: "45 sqm",
    guests: "2 Dewasa",
    bed: "King",
    view: "Teras Pribadi",
    description:
      "Bangun dengan pemandangan taman dan udara segar. Fitur teras pribadi untuk relaksasi maksimal.",
    amenities: ["Teras", "Pemandangan Taman", "Bak Mandi Dalam", "Tempat Tidur King"],
    features: [
      "Ruang 45 sqm",
      "Tempat Tidur King",
      "Teras Pribadi",
      "Bak Mandi Dalam",
    ],
    priceUSD: 189,
    rating: 5.0,
    image: images.garden,
    carousel: [images.garden, images.gardenRoom],
  },
  {
    slug: "executive",
    name: "Executive Suite",
    tag: "Kemewahan Tinggi",
    size: "65 sqm",
    guests: "2 Dewasa",
    bed: "King",
    view: "Pemandangan Panorama",
    description:
      "Lebih banyak ruang. Pengalaman yang ditingkatkan. Fitur ruang tamu terpisah dan pemandangan panorama.",
    amenities: ["Ruang Tamu", "Pemandangan Panorama", "Layanan Premium", "Tempat Tidur King"],
    features: [
      "Ruang 65 sqm",
      "Ruang Tamu Terpisah",
      "Pemandangan Panorama",
      "Layanan Premium",
    ],
    priceUSD: 289,
    rating: 4.9,
    image: images.executive,
    carousel: [images.executive, images.premium],
  },
];

export function getRooms(locale: Locale): Room[] {
  return locale === "id" ? roomsId : roomsEn;
}

// ── Cafe Menu ──
export type MenuSection = {
  id: string;
  title: string;
  items: { name: string; price: string; desc: string; image: string; category: string; signature?: boolean }[];
};

const cafeMenuEn: MenuSection[] = [
  {
    id: "signatures",
    title: "Our Brews & Bites",
    items: [
      {
        name: "Botanical Matcha",
        price: "$6.50",
        desc: "Ceremonial grade matcha whisked with oat milk and a hint of house-made vanilla bean syrup.",
        image: images.matcha,
        category: "Cold Beverage",
        signature: true,
      },
      {
        name: "Single Origin Pour Over",
        price: "$5.00",
        desc: "Rotating selection of lightly roasted beans, meticulously brewed to highlight distinct flavor profiles.",
        image: images.pourover,
        category: "Hot Beverage",
      },
      {
        name: "Artisan Avo Toast",
        price: "$8.50",
        desc: "Smashed avocado on toasted sourdough, topped with microgreens, radish, and a drizzle of chili oil.",
        image: images.avotoast,
        category: "Light Bite",
      },
    ],
  },
];

const cafeMenuId: MenuSection[] = [
  {
    id: "signatures",
    title: "Kreasi Kami",
    items: [
      {
        name: "Botanical Matcha",
        price: "Rp 95.000",
        desc: "Matcha kelas upacara premium dengan susu oat dan sedikit sirup vanila buatan rumah.",
        image: images.matcha,
        category: "Minuman Dingin",
        signature: true,
      },
      {
        name: "Single Origin Pour Over",
        price: "Rp 75.000",
        desc: "Rotasi biji kopi panggang ringan, diseduh dengan teliti untuk menonjolkan profil rasa yang unik.",
        image: images.pourover,
        category: "Minuman Panas",
      },
      {
        name: "Artisan Avo Toast",
        price: "Rp 125.000",
        desc: "Alpukat yang dihaluskan di atas roti sourdough panggang, ditambah microgreens, radish, dan minyak cabai.",
        image: images.avotoast,
        category: "Camilan Ringan",
      },
    ],
  },
];

export function getCafeMenu(locale: Locale): MenuSection[] {
  return locale === "id" ? cafeMenuId : cafeMenuEn;
}

// ── Gallery ──
export type GalleryItem = {
  src: string;
  caption: string;
  category: "hotel" | "cafe" | "garden" | "wellness";
};

const galleryCategoriesEn = [
  { id: "all", label: "All Spaces" },
  { id: "hotel", label: "Hotel Rooms" },
  { id: "cafe", label: "Jardin Coffee" },
  { id: "garden", label: "Gardens" },
  { id: "wellness", label: "Wellness" },
] as const;

const galleryCategoriesId = [
  { id: "all", label: "Semua Ruang" },
  { id: "hotel", label: "Kamar Hotel" },
  { id: "cafe", label: "Jardin Coffee" },
  { id: "garden", label: "Taman" },
  { id: "wellness", label: "Wellness" },
] as const;

export function getGalleryCategories(locale: Locale) {
  return locale === "id" ? galleryCategoriesId : galleryCategoriesEn;
}

const galleryItems: GalleryItem[] = [
  { src: images.galleryLobby, caption: "The Grand Foyer", category: "hotel" },
  { src: images.galleryLinen, caption: "Artisan Details", category: "cafe" },
  { src: images.galleryPool, caption: "Thermal Pools", category: "wellness" },
  { src: images.galleryCourtyard, caption: "Interior Courtyard", category: "garden" },
  { src: images.cafeInterior, caption: "Jardin Coffee Interior", category: "cafe" },
  { src: images.spa, caption: "Subterranean Spa", category: "wellness" },
  { src: images.lobby, caption: "The Lobby", category: "hotel" },
  { src: images.cafeLatte, caption: "Morning Brew", category: "cafe" },
];

export function getGalleryItems(_locale: Locale): GalleryItem[] {
  return galleryItems;
}
