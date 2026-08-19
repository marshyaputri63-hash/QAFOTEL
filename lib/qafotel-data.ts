/**
 * Shared data for Qafotel Boutique — bilingual (EN/ID).
 */

import type { Locale } from "@/i18n/routing";

// ── Contact & WhatsApp ──
export const contactInfo = {
  address: "JL. Ruhui Rahayu",
  phone: "+6281241087024",
  phoneRaw: "6281241087024",
  email: "hello@qafotel.com",
  whatsappLink: "https://wa.me/6281241087024",
};

// ── Google Drive Menu Link ──
export const cafeMenuLink =
  "https://drive.google.com/drive/folders/13M3B1qtSCWD29Jl7Ru7jrqlNJcGCq50T?usp=sharing";

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
  priceRupiah: number;
  image: string;
  carousel: string[];
};

const roomsEn: Room[] = [
  {
    slug: "leaf",
    name: "The Leaf Room",
    tag: "Cozy & Green",
    size: "30 sqm",
    guests: "2 Adults",
    bed: "Queen",
    view: "Garden View",
    description:
      "A cozy green retreat wrapped in natural textures, perfect for a peaceful night surrounded by garden views.",
    amenities: ["Free WiFi", "Work Desk", "AC", "Garden View"],
    features: [
      "30 sqm Living Space",
      "Queen Size Bed",
      "Garden View",
      "Dedicated Workspace",
    ],
    priceRupiah: 1300000,
    image: "/images/leaf.jpeg",
    carousel: ["/images/leaf.jpeg"],
  },
  {
    slug: "oase",
    name: "The Oase Room",
    tag: "Best View",
    size: "45 sqm",
    guests: "2 Adults",
    bed: "King",
    view: "Panoramic View",
    description:
      "Our most spacious room with a breathtaking panoramic view — more room to breathe, and the best scenery in the house.",
    amenities: ["Free WiFi", "Mini Bar", "AC", "Panoramic View"],
    features: [
      "45 sqm Living Space",
      "King Size Orthopedic Bed",
      "Panoramic View Balcony",
      "Dedicated Workspace",
    ],
    priceRupiah: 1850000,
    image: "/images/room-oase.jpeg",
    carousel: ["/images/room-oase.jpeg"],
  },
];

const roomsId: Room[] = [
  {
    slug: "leaf",
    name: "The Leaf Room",
    tag: "Nyaman & Hijau",
    size: "30 sqm",
    guests: "2 Dewasa",
    bed: "Queen",
    view: "Pemandangan Taman",
    description:
      "Retret hijau yang nyaman dengan tekstur alami, cocok untuk malam yang tenang dengan pemandangan taman.",
    amenities: ["WiFi Gratis", "Meja Kerja", "AC", "Pemandangan Taman"],
    features: [
      "Ruang 30 sqm",
      "Tempat Tidur Queen",
      "Pemandangan Taman",
      "Ruang Kerja Khusus",
    ],
    priceRupiah: 1300000,
    image: "/images/leaf.jpeg",
    carousel: ["/images/leaf.jpeg"],
  },
  {
    slug: "oase",
    name: "The Oase Room",
    tag: "Pemandangan Terbaik",
    size: "45 sqm",
    guests: "2 Dewasa",
    bed: "King",
    view: "Pemandangan Panorama",
    description:
      "Kamar kami yang paling luas dengan pemandangan panorama yang menakjubkan — lebih banyak ruang untuk bernapas, dan pemandangan terbaik di rumah.",
    amenities: ["WiFi Gratis", "Mini Bar", "AC", "Pemandangan Panorama"],
    features: [
      "Ruang 45 sqm",
      "Tempat Tidur King Ortopedik",
      "Balkon Pemandangan Panorama",
      "Ruang Kerja Khusus",
    ],
    priceRupiah: 1850000,
    image: "/images/room-oase.jpeg",
    carousel: ["/images/room-oase.jpeg"],
  },
];

export function getRooms(locale: Locale): Room[] {
  return locale === "id" ? roomsId : roomsEn;
}

// ── Cafe Menu ──
export type MenuSection = {
  id: string;
  title: string;
  items: { name: string; price: string; desc: string; image: string }[];
};

