import { Product } from 'types';

interface ProductTileProps {
  product: Product;
}

export default function ProductTile({ product }: ProductTileProps) {
  const { name, image, ratingCount, price } = product;
  return (
    <div>
      <img src={image} alt={name} className="h-64 object-cover object-center" />
      <div>
        <span className="mr-4 text-lg font-bold">{ratingCount} ratings</span>
        <span className="text-lg">£{price}</span>
      </div>
      <span className="block text-xl">{name.slice(0, 64)}...</span>
    </div>
  );
}
