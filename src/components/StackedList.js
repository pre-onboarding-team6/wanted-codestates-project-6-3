export default function StackedList({ children }) {
  return (
    <div className="bg-white shadow overflow-y-auto sm:rounded-md flex-1">
      <div role="list" className="divide-y divide-gray-200">
        {children}
      </div>
    </div>
  );
}
