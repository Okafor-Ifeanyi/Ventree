import { Briefcase } from "lucide-react";

export const services_modal = [
  {
    value: "building_construction",
    label: "Building construction (residential, commercial, industrial)",
  },
  {
    value: "borehole_drilling",
    label: "Borehole drilling & water supply systems",
  },
  {
    value: "general_plumbing",
    label: "General plumbing",
  },
  {
    value: "concrete_works",
    label: "Concrete works (foundations, slabs, driveways)",
  },
  {
    value: "carpentry_woodwork",
    label: "Carpentry & woodwork",
  },
  {
    value: "masonry_blockwork",
    label: "Masonry & blockwork",
  },
  {
    value: "roofing",
    label: "Roofing (installation, repair, etc)",
  },
  {
    value: "septic_tank",
    label: "Septic tank construction & maintenance",
  },
  {
    value: "steel_metal_works",
    label: "Steel/metal works (welding, gates)",
  },
];

export const services = [
  { title: "Carpentery", url: "images/service1.png" },
  { title: "Plumbing", url: "images/service2.png" },
  { title: "Interior Design", url: "images/service3.png" },
  { title: "Architecture", url: "images/service4.png" },
];

// Types
export interface Plumber {
  id: number;
  name: string;
  role: string;
  rating: number;
  status: "Available" | "Away" | "Offline";
  avatar?: string;
  company?: boolean;
  verified?: boolean;
}

// Dummy Data
export const plumbers: Plumber[] = [
  {
    id: 1,
    name: "James Idemudia",
    role: "Plumber",
    rating: 4.4,
    status: "Available",
    verified: true,
    avatar: "/images/service1.png",
  },
  {
    id: 2,
    name: "Graziella Obialor",
    role: "Plumber",
    rating: 4.4,
    status: "Available",
    verified: true,
    avatar: "/images/item1.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Plumber",
    rating: 4.4,
    status: "Available",
    verified: true,
  },
  {
    id: 4,
    name: "Peter Silas",
    role: "Plumber",
    rating: 4.4,
    status: "Available",
    verified: true,
  },
  {
    id: 5,
    name: "John Doe",
    role: "Plumber",
    rating: 4.4,
    status: "Available",
    verified: true,
  },
  {
    id: 6,
    name: "R&R Limited",
    role: "Plumbing materials & services",
    rating: 4.4,
    status: "Away",
    company: true,
  },
  {
    id: 7,
    name: "Akarakanmma...",
    role: "Plumber",
    rating: 4.4,
    status: "Available",
    verified: true,
  },
  {
    id: 8,
    name: "Akarakanmma...",
    role: "Plumber",
    rating: 4.4,
    status: "Available",
    verified: true,
  },
  {
    id: 9,
    name: "Matthew Edwards",
    role: "Plumber",
    rating: 4.4,
    status: "Offline",
  },
  {
    id: 10,
    name: "Mathew Edwards",
    role: "Plumber",
    rating: 4.4,
    status: "Available",
    verified: true,
  },
  {
    id: 11,
    name: "James Brown",
    role: "Plumber",
    rating: 4.4,
    status: "Available",
    verified: true,
  },
  {
    id: 12,
    name: "James Brown",
    role: "Plumber",
    rating: 4.4,
    status: "Available",
    verified: true,
  },
];

export const professionals = [
  {
    name: "Simisola",
    role: "Interior decorator",
    image: "/images/service1.png",
    location: "Idumota drive, Lekki Ibadan expressway",
  },
  {
    name: "Samson Adetunji",
    role: "Flooring",
    image: "/images/service2.png",
    location: "Idumota drive, Lekki Ibadan expressway",
  },
  {
    name: "Samson Adetunji",
    role: "Flooring",
    image: "/images/service2.png",
    location: "Idumota drive, Lekki Ibadan expressway",
  },
  {
    name: "Samson Adetunji",
    role: "Flooring",
    image: "/images/service2.png",
    location: "Idumota drive, Lekki Ibadan expressway",
  },
  {
    name: "Simisola Agbaje",
    role: "Interior decorator",
    image: "/images/service3.png",
    location: "Idumota drive, Lekki Ibadan expressway",
  },
];

export const savedItems = [
  {
    image: "/images/service1.png",
    title: "Matthew Edwards",
    subtitle: "General Plumbing",
    verified: true,
  },
  {
    image: "/images/item1.jpg",
    title: "3 plots of land",
    subtitle: "Katampe road, Abuja",
  },
  {
    image: "/images/service3.png",
    title: "James Idemudia",
    subtitle: "General Plumbing",
    verified: true,
  },
  {
    image: "/images/item2.jpg",
    title: "2 Bedroom fully detached…",
    subtitle: "Katampe road, Abuja",
  },
];

