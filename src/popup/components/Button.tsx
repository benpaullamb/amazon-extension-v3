export default function Button({ children, ...props }: React.ComponentPropsWithoutRef<'button'>) {
  return <button className="w-32 p-2 bg-yellow-400 rounded-full shadow text-base" {...props}>{children}</button>;
}
