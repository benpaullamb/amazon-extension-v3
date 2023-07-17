import { useContext } from 'react';
import { ProductsContext } from 'popup/context';

export default function ProductCount() {
  const products = useContext(ProductsContext);

  return (
    <span className="block">
      {products.length} product{products.length !== 1 ? 's' : ''}
    </span>
  );
}
