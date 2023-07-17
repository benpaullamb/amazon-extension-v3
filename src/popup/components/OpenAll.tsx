import { useContext } from 'react';
import { ProductContext } from 'popup/context';
import Button from './Button';
import { openTabGroup } from 'utils';

export default function OpenAll() {
  const products = useContext(ProductContext);

  const openAll = () => {
    const links = products.map(({ link }) => link);
    openTabGroup(links.slice(0, 10));
  };

  return <Button onClick={openAll}>Open All</Button>;
}
