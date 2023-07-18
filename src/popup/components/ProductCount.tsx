import { useContext } from 'react';
import { SearchedProductsContext } from 'popup/context';

export default function ProductCount() {
  const { searchedProducts } = useContext(SearchedProductsContext);

  return (
    <span className="block text-base">
      {searchedProducts.length} product{searchedProducts.length !== 1 ? 's' : ''}
    </span>
  );
}
