export default function Input(props: React.ComponentPropsWithoutRef<'input'>) {
  return <input type="text" className="p-2 block border-2 border-gray-500 rounded-md text-base" {...props} />;
}
