import { useContext } from 'react';
import { SearchedProductsContext } from 'popup/context';
import ProductTile from './ProductTile';

export default function ProductList() {
  const { searchedProducts } = useContext(SearchedProductsContext);

  return (
    <div className="grid grid-cols-5 gap-2">
      {searchedProducts.map((product) => (
        <ProductTile product={product} key={product.link} />
      ))}
    </div>
  );
}
