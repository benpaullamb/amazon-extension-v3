import { Product } from 'types';
import numeral from 'numeral';

interface ProductTileProps {
  product: Product;
}

export default function ProductTile({ product }: ProductTileProps) {
  const { name, image, ratingCount, price } = product;
  return (
    <div className="p-2 rounded-lg shadow-lg">
      <img src={image} alt={name} className="h-32 mb-1 object-contain object-center" />
      <div className="mb-1">
        <span className="mb-1 block font-semibold text-base">{numeral(ratingCount).format('0,0')} ratings</span>
        <span className="block text-base">£{numeral(price).format('£0,0.00')}</span>
      </div>
      <span className="block text-sm">{name.slice(0, 64)}...</span>
    </div>
  );
}
