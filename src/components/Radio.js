export default function Radio({ name, label, value, onChange, ...rest }) {
  return (
    <label className="flex flex-col justify-center items-center text-sm font-medium text-gray-700">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={value === label}
        onChange={onChange}
        {...rest}
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
      />
      <span>{label}</span>
    </label>
  );
}
