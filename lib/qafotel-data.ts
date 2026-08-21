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

// ── Local Image Paths ──
const images = {
  // Hero / landing
  hero: "/images/qafotel.jpeg",
  lobby: "/images/resepionist.jpeg",
  // Room images
  leafRoom: "/images/leaf room.jpeg",
  leafWardrobe: "/images/wardrobe.jpeg",
  leafBathroom: "/images/bathroom.jpeg",
  leafAmenities: "/images/amenities.jpeg",
  oaseRoom: "/images/oase room.jpeg",
  oaseIndoor: "/images/indoorv2.jpeg",
  oaseIndoor2: "/images/indoorv3.jpeg",
  // Cafe
  jardinExterior: "/images/jardincoffee.jpeg",
  jardinInterior: "/images/jardincoffeev2.jpeg",
  cafeBurger: "/images/smashed-cheezy-burger.HEIC",
  cafeMontBlanc: "/images/mont-blanc.jpeg",
  cafeMatcha: "/images/jardincoffee.jpeg",
  cafePourOver: "/images/jardincoffeev2.jpeg",
  cafeAvotoast: "/images/outdoor .jpeg",
  // Gallery
  galleryReceptionist: "/images/resepionist.jpeg",
  galleryCorridor: "/images/koridor.jpeg",
  galleryLift: "/images/lift.jpeg",
  galleryIndoor: "/images/indoor.jpeg",
  galleryOutdoor: "/images/outdoor .jpeg",
  galleryOutdoor2: "/images/outdoorv2.jpeg",
  galleryOutdoor3: "/images/outdoorv3.jpeg",
  galleryMeeting: "/images/meetingroom.jpeg",
  galleryMeeting2: "/images/meetingroomv2.jpeg",
  galleryPlants: "/images/tanaman_di_tangga.jpeg",
  galleryWardrobe: "/images/wardrobe.jpeg",
  // About
  aboutHero: "/images/koridor.jpeg",
  aboutStory: "/images/resepionist.jpeg",
  aboutStyle: "/images/tanaman_di_tangga.jpeg",
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
    slug: "leaf",
    name: "Leaf Room",
    tag: "Cozy & Green",
    size: "32 sqm",
    guests: "2 Adults",
    bed: "Queen",
    view: "Garden View",
    description:
      "A cozy green retreat wrapped in natural textures, perfect for a peaceful night surrounded by garden views.",
    amenities: ["Free WiFi", "Queen Bed", "Sofa Goyang Empuk", "Garden View"],
    features: [
      "32 sqm Living Space",
      "Queen Size Bed",
      "Garden View",
      "Dedicated Workspace",
    ],
    priceUSD: 129,
    rating: 4.9,
    image: images.leafRoom,
    carousel: [images.leafRoom, images.leafWardrobe, images.leafBathroom, images.leafAmenities],
  },
  {
    slug: "oase",
    name: "Oase Room",
    tag: "Best View",
    size: "45 sqm",
    guests: "2 Adults",
    bed: "King",
    view: "Private Terrace",
    description:
      "Wake up to garden views and fresh air. Features a private terrace for ultimate relaxation.",
    amenities: ["Terrace", "Garden View", "Deep Tub", "King Bed", "Sofa Goyang Empuk"],
    features: [
      "45 sqm Living Space",
      "King Size Bed",
      "Private Terrace",
      "Deep Soaking Tub",
    ],
    priceUSD: 189,
    rating: 5.0,
    image: images.oaseRoom,
    carousel: [images.oaseRoom, images.oaseIndoor, images.oaseIndoor2],
  },
];

