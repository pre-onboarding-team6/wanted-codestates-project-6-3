export default function Button({
  children,
  type = 'button',
  className = 'inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
  ...rest
}) {
  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}
