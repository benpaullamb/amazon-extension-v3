export default function Input(props: React.ComponentPropsWithoutRef<'input'>) {
  return <input type="text" className="px-3 py-2 block border-2 border-gray-200 rounded-lg shadow text-base" {...props} />;
}
