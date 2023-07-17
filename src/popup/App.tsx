import { useEffect, useState } from 'react';
import { Product } from 'types';
import ProductContext from './context';
import { getProductsFromTab } from 'utils';
import ProductTile from './components/ProductTile';
import OpenAll from './components/OpenAll';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const productsFromTab = await getProductsFromTab();
      setProducts(productsFromTab);
    })();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <div className="p-4">
        <div className="mb-4">
          <OpenAll />
          <span>
            {products.length} product{products.length !== 1 ? 's' : ''}
          </span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {products.map((product) => (
            <ProductTile product={product} />
          ))}
        </div>
      </div>
    </ProductContext.Provider>
  );
}
