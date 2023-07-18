import { useContext } from 'react';
import { SearchedProductsContext } from 'popup/context';
import ProductTile from './ProductTile';

export default function ProductList() {
  const { searchedProducts } = useContext(SearchedProductsContext);

  const productsByRating = [...searchedProducts].sort((a, b) => {
    if (a.ratingCount > b.ratingCount) return -1;
    if (a.ratingCount < b.ratingCount) return 1;
    return 0;
  });

  return (
    <div className="grid grid-cols-5 gap-2">
      {productsByRating.map((product) => (
        <ProductTile product={product} key={product.link} />
      ))}
    </div>
  );
}
