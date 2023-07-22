import Search from './Search';
import OpenAll from './OpenAll';
import Analysis from './Analysis';

interface ControlPanelProps {
  className?: string;
}

export default function ControlPanel({ className = '' }: ControlPanelProps) {
  return (
    <div className={className}>
      <div className="mb-4 grid grid-cols-[1fr,auto] gap-4">
        <Search />
        <OpenAll />
      </div>
      <Analysis />
    </div>
  );
}
