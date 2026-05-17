export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export interface CategoryReq {
  name: string;
  id: number;
}
export interface Category extends CategoryReq {
  creationAt: string;
  image: string;
  slug: string;
  updatedAt: string;
}

export interface CartItem extends Product {
  quantity: number;
}