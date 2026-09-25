export interface CaseStudySection {
  number: string;
  title: string;
  subtitle?: string;
  content: string[];
  bulletPoints?: string[];
  metrics?: { label: string; value: string }[];
  image?: string;
  imageCaption?: string;
  keyTakeaway?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  category: 'Mobile App' | 'Campus UX' | 'Sustainable Product' | 'Quick-Commerce';
  role: string;
  timeline: string;
  team: string;
  tools: string[];
  year: string;
  coverImage: string;
  featured: boolean;
  caseStudy: {
    heroQuote: string;
    sections: CaseStudySection[];
    galleryImages?: { url: string; caption: string }[];
  };
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  methods: string[];
  deliverables: string[];
  quote: string;
}

export interface BeyondScreenItem {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  summary: string;
  reflection: string;
  tag: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  summary: string;
  skills: string[];
}
