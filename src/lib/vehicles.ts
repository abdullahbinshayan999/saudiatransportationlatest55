export type Vehicle = {
  slug: string;
  name: string;
  seater: number;
  bags: number;
  hourly: number; // SAR per hour (card price)
  description: string;
  image: string;
};

import camryImg from "@/assets/vehicles/camry.png";
import stariaImg from "@/assets/vehicles/staria.png";
import gmcImg from "@/assets/vehicles/gmc.png";
import hiaceImg from "@/assets/vehicles/hiace.png";
import coasterImg from "@/assets/vehicles/coaster.png";
import sonataImg from "@/assets/vehicles/sonata.png";
import h1Img from "@/assets/vehicles/h1.png";
import chevroletImg from "@/assets/vehicles/chevrolet.png";

export const vehicles: Vehicle[] = [
  { slug: "camry", name: "Toyota Camry", seater: 4, bags: 3, hourly: 100,
    description: "Excellent option for small families. Comfortable seating for up to 4 passengers and space for 3 bags — a smooth and economical ride.",
    image: camryImg },
  { slug: "staria", name: "Hyundai Staria", seater: 7, bags: 5, hourly: 150,
    description: "Budget-friendly with spacious seating for up to 7 passengers and 5 bags. Safe, reliable, and comfortable for families.",
    image: stariaImg },
  { slug: "gmc", name: "GMC Yukon", seater: 7, bags: 5, hourly: 200,
    description: "Luxury option with premium interior and comfort for up to 7 passengers. Ideal for families needing extra comfort.",
    image: gmcImg },
  { slug: "hiace", name: "Toyota Hiace", seater: 10, bags: 10, hourly: 180,
    description: "Perfect for small groups. Seats up to 10 passengers with space for 10 bags — ideal for Umrah groups.",
    image: hiaceImg },
  { slug: "coaster", name: "Toyota Coaster", seater: 17, bags: 20, hourly: 350,
    description: "Best for medium groups. Comfortable seating for 17 passengers with luggage capacity up to 20 bags.",
    image: coasterImg },
  { slug: "sonata", name: "Hyundai Sonata", seater: 4, bags: 3, hourly: 100,
    description: "Comfortable and economical sedan for small families. Smooth ride with space for 3 bags.",
    image: sonataImg },
  { slug: "h1", name: "Hyundai H1", seater: 7, bags: 5, hourly: 150,
    description: "Spacious and reliable vehicle for families. Comfortable for 7 passengers with generous luggage space.",
    image: h1Img },
  { slug: "chevrolet", name: "Chevrolet Tahoe", seater: 7, bags: 5, hourly: 200,
    description: "Luxury SUV option with premium comfort and ample space for families.",
    image: chevroletImg },
];

export type PricingTab = {
  id: string;
  label: string;
  hint: string;
  hourly: number;
  rows: { route: string; price: number }[];
  badge?: string;
};

const baseRoutes = [
  "Madina Airport to Madina Hotel taxi",
  "Jeddah Airport to Makkah Hotel taxi",
  "Jeddah Airport to Madina Hotel taxi",
  "Jeddah Airport to Jeddah Hotel taxi",
  "Madina Hotel to Madina Airport taxi",
  "Makkah Hotel to Jeddah Airport taxi",
  "Madina Hotel to Jeddah Airport taxi",
  "Jeddah Hotel to Jeddah Airport taxi",
  "Makkah Hotel to Madina Hotel taxi",
  "Madina Hotel to Makkah Hotel taxi",
  "Makkah Hotel to Train Station taxi",
  "Madinah Hotel to Train Station taxi",
  "Taxi for Makkah Ziyarat tour",
  "Taxi for Madina Ziyarat tour",
  "Madina & Wadiya Jin Ziarat taxi",
  "Jeddah to Taif Ziyarat taxi (With Return)",
  "Makkah to Taif Ziyarat taxi (With Return)",
  "Makkah to Riyadh taxi service",
  "Madinah to Riyadh taxi service",
  "Riyadh to Makkah taxi service",
  "Riyadh to Madinah taxi service",
  "Makkah to Dammam taxi service",
  "Madinah to Dammam taxi service",
  "Dammam to Makkah taxi service",
  "Dammam to Madinah taxi service",
  "Madinah to AlUla Tour taxi (With Return)",
  "Per hour rate (shopping/ziyarat etc.)",
];

const make = (prices: number[]) => baseRoutes.map((route, i) => ({ route, price: prices[i] }));

export const pricingTabs: PricingTab[] = [
  {
    id: "4-seater",
    label: "4 Seater (Camry / Sonata)",
    hint: "Camry · Sonata",
    hourly: 90,
    badge: "Most Booked",
    rows: make([170,280,520,200,170,280,520,200,520,520,150,150,250,250,350,700,550,1100,1100,1100,1100,1550,1550,1550,1550,1300,90]),
  },
  {
    id: "7-seater-staria",
    label: "7 Seater (Staria)",
    hint: "Hyundai Staria",
    hourly: 120,
    rows: make([200,350,620,250,200,350,620,250,620,620,170,170,350,350,450,850,650,1350,1350,1350,1350,2000,2000,2000,2000,1500,120]),
  },
  {
    id: "11-seater-hiace",
    label: "11 Seater (Hiace)",
    hint: "Toyota Hiace",
    hourly: 150,
    rows: make([250,450,700,300,250,450,700,300,700,700,220,220,450,450,550,1200,800,1500,1500,1500,1500,2250,2250,2250,2250,1800,150]),
  },
  {
    id: "7-seater-luxury",
    label: "7 Seater (GMC / Chevrolet)",
    hint: "Luxury SUV",
    hourly: 160,
    rows: make([320,500,1200,350,320,500,1200,350,1200,1200,280,280,500,500,600,1500,900,2000,2000,2000,2000,2400,2400,2400,2400,2000,160]),
  },
  {
    id: "18-seater-coaster",
    label: "18 Seater (Coaster)",
    hint: "Toyota Coaster",
    hourly: 180,
    rows: make([520,700,1500,550,520,700,1500,550,1500,1500,400,400,700,700,800,1800,1300,3200,3200,3200,3200,3400,3400,3400,3400,2600,180]),
  },
];

export const faqs = [
  { q: "How can I book a taxi?", a: "The fastest way is to message us on WhatsApp using any 'Book on WhatsApp' button on this site. You can also call us or fill in the Get a Quote form on the Contact page." },
  { q: "Do you provide airport pickup?", a: "Yes. We provide pickups and drop-offs at Jeddah Airport, Madinah Airport, and other Saudi airports — 24/7 with on-time service." },
  { q: "Are your prices fixed?", a: "Yes. All prices listed on our website are fixed, with no hidden charges. You pay exactly what is shown." },
  { q: "Do you offer services for Umrah pilgrims?", a: "Absolutely. Umrah pilgrims are our priority. We offer airport, hotel, Ziyarat, and intercity transport with experienced drivers familiar with pilgrim needs." },
  { q: "What payment methods do you accept?", a: "We accept cash, bank transfer, and most major card payments. Please confirm your preferred method when booking on WhatsApp." },
  { q: "Can I book in advance?", a: "Yes — we strongly recommend advance booking, especially during Umrah and Hajj seasons, to guarantee vehicle availability." },
  { q: "Are your drivers experienced?", a: "All our drivers are professional, licensed, and highly experienced — many specialize in serving pilgrims and tourists across Saudi Arabia." },
];
