export const PROJECTS = [
  {
    id: "01",
    title: "The Holistic Retreat",
    location: "Wayanad, Kerala",
    category: "Commercial property",
    year: "2024",
    image: "/projects/rajesh/1.jpeg",
    siteArea: "1.2 Acres",
    gallery: [
      "/projects/rajesh/1.jpeg",
      "/projects/rajesh/2.jpeg",
      "/projects/rajesh/3.jpeg",
      "/projects/rajesh/4.jpeg"
    ]
  },
  {
    id: "02",
    title: "Resort at Korome",
    location: "Wayanad, Kerala",
    category: "Commercial property",
    year: "2024",
    image: "/projects/korome/1.jpeg",
    siteArea: "1.2 Acres",
    builtArea: "4,800 sq. ft.",
    details: [
      "660 sq.ft cottage - 2",
      "710 sq.ft cottage - 2",
      "1030 sq.ft cottage - 2"
    ],
    gallery: [
      "/projects/korome/1.jpeg",
      "/projects/korome/2.jpeg",
      "/projects/korome/3.jpeg",
      "/projects/korome/4.jpeg",
      "/projects/korome/5.jpeg",
      "/projects/korome/6.jpeg",
      "/projects/korome/7.jpeg"
    ]
  },
  {
    id: "03",
    title: "Chettais Restaurant",
    location: "Mysuru, Karnataka",
    category: "Commercial property",
    year: "2024",
    image: "/projects/chettais/1.jpeg",
    siteArea: "1 Acre",
    builtArea: "24,490 sq. ft.",
    gallery: [
      "/projects/chettais/1.jpeg",
      "/projects/chettais/2.jpeg",
      "/projects/chettais/3.jpeg",
      "/projects/chettais/4.jpeg",
      "/projects/chettais/5.jpeg"
    ]
  },
  {
    id: "04",
    title: "Resort for Shanty",
    location: "Wayanad, Kerala",
    category: "Commercial property",
    year: "2024",
    image: "/projects/shanty/1.jpeg",
    siteArea: "50 Cents",
    builtArea: "6,350 sq. ft.",
    details: [
      "4,000 sq.ft. Restuarant cum Residence",
      "250 sq. ft. Boutique Cafe",
      "Five 420 sq. ft. Cottages"
    ],
    gallery: [
      "/projects/shanty/1.jpeg",
      "/projects/shanty/2.jpeg",
      "/projects/shanty/3.jpeg",
      "/projects/shanty/4.jpeg",
      "/projects/shanty/5.jpeg",
      "/projects/shanty/6.jpeg",
      "/projects/shanty/7.jpeg"
    ]
  }
];

export const SERVICES = [
  {
    title: "Architecture Design",
    description: "Creating monumental structures that harmonize with their environments.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Interior Design",
    description: "Crafting immersive interior spaces with meticulous attention to detail.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Residential Projects",
    description: "Bespoke homes tailored to luxury lifestyles and individual narratives.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Commercial Spaces",
    description: "Innovative commercial environments that elevate brand identities.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop"
  }
];

export interface Testimonial {
  quote: string;
  client: string;
  role: string;
  project: string;
  location: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "AConcept Studio turned our hillside plot into a retreat that breathes. Every space frames the Wayanad landscape with such quiet intention — it feels timeless.",
    client: "Rajesh Nair",
    role: "Owner",
    project: "The Holistic Retreat",
    location: "Wayanad, Kerala",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
  },
  {
    quote:
      "From concept to handover the team treated the project as their own. The cottages sit so naturally in the terrain that guests keep asking who designed them.",
    client: "Korome Hospitality",
    role: "Promoters",
    project: "Resort at Korome",
    location: "Wayanad, Kerala",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
  },
  {
    quote:
      "They reimagined our restaurant as an experience, not just a space. Footfall and dwell time rose noticeably within the first quarter of reopening.",
    client: "Chettais Group",
    role: "Owners",
    project: "Chettais Restaurant",
    location: "Mysuru, Karnataka",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop",
  },
  {
    quote:
      "Precise, patient and deeply creative. The restaurant, cafe and cottages all feel like one coherent world. It exceeded everything we imagined.",
    client: "Shanty Thomas",
    role: "Owner",
    project: "Resort for Shanty",
    location: "Wayanad, Kerala",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop",
  },
];

export const TEAM = [
  {
    name: "Vikram Menon",
    role: "Principal Architect",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Aisha Varghese",
    role: "Lead Interior Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Rahul Nair",
    role: "Landscape Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Priya Sharma",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  }
];
