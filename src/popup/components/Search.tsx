import { useContext, useEffect, useState } from 'react';
import Input from './Input';
import { ProductsContext, SearchedProductsContext } from 'popup/context';

export default function Search() {
  const [search, setSearch] = useState('');
  const products = useContext(ProductsContext);
  const { setSearchedProducts } = useContext(SearchedProductsContext);

  useEffect(() => {
    let searchRegex: RegExp;
    try {
      searchRegex = new RegExp(search, 'gim');
    } catch (err) {
      searchRegex = new RegExp('');
    }

    const searchedProducts = products.filter(({ name }) => searchRegex.test(name));
    setSearchedProducts(searchedProducts);
  }, [search]);

  return (
    <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
  );
}
