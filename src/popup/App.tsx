import { useEffect, useState } from 'react';
import { Product } from 'types';
import { getProductsFromTab } from 'utils';
import ProductTile from './components/ProductTile';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromTab = await getProductsFromTab();
      setProducts(productsFromTab);
    };
    getProducts();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-4">
        <span className="text-lg">
          {products.length} product{products.length !== 1 ? 's' : ''}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductTile product={product} />
        ))}
      </div>
    </div>
  );
}
