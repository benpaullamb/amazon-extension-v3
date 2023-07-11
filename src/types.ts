export interface Product {
  [key: string]: any;
  name: string;
  image: string;
  rating: number;
  ratingCount: number;
  price: number;
  prime: boolean;
  amazonChoice: boolean;
  link: string;
  bestSeller: string;
}
