export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  originalPrice?: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  role: string;
  time: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "Floor" | "Community" | "Equipments" | "Lobby";
  caption: string;
}
