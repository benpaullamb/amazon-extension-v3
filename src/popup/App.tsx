import { useEffect, useState } from 'react';
import { Product } from 'types';
import { ProductContext, SearchContext } from './context';
import { getProductsFromTab } from 'utils';
import ControlPanel from './components/ControlPanel';
import ProductList from './components/ProductList';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>('');
  const searchContext = { search, setSearch };

  useEffect(() => {
    (async () => {
      const productsFromTab = await getProductsFromTab();
      setProducts(productsFromTab);
    })();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <SearchContext.Provider value={searchContext}>
        <div className="p-4">
          <ControlPanel className="mb-4" />
          <ProductList />
        </div>
      </SearchContext.Provider>
    </ProductContext.Provider>
  );
}
