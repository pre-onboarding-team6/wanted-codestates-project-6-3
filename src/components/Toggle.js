export default function Toggle({ enabled, setEnabled, onEnabled, onDisabled }) {
  return (
    <label className="flex items-center h-5">
      <input
        type="checkbox"
        checked={enabled}
        value={''}
        onChange={() => {
          setEnabled(!enabled);
        }}
        className="hidden"
      />
      <span
        className={`${
          enabled
            ? 'bg-green-500 text-green-500 focus:ring-green-500'
            : 'bg-red-500 text-red-500 focus:ring-red-500'
        } rounded-full w-4 h-4 border border-gray-50 inline-block cursor-pointer`}
        tabIndex="0"
      ></span>
    </label>
  );
}
