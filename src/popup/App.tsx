import { useEffect, useState } from 'react';
import { getProductsFromTab, openTabGroup } from 'utils';
import ProductTile from './components/ProductTile';
import Button from './components/Button';
import { Product } from 'types';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromTab = await getProductsFromTab();
      setProducts(productsFromTab);
    };
    getProducts();
  }, []);

  const openAll = () => {
    const links = products.map(({link}) => link);
    openTabGroup(links.slice(0, 10));
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <Button onClick={openAll}>Open All</Button>
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
  );
}
