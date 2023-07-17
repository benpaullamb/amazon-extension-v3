import { useContext } from 'react';
import Input from './Input';
import { SearchContext } from 'popup/context';

export default function Search() {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
  );
}
