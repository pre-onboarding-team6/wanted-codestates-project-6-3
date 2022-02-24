const MoveItems = ({
  initialSeleted,
  setLeftItems,
  setRightItems,
  selectedItems,
  setSelectedItems,
  leftItems,
  rightItems,
}) => {
  const handleLeftSelect = (id) => {
    setSelectedItems((prev) => ({
      left: prev.left.map(({ id }) => id).includes(id) // 이미 있던 아이템이라면
        ? prev.left.filter(({ id: itemId }) => itemId !== id) // selected에서 삭제
        : [
            ...prev.left,
            ...leftItems.filter(({ id: itemId }) => itemId === id),
          ], // selected에 추가
      right: [],
    }));
  };

  const handleRightSelect = (id) => {
    setSelectedItems((prev) => ({
      left: [],
      right: prev.right.map(({ id }) => id).includes(id) // 이미 있던 아이템이라면
        ? prev.right.filter(({ id: itemId }) => itemId !== id) // selected에서 삭제
        : [
            ...prev.right,
            ...rightItems.filter(({ id: itemId }) => itemId === id),
          ], // selected에 추가
    }));
  };

  const moveToRight = () => {
    // 선택된 아이템들의 id 배열
    const selectedItemIds = selectedItems.left.map(({ id }) => id);
    // leftItems에서 선택된 아이템 제거
    setLeftItems((prev) =>
      prev.filter((item) => !selectedItemIds.includes(item.id)),
    );
    // rightItems에 선택된 아이템 추가
    setRightItems((prev) => [...prev, ...selectedItems.left]);
    // 초기화
    setSelectedItems(initialSeleted);
  };

  const moveToLeft = () => {
    // 선택된 아이템들의 id 배열
    const selectedItemIds = selectedItems.right.map(({ id }) => id);
    // rightItems에서 선택된 아이템 제거
    setRightItems((prev) =>
      prev.filter((item) => !selectedItemIds.includes(item.id)),
    );
    // leftItems에 선택된 아이템 추가
    setLeftItems((prev) => [...prev, ...selectedItems.right]);
    // 초기화
    setSelectedItems(initialSeleted);
  };

  return { handleLeftSelect, handleRightSelect, moveToRight, moveToLeft };
};

export default MoveItems;
