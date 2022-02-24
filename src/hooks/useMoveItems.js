import { useState } from 'react';

const useMoveItems = (items) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);

  const moveToRight = () => {
    // 선택된 아이템들의 id 배열
    const selectedItemIds = selectedItems.map(({ id }) => id);

    // leftItems에서 선택된 아이템 제거
    setLeftItems((prev) =>
      prev.filter((item) => !selectedItemIds.includes(item.id)),
    );
    // rightItems에서 선택된 아이템 추가
    setRightItems((prev) => [...prev, ...selectedItems]);

    // 초기화
    setSelectedItems([]);
  };

  const moveToLeft = () => {
    // 선택된 아이템들의 id 배열
    const selectedItemIds = selectedItems.map(({ id }) => id);

    // leftItems에서 선택된 아이템 추가
    setLeftItems((prev) => [...prev, ...selectedItems]);
    // rightItems에서 선택된 아이템 제거
    setRightItems((prev) =>
      prev.filter((item) => !selectedItemIds.includes(item.id)),
    );

    // 초기화
    setSelectedItems([]);
  };

  const handleSelect = (id) => {
    // 클릭된 아이템 배열에 담기
    setSelectedItems((prev) =>
      !prev.map(({ id }) => id).includes(id) // 원래 있던 것은 추가하지 않음
        ? [...prev, ...items.filter((item) => item.id === id)]
        : prev,
    );
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
