import numeral from 'numeral';
import { SearchedProductsContext } from 'popup/context';
import { useContext } from 'react';

export default function Analysis() {
  const { searchedProducts } = useContext(SearchedProductsContext);

  const productsByPrice = [...searchedProducts].sort((a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  });

  const middleIndex = Math.floor(productsByPrice.length / 2);
  const medianPrice = productsByPrice[middleIndex]?.price || 0;

  return <div>Median Price: £{numeral(medianPrice).format('£0,0.00')}</div>;
}
