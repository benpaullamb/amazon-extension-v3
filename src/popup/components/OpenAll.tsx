import { useContext } from 'react';
import { SearchedProductsContext } from 'popup/context';
import Button from './Button';
import { openTabGroup } from 'utils';

export default function OpenAll() {
  const { searchedProducts } = useContext(SearchedProductsContext);

  const openAll = () => {
    const links = searchedProducts.map(({ link }) => link);
    openTabGroup(links.slice(0, 10));
  };

  return <Button onClick={openAll}>Open All</Button>;
}
