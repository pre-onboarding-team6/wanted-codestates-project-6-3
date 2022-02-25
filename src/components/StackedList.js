export default function StackedList({
  className = 'flex-1 overflow-y-auto bg-white rounded-md shadow',
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
