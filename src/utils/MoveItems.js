export const moveToRight = (selectedItems, setLeftItems, setRightItems) => {
  // 선택된 아이템들의 id 배열
  const selectedItemIds = selectedItems.map(({ id }) => id);

  // leftItems에서 선택된 아이템 제거
  setLeftItems((prev) =>
    prev.filter((item) => !selectedItemIds.includes(item.id)),
  );
  // rightItems에서 선택된 아이템 추가
  setRightItems((prev) => [...prev, ...selectedItems]);
};

export const handleSelect = (id, setSelectedItems) => {
  // 클릭된 아이템 배열에 담기
  setSelectedItems((prev) =>
    !prev.map(({ id }) => id).includes(id) // 원래 있던 것은 추가하지 않음
      ? [...prev]
      : prev,
  );
};
