import { useEffect, useState } from 'react';
import { Product } from 'types';
import { ProductsContext, SearchedProductsContext } from './context';
import { getProductsFromTab } from 'utils';
import ControlPanel from './components/ControlPanel';
import ProductList from './components/ProductList';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const searchedProductsContext = { searchedProducts, setSearchedProducts };

  useEffect(() => {
    (async () => {
      const productsFromTab = await getProductsFromTab();
      setProducts(productsFromTab);
      setSearchedProducts(productsFromTab);
    })();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <SearchedProductsContext.Provider value={searchedProductsContext}>
        <div className="p-4">
          <ControlPanel className="mb-4" />
          <ProductList />
        </div>
      </SearchedProductsContext.Provider>
    </ProductsContext.Provider>
  );
}