const roomsId: Room[] = [
  {
    slug: "leaf",
    name: "Leaf Room",
    tag: "Nyaman & Hijau",
    size: "32 sqm",
    guests: "2 Dewasa",
    bed: "Queen",
    view: "Pemandangan Taman",
    description:
      "Retret hijau yang nyaman dengan tekstur alami, cocok untuk malam yang tenang dengan pemandangan taman.",
    amenities: ["WiFi Gratis", "Tempat Tidur Queen", "Sofa Goyang Empuk", "Pemandangan Taman"],
    features: [
      "Ruang 32 sqm",
      "Tempat Tidur Queen",
      "Pemandangan Taman",
      "Ruang Kerja Khusus",
    ],
    priceUSD: 129,
    rating: 4.9,
    image: images.leafRoom,
    carousel: [images.leafRoom, images.leafWardrobe, images.leafBathroom, images.leafAmenities],
  },
  {
    slug: "oase",
    name: "Oase Room",
    tag: "Pemandangan Terbaik",
    size: "45 sqm",
    guests: "2 Dewasa",
    bed: "King",
    view: "Teras Pribadi",
    description:
      "Bangun dengan pemandangan taman dan udara segar. Fitur teras pribadi untuk relaksasi maksimal.",
    amenities: ["Teras", "Pemandangan Taman", "Bak Mandi Dalam", "Tempat Tidur King", "Sofa Goyang Empuk"],
    features: [
      "Ruang 45 sqm",
      "Tempat Tidur King",
      "Teras Pribadi",
      "Bak Mandi Dalam",
    ],
    priceUSD: 189,
    rating: 5.0,
    image: images.oaseRoom,
    carousel: [images.oaseRoom, images.oaseIndoor, images.oaseIndoor2],
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
        name: "Smashed Cheezy Burger",
        price: "Rp 80.000",
        desc: "Juicy smashed beef patty with melted cheese, fresh lettuce, tomato, and house-made special sauce.",
        image: images.cafeBurger,
        category: "Main Course",
        signature: true,
      },
      {
        name: "Mont Blanc",
        price: "Rp 30.000",
        desc: "A classic Mont Blanc dessert with chestnut cream, whipped cream, and a touch of vanilla.",
        image: images.cafeMontBlanc,
        category: "Dessert",
      },
      {
        name: "Botanical Matcha",
        price: "Rp 95.000",
        desc: "Ceremonial grade matcha whisked with oat milk and a hint of house-made vanilla bean syrup.",
        image: images.cafeMatcha,
        category: "Cold Beverage",
      },
      {
        name: "Single Origin Pour Over",
        price: "Rp 75.000",
        desc: "Rotating selection of lightly roasted beans, meticulously brewed to highlight distinct flavor profiles.",
        image: images.cafePourOver,
        category: "Hot Beverage",
      },
      {
        name: "Artisan Avo Toast",
        price: "Rp 125.000",
        desc: "Smashed avocado on toasted sourdough, topped with microgreens, radish, and a drizzle of chili oil.",
        image: images.cafeAvotoast,
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
        name: "Smashed Cheezy Burger",
        price: "Rp 80.000",
        desc: "Smashed beef patty juicy dengan keju meleleh, selada segar, tomat, dan saus spesial buatan rumah.",
        image: images.cafeBurger,
        category: "Menu Utama",
        signature: true,
      },
      {
        name: "Mont Blanc",
        price: "Rp 30.000",
        desc: "Dessert klasik Mont Blanc dengan krim kastanye, whipped cream, dan sentuhan vanila.",
        image: images.cafeMontBlanc,
        category: "Dessert",
      },
      {
        name: "Botanical Matcha",
        price: "Rp 95.000",
        desc: "Matcha kelas upacara premium dengan susu oat dan sedikit sirup vanila buatan rumah.",
        image: images.cafeMatcha,
        category: "Minuman Dingin",
      },
      {
        name: "Single Origin Pour Over",
        price: "Rp 75.000",
        desc: "Rotasi biji kopi panggang ringan, diseduh dengan teliti untuk menonjolkan profil rasa yang unik.",
        image: images.cafePourOver,
        category: "Minuman Panas",
      },
      {
        name: "Artisan Avo Toast",
        price: "Rp 125.000",
        desc: "Alpukat yang dihaluskan di atas roti sourdough panggang, ditambah microgreens, radish, dan minyak cabai.",
        image: images.cafeAvotoast,
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
  { src: images.galleryReceptionist, caption: "The Receptionist", category: "hotel" },
  { src: images.galleryCorridor, caption: "Elegant Corridor", category: "hotel" },
  { src: images.galleryLift, caption: "The Lift", category: "hotel" },
  { src: images.galleryIndoor, caption: "Indoor Lounge", category: "hotel" },
  { src: images.galleryWardrobe, caption: "Wardrobe Detail", category: "hotel" },
  { src: images.jardinExterior, caption: "Jardin Coffee Exterior", category: "cafe" },
  { src: images.jardinInterior, caption: "Jardin Coffee Interior", category: "cafe" },
  { src: images.galleryOutdoor, caption: "Outdoor Garden", category: "garden" },
  { src: images.galleryOutdoor2, caption: "Tropical Greenery", category: "garden" },
  { src: images.galleryOutdoor3, caption: "Garden Path", category: "garden" },
  { src: images.galleryPlants, caption: "Plants on Stairs", category: "garden" },
  { src: images.galleryMeeting, caption: "Meeting Room", category: "wellness" },
  { src: images.galleryMeeting2, caption: "Meeting Room Setup", category: "wellness" },
];

export function getGalleryItems(_locale: Locale): GalleryItem[] {
  return galleryItems;
}
