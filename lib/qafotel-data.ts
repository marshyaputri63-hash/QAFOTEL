/**
 * Shared data for the Qafotel public site, mirroring the wireframes in
 * documentation/wireframes. Content is provided for both locales (en/id).
 */

import type { Locale } from "@/i18n/routing";

export type Room = {
  slug: string;
  name: string;
  tag: string;
  detailTitle: string;
  badge?: string;
  size: string;
  guests: string;
  bed: string;
  description: string;
  detailDescription: string;
  amenities: string[];
  detailAmenities: { icon: string; label: string }[];
  features: string[];
  price: number;
  priceRupiah: number;
  image: string;
  carousel: string[];
};

const roomsEn: Room[] = [
  {
    slug: "leaf",
    name: "The Leaf Room",
    tag: "Leaf Room",
    detailTitle: "The Leaf Room",
    badge: "Cozy & Green",
    size: "30 sqm",
    guests: "2 Adults",
    bed: "Queen",
    description:
      "A cozy green retreat wrapped in natural textures, perfect for a peaceful night surrounded by garden views.",
    detailDescription:
      "The Leaf Room is our cozy green retreat. Wake up to soft morning light filtering through the plants, step out to a quiet garden corner, and settle into a room designed with warm wooden textures, organic cotton bedding, and everything you need for a restful stay.",
    amenities: ["Free WiFi", "Work Desk", "AC", "Garden View"],
    detailAmenities: [
      { icon: "🌿", label: "Garden Access" },
      { icon: "📶", label: "High-speed WiFi" },
      { icon: "☕", label: "Espresso Maker" },
      { icon: "❄️", label: "Climate Control" },
      { icon: "📺", label: 'Smart TV 43"' },
      { icon: "🧴", label: "Organic Toiletries" },
    ],
    features: [
      "30 sqm Living Space",
      "Queen Size Bed",
      "Garden View",
      "Dedicated Workspace",
    ],
    price: 85,
    priceRupiah: 1300000,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    carousel: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "oase",
    name: "The Oase Room",
    tag: "Oase Room",
    detailTitle: "The Oase Room",
    badge: "Best View",
    size: "45 sqm",
    guests: "2 Adults",
    bed: "King",
    description:
      "Our most spacious room with a breathtaking panoramic view — more room to breathe, and the best scenery in the house.",
    detailDescription:
      "The Oase Room is our largest and most scenic accommodation. With 45 sqm of space and a sweeping panoramic view, it is designed for guests who want extra room to relax. Floor-to-ceiling windows frame the landscape, while the king-size orthopedic bed and premium organic linens ensure a deeply restful night.",
    amenities: ["Free WiFi", "Mini Bar", "AC", "Panoramic View"],
    detailAmenities: [
      { icon: "🌄", label: "Panoramic View" },
      { icon: "📶", label: "High-speed WiFi" },
      { icon: "🛁", label: "Rainfall Shower" },
      { icon: "❄️", label: "Climate Control" },
      { icon: "📺", label: 'Smart TV 55"' },
      { icon: "🧴", label: "Organic Toiletries" },
    ],
    features: [
      "45 sqm Living Space",
      "King Size Orthopedic Bed",
      "Panoramic View Balcony",
      "Dedicated Workspace",
    ],
    price: 120,
    priceRupiah: 1850000,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    carousel: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

const roomsId: Room[] = [
  {
    slug: "leaf",
    name: "The Leaf Room",
    tag: "Leaf Room",
    detailTitle: "The Leaf Room",
    badge: "Nyaman & Hijau",
    size: "30 sqm",
    guests: "2 Dewasa",
    bed: "Queen",
    description:
      "Retret hijau yang nyaman dengan tekstur alami, cocok untuk malam yang tenang dengan pemandangan taman.",
    detailDescription:
      "Kamar Leaf adalah retret hijau kami yang nyaman. Bangunlah dengan cahaya pagi yang lembut menyaring melalui tanaman, keluar ke sudut taman yang tenang, dan beristirahat di kamar yang dirancang dengan tekstur kayu hangat, alas tidur katun organik, dan segala yang Anda butuhkan untuk istirahat.",
    amenities: ["WiFi Gratis", "Meja Kerja", "AC", "Pemandangan Taman"],
    detailAmenities: [
      { icon: "🌿", label: "Akses Taman" },
      { icon: "📶", label: "WiFi Cepat" },
      { icon: "☕", label: "Pembuat Espresso" },
      { icon: "❄️", label: "Kontrol Suhu" },
      { icon: "📺", label: 'Smart TV 43"' },
      { icon: "🧴", label: "Perlengkapan Mandi Organik" },
    ],
    features: [
      "Ruang 30 sqm",
      "Tempat Tidur Queen",
      "Pemandangan Taman",
      "Ruang Kerja Khusus",
    ],
    price: 85,
    priceRupiah: 1300000,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    carousel: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "oase",
    name: "The Oase Room",
    tag: "Oase Room",
    detailTitle: "The Oase Room",
    badge: "Pemandangan Terbaik",
    size: "45 sqm",
    guests: "2 Dewasa",
    bed: "King",
    description:
      "Kamar kami yang paling luas dengan pemandangan panorama yang menakjubkan—lebih banyak ruang untuk bernapas, dan pemandangan terbaik di rumah.",
    detailDescription:
      "Kamar Oase adalah akomodasi terbesar dan paling indah kami. Dengan luas 45 sqm dan pemandangan panorama yang luas, kamar ini dirancang untuk tamu yang menginginkan ruang ekstra untuk bersantai. Jendela setinggi langit-langit membingkai lanskap, sementara tempat tidur king ortopedik dan alas tidur organik premium memastikan malam yang sangat nyenyak.",
    amenities: ["WiFi Gratis", "Mini Bar", "AC", "Pemandangan Panorama"],
    detailAmenities: [
      { icon: "🌄", label: "Pemandangan Panorama" },
      { icon: "📶", label: "WiFi Cepat" },
      { icon: "🛁", label: "Shower Hujan" },
      { icon: "❄️", label: "Kontrol Suhu" },
      { icon: "📺", label: 'Smart TV 55"' },
      { icon: "🧴", label: "Perlengkapan Mandi Organik" },
    ],
    features: [
      "Ruang 45 sqm",
      "Tempat Tidur King Ortopedik",
      "Balkon Pemandangan Panorama",
      "Ruang Kerja Khusus",
    ],
    price: 120,
    priceRupiah: 1850000,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    carousel: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export function getRooms(locale: Locale): Room[] {
  return locale === "id" ? roomsId : roomsEn;
}

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
        price: "$5.50",
        desc: "Premium ceremonial grade matcha with house-made lavender syrup and oat milk.",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Rosemary Cold Brew",
        price: "$4.75",
        desc: "12-hour cold brew infused with fresh rosemary and a touch of organic honey.",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "pastries",
    title: "Artisanal Pastries",
    items: [
      {
        name: "Honey Thyme Scone",
        price: "$3.50",
        desc: "Flaky, buttery scone glazed with local honey and wild mountain thyme.",
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Pistachio Rose Roll",
        price: "$4.25",
        desc: "Soft dough filled with crushed pistachios and a delicate rosewater icing.",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "workspace",
    title: "Workspace Access",
    items: [
      {
        name: "Greenhouse Nook",
        price: "$15/day",
        desc: "A quiet, plant-filled corner with high-speed WiFi, power outlets, and one complimentary drink.",
        image:
          "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=600&q=80",
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
        price: "$5.50",
        desc: "Matcha kelas upacara premium dengan sirup lavender buatan rumah dan susu oat.",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Rosemary Cold Brew",
        price: "$4.75",
        desc: "Cold brew 12 jam yang diinfus rosemary segar dan sedikit madu organik.",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "pastries",
    title: "Pastry Artisan",
    items: [
      {
        name: "Honey Thyme Scone",
        price: "$3.50",
        desc: "Scone renyah dan mentega dengan glasir madu lokal dan thyme gunung liar.",
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Pistachio Rose Roll",
        price: "$4.25",
        desc: "Adonan lembut berisi pistachio cincang dan icing air mawar yang halus.",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "workspace",
    title: "Akses Ruang Kerja",
    items: [
      {
        name: "Greenhouse Nook",
        price: "$15/hari",
        desc: "Sudut tenang penuh tanaman dengan WiFi cepat, stopkontak, dan satu minuman gratis.",
        image:
          "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

export function getCafeMenu(locale: Locale): MenuSection[] {
  return locale === "id" ? cafeMenuId : cafeMenuEn;
}

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

const galleryItemsEn: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    caption: "Main Entrance",
    category: "hotel",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
    caption: "The Botanical Sunroom",
    category: "cafe",
  },
  {
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=600&q=80",
    caption: "Room Detail",
    category: "hotel",
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    caption: "Morning Brew",
    category: "cafe",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    caption: "Botanical Plants",
    category: "garden",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    caption: "Evening Lighting",
    category: "garden",
  },
];

const galleryItemsId: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    caption: "Pintu Masuk Utama",
    category: "hotel",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
    caption: "Ruang Kaca Botanical",
    category: "cafe",
  },
  {
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=600&q=80",
    caption: "Detail Kamar",
    category: "hotel",
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    caption: "Kopi Pagi",
    category: "cafe",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    caption: "Tanaman Botanical",
    category: "garden",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    caption: "Pencahayaan Sore",
    category: "garden",
  },
];

export function getGalleryItems(locale: Locale): GalleryItem[] {
  return locale === "id" ? galleryItemsId : galleryItemsEn;
}

export const contactInfo = {
  address: "JL. Ruhui Rahayu",
  phone: "+6281241087024",
  email: "hello@qafotel.com",
};
