import {
  Award,
  BookOpen,
  Box,
  Building2,
  ClipboardCheck,
  Compass,
  Cpu,
  Hammer,
  HardHat,
  Home,
  KeyRound,
  Leaf,
  Lightbulb,
  Medal,
  MessagesSquare,
  Monitor,
  Ruler,
  Search,
  Sofa,
  Sprout,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Category =
  | "Residential"
  | "Commercial"
  | "Interior Design"
  | "Hospitality";

export const CATEGORIES: Category[] = [
  "Residential",
  "Commercial",
  "Interior Design",
  "Hospitality",
];

export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  category: Category;
  image: string;
  width: number;
  height: number;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "meridian-residence",
    title: "Meridian Residence",
    location: "Beverly Hills, USA",
    year: 2024,
    category: "Residential",
    image: unsplash("photo-1600566753190-17f0baa2a6c3", 1600),
    width: 1600,
    height: 1000,
    featured: true,
  },
  {
    id: "obsidian-tower",
    title: "Obsidian Tower",
    location: "Singapore",
    year: 2023,
    category: "Commercial",
    image: unsplash("photo-1486406146926-c627a92ad1ab"),
    width: 1200,
    height: 1500,
    featured: true,
  },
  {
    id: "atelier-loft",
    title: "Atelier Loft",
    location: "New York, USA",
    year: 2024,
    category: "Interior Design",
    image: unsplash("photo-1600607687939-ce8a6c25118c"),
    width: 1200,
    height: 800,
    featured: true,
  },
  {
    id: "solace-resort",
    title: "Solace Resort & Spa",
    location: "Bali, Indonesia",
    year: 2022,
    category: "Hospitality",
    image: unsplash("photo-1582719508461-905c673771fd"),
    width: 1200,
    height: 1500,
    featured: true,
  },
  {
    id: "casa-lumen",
    title: "Casa Lumen",
    location: "Palm Springs, USA",
    year: 2023,
    category: "Residential",
    image: unsplash("photo-1512917774080-9991f1c4c750"),
    width: 1200,
    height: 800,
    featured: true,
  },
  {
    id: "vertex-headquarters",
    title: "Vertex Headquarters",
    location: "London, UK",
    year: 2022,
    category: "Commercial",
    image: unsplash("photo-1554435493-93422e8220c8"),
    width: 1200,
    height: 1600,
  },
  {
    id: "gallery-house",
    title: "The Gallery House",
    location: "Copenhagen, Denmark",
    year: 2024,
    category: "Residential",
    image: unsplash("photo-1600585154340-be6161a56a0c"),
    width: 1200,
    height: 800,
  },
  {
    id: "aurum-lobby",
    title: "Aurum Hotel Lobby",
    location: "Dubai, UAE",
    year: 2023,
    category: "Hospitality",
    image: unsplash("photo-1564501049412-61c2a3083791"),
    width: 1200,
    height: 900,
  },
  {
    id: "linear-penthouse",
    title: "Linear Penthouse",
    location: "Tokyo, Japan",
    year: 2024,
    category: "Interior Design",
    image: unsplash("photo-1616486338812-3dadae4b4ace"),
    width: 1200,
    height: 800,
  },
  {
    id: "courtyard-villa",
    title: "Courtyard Villa",
    location: "Marrakech, Morocco",
    year: 2021,
    category: "Residential",
    image: unsplash("photo-1600596542815-ffad4c1539a9"),
    width: 1200,
    height: 1400,
  },
  {
    id: "prism-pavilion",
    title: "Prism Pavilion",
    location: "Rotterdam, Netherlands",
    year: 2022,
    category: "Commercial",
    image: unsplash("photo-1487958449943-2429e8be8625"),
    width: 1200,
    height: 800,
  },
  {
    id: "saltwater-restaurant",
    title: "Saltwater Restaurant",
    location: "Sydney, Australia",
    year: 2023,
    category: "Hospitality",
    image: unsplash("photo-1517248135467-4c7edcad34c4"),
    width: 1200,
    height: 900,
  },
];

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const STATS: Stat[] = [
  {
    value: 200,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across four continents and twelve countries",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years of Practice",
    description: "A decade of disciplined, intentional design",
  },
  {
    value: 50,
    suffix: "+",
    label: "Design Awards",
    description: "Recognized by international design bodies",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Measured across every completed engagement",
  },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: Compass,
    title: "Architectural Design",
    description:
      "Concept-to-completion architecture grounded in context, light, and proportion.",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    description:
      "Interiors composed with material honesty and an editorial sense of restraint.",
  },
  {
    icon: Home,
    title: "Residential Design",
    description:
      "Private homes shaped around the rituals and rhythms of the people who live in them.",
  },
  {
    icon: Building2,
    title: "Commercial Design",
    description:
      "Workplaces and retail environments engineered for identity and performance.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description:
      "Rigorous spatial strategy that resolves circulation, program, and proportion.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description:
      "Sensitive transformation of existing structures without erasing their memory.",
  },
  {
    icon: Box,
    title: "3D Visualization",
    description:
      "Photoreal imagery and walkthroughs that make decisions tangible before build.",
  },
  {
    icon: MessagesSquare,
    title: "Design Consultation",
    description:
      "Focused advisory sessions for owners, developers, and design teams.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "End-to-end delivery oversight protecting design intent, budget, and schedule.",
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export interface ProcessStep {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  duration: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "We listen first — site visits, briefs, and ambitions mapped in detail.",
    duration: "1–2 weeks",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Research",
    description:
      "Context, regulation, climate, and precedent studied before a line is drawn.",
    duration: "2–3 weeks",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Concept Development",
    description:
      "Spatial narratives explored through sketches, models, and material studies.",
    duration: "3–4 weeks",
  },
  {
    icon: Monitor,
    number: "04",
    title: "Design Visualization",
    description:
      "Photoreal renders and immersive walkthroughs refine every decision.",
    duration: "2–4 weeks",
  },
  {
    icon: HardHat,
    number: "05",
    title: "Execution",
    description:
      "On-site supervision keeps craft, detail, and intent uncompromised.",
    duration: "8–16 weeks",
  },
  {
    icon: KeyRound,
    number: "06",
    title: "Final Delivery",
    description:
      "Styled handover, documentation, and a space ready to be lived in.",
    duration: "1 week",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string;
  name: string;
  projectType: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Aconcept didn't just design our home — they understood how we live before we could articulate it ourselves. Every room feels inevitable, as if it could never have been otherwise.",
    name: "Daniel Whitmore",
    projectType: "Private Residence, Beverly Hills",
    avatar: unsplash("photo-1507003211169-0a1dd7228f2d", 200),
  },
  {
    quote:
      "The studio's command of light and proportion transformed our headquarters into a space clients ask about before they ask about our work. That is brand value you cannot buy.",
    name: "Priya Raghavan",
    projectType: "Corporate Headquarters, London",
    avatar: unsplash("photo-1438761681033-6461ffad8d80", 200),
  },
  {
    quote:
      "From concept to final styling, the discipline was remarkable. Budgets held, timelines held, and the result exceeded the renders — which I did not believe was possible.",
    name: "Marcus Chen",
    projectType: "Boutique Hotel, Dubai",
    avatar: unsplash("photo-1500648767791-00dcc994a43e", 200),
  },
  {
    quote:
      "Working with Aconcept felt like collaborating with editors of space. They removed everything unnecessary until only the essential, beautiful structure remained.",
    name: "Elena Vasquez",
    projectType: "Penthouse Interior, Tokyo",
    avatar: unsplash("photo-1544005313-94ddf0286df2", 200),
  },
];

