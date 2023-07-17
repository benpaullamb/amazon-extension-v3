import { Product } from 'types';
import numeral from 'numeral';

interface ProductTileProps {
  product: Product;
}

export default function ProductTile({ product }: ProductTileProps) {
  const { name, image, ratingCount, price } = product;
  return (
    <div className="p-4 rounded-lg shadow-lg">
      <img src={image} alt={name} className="h-32 mb-1 object-cover object-center" />
      <div className="mb-1">
        <span className="mb-1 block font-bold">{numeral(ratingCount).format('0,0')} ratings</span>
        <span className="block">£{numeral(price).format('£0,0.00')}</span>
      </div>
      <span className="block">{name.slice(0, 64)}...</span>
    </div>
  );
}
