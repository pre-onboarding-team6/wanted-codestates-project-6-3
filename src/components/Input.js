export default function Input({
  type = 'text',
  className = 'block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500',
  ...rest
}) {
  return (
    <div>
      <input {...rest} type={type} className={className} />
    </div>
  );
}
