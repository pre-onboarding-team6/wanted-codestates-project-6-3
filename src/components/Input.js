export default function Input({ type = "text", placeholder }) {
  return (
    <div>
      <input
        type={type}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
}