/* ------------------------------------------------------------------ */
/* Awards                                                              */
/* ------------------------------------------------------------------ */

export interface AwardItem {
  icon: LucideIcon;
  name: string;
  body: string;
  year: number;
}

export const AWARDS: AwardItem[] = [
  {
    icon: Trophy,
    name: "International Architecture Award",
    body: "The Chicago Athenaeum",
    year: 2024,
  },
  {
    icon: Award,
    name: "Red Dot Award — Spatial Design",
    body: "Red Dot",
    year: 2023,
  },
  {
    icon: Medal,
    name: "AIA Honor Award for Interiors",
    body: "American Institute of Architects",
    year: 2023,
  },
  {
    icon: Star,
    name: "Best of Year — Residential",
    body: "Interior Design Magazine",
    year: 2022,
  },
  {
    icon: Trophy,
    name: "World Architecture Festival Shortlist",
    body: "WAF",
    year: 2022,
  },
  {
    icon: Award,
    name: "Dezeen Awards — Hospitality Finalist",
    body: "Dezeen",
    year: 2021,
  },
];

/* ------------------------------------------------------------------ */
/* Sustainability                                                      */
/* ------------------------------------------------------------------ */

export interface SustainabilityItem {
  icon: LucideIcon;
  stat: string;
  title: string;
  description: string;
}

export const SUSTAINABILITY: SustainabilityItem[] = [
  {
    icon: Leaf,
    stat: "85%",
    title: "Sustainable Materials",
    description:
      "Of specified materials are recycled, renewable, or regionally sourced.",
  },
  {
    icon: Zap,
    stat: "40%",
    title: "Energy-Efficient Design",
    description:
      "Average operational energy reduction across completed projects.",
  },
  {
    icon: Sprout,
    stat: "100%",
    title: "Eco-Conscious Planning",
    description:
      "Every project begins with a full environmental impact assessment.",
  },
  {
    icon: Cpu,
    stat: "30+",
    title: "Smart Architecture",
    description:
      "Buildings delivered with integrated intelligent systems and automation.",
  },
];

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  photo: string;
  linkedin: string;
  instagram: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Adrian Cole",
    role: "Principal Architect",
    experience: "18 years",
    photo: unsplash("photo-1560250097-0b93528c311a", 800),
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
  {
    name: "Sofia Marchetti",
    role: "Design Director",
    experience: "14 years",
    photo: unsplash("photo-1573496359142-b8d87734a5a2", 800),
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
  {
    name: "James Okafor",
    role: "Head of Interiors",
    experience: "12 years",
    photo: unsplash("photo-1472099645785-5658abf4ff4e", 800),
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
  {
    name: "Hana Yoshida",
    role: "Senior Project Manager",
    experience: "10 years",
    photo: unsplash("photo-1580489944761-15a19d654956", 800),
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
];

/* ------------------------------------------------------------------ */
/* Milestones                                                          */
/* ------------------------------------------------------------------ */

export interface Milestone {
  year: string;
  title: string;
}

export const MILESTONES: Milestone[] = [
  { year: "2014", title: "Studio Founded" },
  { year: "2016", title: "First International Commission" },
  { year: "2019", title: "50th Project Completed" },
  { year: "2022", title: "Global Design Award" },
  { year: "2025", title: "Multi-City Expansion" },
];

/* ------------------------------------------------------------------ */
/* Shared imagery                                                      */
/* ------------------------------------------------------------------ */

export const IMAGES = {
  hero: unsplash("photo-1613490493576-7fde63acd811", 2000),
  about: unsplash("photo-1497366754035-f200968a6e72", 1200),
  cta: unsplash("photo-1449824913935-59a10b8d2000", 1800),
};
