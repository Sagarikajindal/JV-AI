export type Category = 'saree' | 'lehenga';
export type Occasion = 'bridal' | 'wedding' | 'reception' | 'sangeet' | 'festival' | 'casual' | 'puja' | 'party';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: Category;
  fabric: string;
  occasion: Occasion[];
  priceINR: number;
  priceEUR: number;
  images: string[];
  description: string;
  shortDesc: string;
  stock: number;
  featured: boolean;
  newArrival: boolean;
  colors: string[];
  tags: string[];
  weight: string;
  careInstructions: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface ConsultationRequest {
  name: string;
  phone: string;
  email: string;
  country: string;
  occasion: string;
  budget: string;
  date: string;
  slot: string;
  notes: string;
}

export interface PolicySection {
  id: string;
  title: string;
  content: string;
}
