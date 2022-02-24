import { useState } from 'react';

export default function ListItem({ children, handleSelect }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    handleSelect();
    setClicked((prev) => !prev);
  };

  return (
    <div
      className={`block hover:${
        clicked //
          ? 'bg-gray-400'
          : 'bg-gray-50'
      } ${clicked ? 'bg-gray-300' : ''}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
