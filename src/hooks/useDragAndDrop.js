import { useRef } from 'react';

const useDragAndDrop = ({ isDraggable, order, setItems, items }) => {
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
    isDraggable[order] = false;
  };

  const onDragEnter = (e, position) => {
    if (!(order === '1' ? isDraggable[0] : isDraggable[1])) {
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

  const handleDrop = () => {
    isDraggable[order] = true;
  };

  return {
    handleDragStart,
    onDragEnter,
    handleDrop,
  };
};

export default useDragAndDrop;
