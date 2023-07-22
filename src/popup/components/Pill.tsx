interface PillProps {
  children: React.ReactNode;
}

export default function Pill({ children }: PillProps) {
  return <span className="px-2 py-1 bg-yellow-300 border border-yellow-400 rounded-full text-sm">{children}</span>
}