export const activities = [
  {
    text: (
      <>
        You posted a job request for{" "}
        <span className="dark text-primary">general plumber</span>
      </>
    ),
    time: "2 mins ago",
    actionLabel: "View job",
    icon: <Briefcase size={18} />,
  },
  {
    text: (
      <>
        You booked <span className="dark text-primary">Matthew</span> for
        Interior works
      </>
    ),
    time: "3 days ago",
    actionLabel: "View details",
    image: "/images/service1.png",
  },
  {
    text: (
      <>
        You left a review for <span className="dark text-primary">Matthew</span>
      </>
    ),
    time: "3 days ago",
    actionLabel: "View profile",
    image: "/images/service2.png",
  },
  {
    text: (
      <>
        You left a review for <span className="dark text-primary">Matthew</span>
      </>
    ),
    time: "3 days ago",
    actionLabel: "View profile",
    image: "/images/service2.png",
  },
  {
    text: (
      <>
        You left a review for <span className="dark text-primary">Matthew</span>
      </>
    ),
    time: "3 days ago",
    actionLabel: "View profile",
    image: "/images/service2.png",
  },
  {
    text: (
      <>
        You posted a job request for{" "}
        <span className="dark text-primary">general plumber</span>
      </>
    ),
    time: "2 mins ago",
    actionLabel: "View job",
    icon: <Briefcase size={18} />,
  },
  {
    text: (
      <>
        You booked <span className="dark text-primary">Matthew</span> for
        Interior works
      </>
    ),
    time: "3 days ago",
    actionLabel: "View details",
    image: "/images/service1.png",
  },
  {
    text: (
      <>
        You left a review for <span className="dark text-primary">Matthew</span>
      </>
    ),
    time: "3 days ago",
    actionLabel: "View profile",
    image: "/images/service2.png",
  },
  {
    text: (
      <>
        You left a review for <span className="dark text-primary">Matthew</span>
      </>
    ),
    time: "3 days ago",
    actionLabel: "View profile",
    image: "/images/service2.png",
  },
  {
    text: (
      <>
        You left a review for <span className="dark text-primary">Matthew</span>
      </>
    ),
    time: "3 days ago",
    actionLabel: "View profile",
    image: "/images/service2.png",
  },
  {
    text: (
      <>
        You posted a job request for{" "}
        <span className="dark text-primary">general plumber</span>
      </>
    ),
    time: "2 mins ago",
    actionLabel: "View job",
    icon: <Briefcase size={18} />,
  },
  {
    text: (
      <>
        You booked <span className="dark text-primary">Matthew</span> for
        Interior works
      </>
    ),
    time: "3 days ago",
    actionLabel: "View details",
    image: "/images/service1.png",
  },
  {
    text: (
      <>
        You left a review for <span className="dark text-primary">Matthew</span>
      </>
    ),
    time: "3 days ago",
    actionLabel: "View profile",
    image: "/images/service2.png",
  },
  {
    text: (
      <>
        You left a review for <span className="dark text-primary">Matthew</span>
      </>
    ),
    time: "3 days ago",
    actionLabel: "View profile",
    image: "/images/service2.png",
  },
  {
    text: (
      <>
        You left a review for <span className="dark text-primary">Matthew</span>
      </>
    ),
    time: "3 days ago",
    actionLabel: "View profile",
    image: "/images/service2.png",
  },
];

export enum NotificationTypes {
  "ACCEPTED_REQUEST",
  "DECLINED_REQUEST",
  "BOOKING",
  "CHAT_REPLY",
}

export interface NotificationMessagePart {
  text: string;
  highlight?: boolean;
}

export interface Notification {
  id: string;
  senderName: string;
  senderAvatar?: string;
  message: NotificationMessagePart[];
  type: NotificationTypes;
  createdAt: Date;
  isRead: boolean;
}

interface Tab {
  icon: string;
  label: string;
  count: number;
}

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  oldPrice: number | null;
}

export const tabs: Tab[] = [
  {
    icon: "material-symbols-light:construction-rounded",
    label: "Construction",
    count: 123,
  },
  {
    icon: "material-symbols-light:electric-bolt-rounded",
    label: "Electricals",
    count: 123,
  },
  {
    icon: "material-symbols-light:outdoor-garden",
    label: "Outdoor & Landscaping",
    count: 123,
  },
  {
    icon: "material-symbols-light:engineering-rounded",
    label: "Professional Services",
    count: 123,
  },
  {
    icon: "material-symbols-light:cleaning-rounded",
    label: "Maintenance",
    count: 123,
  },
  {
    icon: "material-symbols-light:real-estate-agent-rounded",
    label: "Interior Works",
    count: 123,
  },
  {
    icon: "material-symbols-light:tools-power-drill",
    label: "Mechanical",
    count: 123,
  },
  {
    icon: "material-symbols-light:safety-check-rounded",
    label: "Safety & Compliance",
    count: 123,
  },
  {
    icon: "material-symbols-light:service-toolbox-rounded",
    label: "Specialized Trade",
    count: 123,
  },
];

export const products: Product[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400",
    name: "Solar panel (100W-...",
    price: 240,
    oldPrice: null,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
    name: "Solar panel (100W-...",
    price: 240,
    oldPrice: 30,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400",
    name: "Solar panel (100W-...",
    price: 240,
    oldPrice: null,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400",
    name: "Solar panel (100W-...",
    price: 240,
    oldPrice: null,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400",
    name: "Solar panel (100W-...",
    price: 240,
    oldPrice: 30,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400",
    name: "Solar panel (100W-...",
    price: 240,
    oldPrice: 30,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400",
    name: "Solar panel (100W-...",
    price: 240,
    oldPrice: null,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400",
    name: "Solar panel (100W-...",
    price: 240,
    oldPrice: null,
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400",
    name: "Solar panel (100W-...",
    price: 240,
    oldPrice: null,
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400",
    name: "Solar panel (100W-...",
    price: 240,
    oldPrice: 30,
  },
];