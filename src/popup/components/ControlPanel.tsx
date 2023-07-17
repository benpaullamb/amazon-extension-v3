import Search from './Search';
import OpenAll from './OpenAll';
import ProductCount from './ProductCount';

interface ControlPanelProps {
  className?: string;
}

export default function ControlPanel({ className = '' }: ControlPanelProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="grid grid-cols-[1fr,auto] gap-4">
        <Search />
        <OpenAll />
      </div>
      <ProductCount />
    </div>
  );
}
