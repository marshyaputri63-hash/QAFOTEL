/**
 * Shared data for the Qafotel public site, mirroring the wireframes in
 * documentation/wireframes.
 */

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

export const rooms: Room[] = [
  {
    slug: "botanical-suite",
    name: "The Botanical Suite",
    tag: "Botanical Suite",
    detailTitle: "The Emerald Sanctuary",
    badge: "Most Popular",
    size: "45 sqm",
    guests: "2 Adults",
    bed: "King",
    description:
      "Our signature suite featuring floor-to-ceiling windows overlooking the private garden and premium organic linens.",
    detailDescription:
      "Experience the ultimate blend of luxury and nature. Our Emerald Sanctuary suite is designed with floor-to-ceiling windows overlooking our private botanical garden. The room features sustainable bamboo flooring, hand-crafted wooden furniture, and a private balcony where you can enjoy your morning botanical brew from our café.",
    amenities: ["Free WiFi", "Mini Bar", "AC", "Garden View"],
    detailAmenities: [
      { icon: "☕", label: "Botanical Mini Bar" },
      { icon: "📶", label: "High-speed WiFi" },
      { icon: "🛁", label: "Rainfall Shower" },
      { icon: "❄️", label: "Climate Control" },
      { icon: "📺", label: 'Smart TV 55"' },
      { icon: "🧴", label: "Organic Toiletries" },
    ],
    features: [
      "45 sqm Living Space",
      "King Size Orthopedic Bed",
      "Garden View Balcony",
      "Dedicated Workspace",
    ],
    price: 120,
    priceRupiah: 1850000,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    carousel: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "garden-studio",
    name: "The Garden Studio",
    tag: "Garden Studio",
    detailTitle: "The Garden Studio",
    size: "30 sqm",
    guests: "2 Adults",
    bed: "Queen",
    description:
      "A cozy and intimate space perfect for solo travelers or couples, featuring direct access to the café courtyard.",
    detailDescription:
      "A cozy and intimate space perfect for solo travelers or couples. Wake up to the scent of fresh coffee from our café courtyard, step outside to lush greenery, and settle into a thoughtfully designed room with warm wooden textures and organic cotton bedding.",
    amenities: ["Free WiFi", "Work Desk", "AC", "Coffee Maker"],
    detailAmenities: [
      { icon: "☕", label: "Espresso Maker" },
      { icon: "📶", label: "High-speed WiFi" },
      { icon: "🌿", label: "Courtyard Access" },
      { icon: "❄️", label: "Climate Control" },
      { icon: "📺", label: 'Smart TV 43"' },
      { icon: "🧴", label: "Organic Toiletries" },
    ],
    features: [
      "30 sqm Living Space",
      "Queen Size Bed",
      "Café Courtyard Access",
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
];

export type MenuSection = {
  id: string;
  title: string;
  items: { name: string; price: string; desc: string; image: string }[];
};

export const cafeMenu: MenuSection[] = [
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

export type GalleryItem = {
  src: string;
  caption: string;
  category: "hotel" | "cafe" | "garden";
};

export const galleryCategories = [
  { id: "all", label: "All Spaces" },
  { id: "hotel", label: "Hotel Rooms" },
  { id: "cafe", label: "Jardin Coffee" },
  { id: "garden", label: "Gardens" },
] as const;

export const galleryItems: GalleryItem[] = [
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

export const contactInfo = {
  address: "Jl. Botanical Green No. 12, Bandung",
  phone: "+62 22 1234 5678",
  email: "hello@qafotel.com",
};
