export interface Category {
  id: number;
  categoryName: string;
  img: string;
  description: string;
}

export interface VeganCategory {
  id: number;
  title: string;
  username: string;
  rating: string;
  img: string;
  prepTime: string;
  ingredients: string[];
}

export interface ApiData {
  categories: Category[];
  veganImages: VeganCategory[];
}
