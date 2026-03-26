export interface ServicePrice {
  qty: string;
  price?: string;
  note?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  deliverables?: string[];
  price?: string;
  prices?: ServicePrice[];
  totalPrice?: string;
  period?: string;
  setupFee?: string;
  disclaimer?: string;
  deliveryTime?: string;
  requirements?: string;
  iconName?: string;
  image?: string;
  note?: string;
  highlight?: boolean;
  isPopular?: boolean;
}

export interface SolutionItem {
  title: string;
  description?: string;
  items: string[];
  image: string;
  link?: string;
}

export interface PortfolioItem {
  id: string;
  client: string;
  contactName?: string;
  year?: string;
  category?: string;
  description: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  services: string[];
  beforeImage: string;
  afterImage: string;
  color: string;
  result?: string;
}

export interface FeaturedProjectItem {
  id: number;
  category: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  description: string;
  date: string;
  services: string;
  tags: string;
  images: {
    topSmall: string;
    bottomSmall: string;
    mainTall: string;
  };
  client?: string;
  link?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}