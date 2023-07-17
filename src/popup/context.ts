import { createContext } from 'react';
import { Product } from 'types';

export const ProductsContext = createContext<Product[]>([]);

interface SearchedProducts {
  searchedProducts: Product[];
  setSearchedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const SearchedProductsContext = createContext<SearchedProducts>({
  searchedProducts: [],
  setSearchedProducts: () => {},
});
