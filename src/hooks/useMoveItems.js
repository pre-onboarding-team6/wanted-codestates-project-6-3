import { useState } from 'react';

const useMoveItems = (items) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);

  const moveToRight = () => {
    console.log(selectedItems);
    setLeftItems((prev) =>
      prev.filter(
        (item) => !selectedItems.map(({ id }) => id).includes(item.id),
      ),
    );
    setRightItems((prev) => [...prev, ...selectedItems]);
    setSelectedItems([]);
  };

  const moveToLeft = () => {
    setLeftItems((prev) => [...prev, ...selectedItems]);
    setRightItems((prev) =>
      prev.filter(
        (item) => !selectedItems.map(({ id }) => id).includes(item.id),
      ),
    );
    setSelectedItems([]);
  };

  const handleSelect = (id) => {
    console.log(id);
    setSelectedItems((prev) => [
      ...prev,
      ...items.filter((item) => item.id === id),
    ]);
  };

  return {
    selectedItems,
    setSelectedItems,
    leftItems,
    setLeftItems,
    rightItems,
    setRightItems,
    moveToRight,
    moveToLeft,
    handleSelect,
  };
};

export default useMoveItems;
