import { useContext } from 'react';
import { ProductContext, SearchContext } from 'popup/context';
import ProductTile from './ProductTile';

export default function ProductList() {
  const products = useContext(ProductContext);
  const { search } = useContext(SearchContext);
  let searchRegex: RegExp;
  try {
    searchRegex = new RegExp(search, 'gim');
  } catch (err) {
    searchRegex = new RegExp('');
  }
  const filteredProducts = products.filter(({ name }) => searchRegex.test(name));

  return (
    <div className="grid grid-cols-5 gap-2">
      {filteredProducts.map((product) => (
        <ProductTile product={product} key={product.link} />
      ))}
    </div>
  );
}
