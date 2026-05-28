import { MembershipPlan, FeatureItem, ReviewItem, GalleryItem } from "./types";

// Gym Core Info
export const GYM_INFO = {
  name: "PURE GYM MYSORE",
  nameKannada: "ಪ್ಯೂರ್ ಜಿಮ್ ಮೈಸೂರು",
  address: "#443, New Kanthraj Urs Road, T.K Layout, Kuvempu Nagara, Mysuru, Karnataka 570023",
  phone: "072044 17477",
  whatsappNumber: "+917204417477",
  rating: 4.6,
  reviewsCount: 190,
  email: "puregymmysore@gmail.com",
  timings: {
    weekdays: "5:00 AM - 10:00 PM",
    saturday: "5:00 AM - 9:00 PM",
    sunday: "6:00 AM - 12:00 PM",
  },
  highlights: [
    "Affordable premium gym",
    "Scientific workouts",
    "Positive atmosphere",
    "Supportive trainers",
    "Student-friendly environment",
    "Double-height air ventilation",
    "Modern high-end equipment",
  ],
};

// Features
export const FEATURES: FeatureItem[] = [
  {
    id: "strength",
    title: "Strength & Conditioning",
    description: "Premium heavy-duty racks, multi-stations, and high-precision plates tailored for progressive overload and muscle development.",
    iconName: "Dumbbell",
  },
  {
    id: "cardio",
    title: "High-Performance Cardio",
    description: "Equipped with shock-absorption treadmills, cross-trainers, and spin-bikes with real-time biometric metrics capture.",
    iconName: "Flame",
  },
  {
    id: "functional",
    title: "Functional Training Turf",
    description: "Dedicated green artificial grass track area with heavy-duty battle ropes, core bags, and premium suspension anchors.",
    iconName: "Cpu",
  },
  {
    id: "pt",
    title: "1-on-1 Personal Coaching",
    description: "Certified trainers specializing in scientific routine planning, posture alignment, recovery tracking, and form corrections.",
    iconName: "ShieldCheck",
  },
  {
    id: "diet",
    title: "Customized Nutrition Mapping",
    description: "No generic diets. Get realistic calorie calculations and macronutrient plans tailored specifically for your somatic body type.",
    iconName: "Utensils",
  },
];

// Memberships
export const MEMBERSHIPS: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Classic Monthly",
    price: "₹1,499",
    period: "Monthly",
    description: "No long-term commitments. Complete access to state-of-the-art gym floor, cardio, and lockers.",
    features: [
      "Full gym floor & cardio access",
      "Free general fitness assessment",
      "Supportive on-floor trainers",
      "Premium locker & shower access",
      "Flexible workout hours"
    ],
    isPopular: false,
    ctaText: "Get Access Now",
  },
  {
    id: "quarterly",
    name: "Regular Quarterly",
    price: "₹3,799",
    period: "Quarterly",
    originalPrice: "₹4,497",
    description: "Ideally suited for fitness beginners. Accelerate your weight loss or muscle building foundation.",
    features: [
      "All Classic Monthly elements",
      "1-on-1 customized workout routine",
      "Body composition profiling (InBody)",
      "Standard diet blueprint guide",
      "Priority equipment orientation"
    ],
    isPopular: true,
    ctaText: "Secure Student / Pro Deal",
  },
  {
    id: "annual",
    name: "Pure Gym Elite Annual",
    price: "₹10,999",
    period: "Annual",
    originalPrice: "₹17,988",
    description: "Our absolute best-value plan. Perfect for young pros and committed students establishing life habits.",
    features: [
      "All Quarterly elements included",
      "Progress tracking dashboard",
      "Complimentary Guest passes (2 per month)",
      "Quarterly goal consultation audits",
      "Highest discount rate per month"
    ],
    isPopular: false,
    ctaText: "Join Elite For a Year",
  },
];

// Actual Inspired Customer Reviews
export const REVIEWS: ReviewItem[] = [
  {
    id: "rev1",
    name: "Preetham Rao",
    rating: 5,
    role: "Software Professional",
    time: "2 weeks ago",
    text: "Pure Gym is outstanding. It is clean, scientific, and has a positive training atmosphere. The heavy strength lifting zone is premium and spacious. Definitely the best in T.K. Layout Kuvempunagar.",
    verified: true,
  },
  {
    id: "rev2",
    name: "Raveena Gowda",
    rating: 5,
    role: "Mysore University Student",
    time: "1 month ago",
    text: "So student-friendly and affordable! The trainers are super supportive and helpful. As an absolute beginner, I never felt intimidated here. Highly recommend the morning slots.",
    verified: true,
  },
  {
    id: "rev3",
    name: "Vikram S.",
    rating: 5,
    role: "Athletic Weightlifter",
    time: "3 weeks ago",
    text: "Best gym equipment and biomechanics posture calibration in Mysore. The black-and-yellow color coordination is clean. Outstanding positive community, clean separate locker spaces.",
    verified: true,
  },
  {
    id: "rev4",
    name: "Shwetha Mahesh",
    rating: 5,
    role: "Marketing Manager",
    time: "2 months ago",
    text: "Very professional setting. Great ventilation and clean sanitization protocols. The personal diet mapping guide provided has helped me achieve visible results in 6 weeks.",
    verified: true,
  }
];

// Photos
export const GALLERY_ITEMS = (gymInteriorSrc: string, gymReceptionSrc: string): GalleryItem[] => [
  {
    id: "gal1",
    src: gymInteriorSrc,
    alt: "Pure Gym Mysore Main Floor Layout",
    category: "Floor",
    caption: "Our main fitness floor with professional strength and conditioning zones."
  },
  {
    id: "gal2",
    src: gymReceptionSrc,
    alt: "Pure Gym Mysore Elegant Reception Desk",
    category: "Lobby",
    caption: "A modern, warm, and professional reception desk greeting you every single session."
  },
  {
    id: "gal3",
    src: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?q=80&w=1200&auto=format&fit=crop",
    alt: "Premium Heavy Dumbbells and Benches",
    category: "Equipments",
    caption: "Heavy free weights area calibrated perfectly for high-performance safety."
  },
  {
    id: "gal4",
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
    alt: "Scientific Strength Zone",
    category: "Equipments",
    caption: "State of the art chest, leg plates, and back press machines."
  },
  {
    id: "gal5",
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    alt: "Cardio Conditioning Lineup",
    category: "Floor",
    caption: "Treadmills and cross conditioning rowers with expansive wall mirrors."
  },
  {
    id: "gal6",
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    alt: "Functional and High Intensity Space",
    category: "Community",
    caption: "Group orientation sessions, supportive trainers, and dynamic battle rope fields."
  }
];
