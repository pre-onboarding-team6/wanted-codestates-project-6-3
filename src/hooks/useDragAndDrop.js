import { useEffect, useRef } from 'react';

const useDragAndDrop = ({ setItems, items }) => {
  const startContainer = useRef();
  const draggingItem = useRef();
  const dragOverItem = useRef();

  useEffect(() => {
    startContainer.current = false;
  }, []);

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
    startContainer.current = true;
  };

  const onDragEnter = (e, position) => {
    if (!startContainer.current) {
      return;
    } else {
      handleDragEnter(e, position);
    }
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
    const itemsCopy = [...items];
    const draggingItemContent = itemsCopy[dragOverItem.current];
    itemsCopy.splice(dragOverItem.current, 1);
    itemsCopy.splice(draggingItem.current, 0, draggingItemContent);
    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;

    setItems(itemsCopy);
  };

  const handleMouseLeave = () => {
    startContainer.current = false;
  };

  return {
    handleMouseLeave,
    handleDragStart,
    onDragEnter,
  };
};

export default useDragAndDrop;
