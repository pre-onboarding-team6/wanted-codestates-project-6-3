const moveItems = ({
  items,
  initialSeleted,
  setLeftItems,
  setRightItems,
  selectedItems,
  setSelectedItems,
  leftItems,
  rightItems,
}) => {
  // shift 클릭
  // 선택된 아이템들, 왼쪽/오른쪽 아이템들, 지금 클릭된 id받아서 범위 내의 아이템들 반환
  const shiftClick = (selectedItems, originItems, id) => {
    // start 초기값이 0이기 때문에 처음부터 shift 누르고 아이템 선택하면 맨 처음 아이템부터 모두 선택
    let [start, end] = [0, 0];

    // start는 selectedItems에 가장 처음에 있던 아이템의 id로 index를 구함
    if (selectedItems[0]) {
      const startId = originItems.filter(
        ({ id }) => id === selectedItems[0].id,
      )[0].id;
      start = originItems.map(({ id }) => id === startId).indexOf(true);
    }
    // end는 지금 클릭된 id로 index를 구함
    end = originItems.map(({ id: itemId }) => itemId === id).indexOf(true);

    // start 부터 end 까지 선택된 것으로 설정
    const selects = originItems.filter((item, index) =>
      start > end
        ? index >= end && index <= start
        : index >= start && index <= end,
    );

    return selects;
  };

  const handleLeftSelect = (e, id) => {
    if (e.shiftKey) {
      // shift 다중 선택
      const selects = shiftClick(selectedItems.left, leftItems, id);

      setSelectedItems((prev) => ({
        left: prev.left.map(({ id }) => id).includes(id)
          ? prev.left.filter(({ id: itemId }) => itemId !== id)
          : selects, // start~end의 아이템
        right: [],
      }));
    } else {
      // ctrl 다중 & 하나씩 옮기기
      setSelectedItems((prev) => ({
        left: prev.left.map(({ id }) => id).includes(id) // 이미 있던 아이템이라면
          ? prev.left.filter(({ id: itemId }) => itemId !== id) // selected에서 삭제
          : e.ctrlKey || e.metaKey
          ? [
              ...prev.left,
              ...leftItems.filter(({ id: itemId }) => itemId === id), // ctrl/cmd 키 누른거면 축적
            ]
          : leftItems.filter(({ id: itemId }) => itemId === id), // 아니면 그냥 selected에 추가
        right: [],
      }));
    }
  };

  const handleRightSelect = (e, id) => {
    if (e.shiftKey) {
      // shift 다중 선택
      const selects = shiftClick(selectedItems.right, rightItems, id);

      setSelectedItems((prev) => ({
        left: [],
        right: prev.right.map(({ id }) => id).includes(id)
          ? prev.right.filter(({ id: itemId }) => itemId !== id)
          : selects,
      }));
    } else {
      // ctrl 다중 & 하나씩 옮기기
      setSelectedItems((prev) => ({
        left: [],
        right: prev.right.map(({ id }) => id).includes(id)
          ? prev.right.filter(({ id: itemId }) => itemId !== id)
          : e.ctrlKey || e.metaKey
          ? [
              ...prev.right,
              ...rightItems.filter(({ id: itemId }) => itemId === id),
            ]
          : rightItems.filter(({ id: itemId }) => itemId === id),
      }));
    }
  };

  const moveToRight = ({ all = false }) => {
    // 선택된 아이템들의 id 배열
    const selectedItemIds = all
      ? leftItems.map(({ id }) => id)
      : selectedItems.left.map(({ id }) => id);

    // leftItems에서 선택된 아이템 제거
    setLeftItems((prev) =>
      prev.filter((item) => !selectedItemIds.includes(item.id)),
    );
    // rightItems에 선택된 아이템 추가
    setRightItems((prev) =>
      all ? [...prev, ...leftItems] : [...prev, ...selectedItems.left],
    );
    // 초기화
    setSelectedItems(initialSeleted);
  };

  const moveToLeft = ({ all = false }) => {
    // 선택된 아이템들의 id 배열
    const selectedItemIds = all
      ? rightItems.map(({ id }) => id)
      : selectedItems.right.map(({ id }) => id);

    // rightItems에서 선택된 아이템 제거
    setRightItems((prev) =>
      prev.filter((item) => !selectedItemIds.includes(item.id)),
    );
    // leftItems에 선택된 아이템 추가
    setLeftItems((prev) =>
      all ? [...prev, ...rightItems] : [...prev, ...selectedItems.right],
    );
    // 초기화
    setSelectedItems(initialSeleted);
  };

  const resetMove = () => {
    // 초기화
    setLeftItems(items);
    setRightItems([]);
    setSelectedItems(initialSeleted);
  };

  return {
    handleLeftSelect,
    handleRightSelect,
    moveToRight,
    moveToLeft,
    resetMove,
  };
};

export default moveItems;
