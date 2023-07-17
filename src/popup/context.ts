import { createContext } from 'react';
import { Product } from 'types';

export const ProductContext = createContext<Product[]>([]);

interface SearchContextValue {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextValue>({ search: '', setSearch: () => {} });
