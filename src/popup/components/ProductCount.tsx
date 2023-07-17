import { useContext } from 'react';
import { ProductContext } from 'popup/context';

export default function ProductCount() {
  const products = useContext(ProductContext);

  return (
    <span className="block">
      {products.length} product{products.length !== 1 ? 's' : ''}
    </span>
  );
}
