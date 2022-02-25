import { useEffect } from 'react';

export default function Toggle({ enabled, setEnabled, onEnabled, onDisabled }) {
  useEffect(() => {
    if (enabled && onEnabled) {
      onEnabled();
    } else if (!enabled && onDisabled) {
      onDisabled();
    }
  }, [enabled]);

  return (
    <label className="flex items-center h-5">
      <input
        type="checkbox"
        onChange={() => {
          setEnabled(!enabled);
        }}
        className="hidden"
      />
      <span
        className={`${
          enabled
            ? 'bg-green-500 text-green-500 focus:ring-green-500 hover:bg-green-600 active:bg-green-700'
            : 'bg-red-500 text-red-500 focus:ring-red-500 hover:bg-red-600 active:bg-red-700'
        } rounded-full w-4 h-4 border border-gray-50 inline-block cursor-pointer`}
        tabIndex="0"
      ></span>
    </label>
  );
}
