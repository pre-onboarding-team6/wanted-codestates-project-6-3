import Input from './Input';
import ListItem from './ListItem';
import StackedList from './StackedList';
import Title from './Title';
import { useRef, useState } from 'react';

export default function Selector({ list, isDraggable, order }) {
  const [items, setItems] = useState(list);

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

  return (
    <div
      style={{
        width: '300px',
        height: '400px',
      }}
      className="flex flex-col space-y-2"
    >
      <Input placeholder={'search'} />
      <div className="flex flex-col overflow-hidden bg-white shadow sm:rounded-md">
        <Title>
          <div className="p-3">
            <span className="text-xl">Title</span>
          </div>
        </Title>
        <StackedList>
          {items.map((item, index) => {
            return (
              <ListItem key={index}>
                <div
                  className="p-3 cursor-pointer"
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDragEnter={(e) => onDragEnter(e, index)}
                  onDrop={(e) => handleDrop()}
                  draggable
                >
                  <span>{item.emoji}</span>
                  <span>{item.name}</span>
                </div>
              </ListItem>
            );
          })}
        </StackedList>
        <div className="flex justify-center p-2 border-t">
          <span>0/4</span>
        </div>
      </div>
    </div>
  );
}
