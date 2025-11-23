import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ProductItem {
  name: string;
  description: string;
  priceRange: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  items: ProductItem[];
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface BranchInfo {
  name: string;
  description: string;
  address: string;
  phones: string[];
  email: string;
  hours: string;
  mapLink: string;
}