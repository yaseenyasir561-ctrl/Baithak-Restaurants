
export enum Category {
  BiryaniRice = 'Biryani & Rice',
  BBQGrill = 'BBQ & Grill',
  CurriesDals = 'Curries & Dals',
  SnacksStarters = 'Snacks & Starters',
  BreadsRoti = 'Breads & Roti',
  Beverages = 'Beverages'
}

export type SpiceLevel = 'None' | 'Mild' | 'Medium' | 'Hot';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  featured?: boolean;
  spiceLevel?: SpiceLevel;
  ingredients?: string[];
  isSpecial?: boolean;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message: string;
}
