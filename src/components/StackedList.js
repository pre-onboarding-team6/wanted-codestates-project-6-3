export default function StackedList({
  className = 'bg-white shadow overflow-y-auto sm:rounded-md flex-1',
  children,
  ...rest
}) {
  return (
    <div className={className} {...rest}>
      <div role="list" className="divide-y divide-gray-200">
        {children}
      </div>
    </div>
  );
}