const cafeMenuEn: MenuSection[] = [
  {
    id: "drinks",
    title: "Specialty Drinks",
    items: [
      {
        name: "Matcha Garden Latte",
        price: "Rp 65.000",
        desc: "Premium ceremonial grade matcha with house-made lavender syrup and oat milk.",
        image: "/images/cafe-interior.jpeg",
      },
      {
        name: "Rosemary Cold Brew",
        price: "Rp 55.000",
        desc: "12-hour cold brew infused with fresh rosemary and a touch of organic honey.",
        image: "/images/cafe-interior.jpeg",
      },
    ],
  },
  {
    id: "pastries",
    title: "Artisanal Pastries",
    items: [
      {
        name: "Honey Thyme Scone",
        price: "Rp 40.000",
        desc: "Flaky, buttery scone glazed with local honey and wild mountain thyme.",
        image: "/images/cafe-interior.jpeg",
      },
      {
        name: "Pistachio Rose Roll",
        price: "Rp 50.000",
        desc: "Soft dough filled with crushed pistachios and a delicate rosewater icing.",
        image: "/images/cafe-interior.jpeg",
      },
    ],
  },
  {
    id: "workspace",
    title: "Workspace Access",
    items: [
      {
        name: "Greenhouse Nook",
        price: "Rp 175.000/hari",
        desc: "A quiet, plant-filled corner with high-speed WiFi, power outlets, and one complimentary drink.",
        image: "/images/cafe-interior.jpeg",
      },
    ],
  },
];

const cafeMenuId: MenuSection[] = [
  {
    id: "drinks",
    title: "Minuman Spesial",
    items: [
      {
        name: "Matcha Garden Latte",
        price: "Rp 65.000",
        desc: "Matcha kelas upacara premium dengan sirup lavender buatan rumah dan susu oat.",
        image: "/images/cafe-interior.jpeg",
      },
      {
        name: "Rosemary Cold Brew",
        price: "Rp 55.000",
        desc: "Cold brew 12 jam yang diinfus rosemary segar dan sedikit madu organik.",
        image: "/images/cafe-interior.jpeg",
      },
    ],
  },
  {
    id: "pastries",
    title: "Pastry Artisan",
    items: [
      {
        name: "Honey Thyme Scone",
        price: "Rp 40.000",
        desc: "Scone renyah dan mentega dengan glasir madu lokal dan thyme gunung liar.",
        image: "/images/cafe-interior.jpeg",
      },
      {
        name: "Pistachio Rose Roll",
        price: "Rp 50.000",
        desc: "Adonan lembut berisi pistachio cincang dan icing air mawar yang halus.",
        image: "/images/cafe-interior.jpeg",
      },
    ],
  },
  {
    id: "workspace",
    title: "Akses Ruang Kerja",
    items: [
      {
        name: "Greenhouse Nook",
        price: "Rp 175.000/hari",
        desc: "Sudut tenang penuh tanaman dengan WiFi cepat, stopkontak, dan satu minuman gratis.",
        image: "/images/cafe-interior.jpeg",
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
  category: "hotel" | "cafe" | "garden";
};

const galleryCategoriesEn = [
  { id: "all", label: "All Spaces" },
  { id: "hotel", label: "Hotel Rooms" },
  { id: "cafe", label: "Jardin Coffee" },
  { id: "garden", label: "Gardens" },
] as const;

const galleryCategoriesId = [
  { id: "all", label: "Semua Ruang" },
  { id: "hotel", label: "Kamar Hotel" },
  { id: "cafe", label: "Jardin Coffee" },
  { id: "garden", label: "Taman" },
] as const;

export function getGalleryCategories(locale: Locale) {
  return locale === "id" ? galleryCategoriesId : galleryCategoriesEn;
}

const galleryItems: GalleryItem[] = [
  { src: "/images/gallery-room.jpeg", caption: "Main Entrance", category: "hotel" },
  { src: "/images/gallery-sunroom.jpeg", caption: "The Botanical Sunroom", category: "cafe" },
  { src: "/images/gallery-room.jpeg", caption: "Room Detail", category: "hotel" },
  { src: "/images/cafe-interior.jpeg", caption: "Morning Brew", category: "cafe" },
  { src: "/images/gallery-sunroom.jpeg", caption: "Botanical Plants", category: "garden" },
  { src: "/images/gallery-room.jpeg", caption: "Evening Lighting", category: "garden" },
];

export function getGalleryItems(_locale: Locale): GalleryItem[] {
  return galleryItems;
}
