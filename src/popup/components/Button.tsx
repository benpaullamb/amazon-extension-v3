export default function Button({ children, ...props }: React.ComponentPropsWithoutRef<'button'>) {
  return <button className="w-32 p-1 bg-yellow-400 rounded-lg shadow text-base font-medium" {...props}>{children}</button>;
}
