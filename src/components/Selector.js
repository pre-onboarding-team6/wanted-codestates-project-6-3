import Input from './Input';
import ListItem from './ListItem';
import StackedList from './StackedList';
import Title from './Title';
import { useState } from 'react';
import useDragAndDrop from '../hooks/useDragAndDrop';

export default function Selector({ list, selectedItems, handleSelect }) {
  const [items, setItems] = useState(list);

  const { handleDragStart, onDragEnter, handleMouseLeave } = useDragAndDrop({
    setItems,
    items,
  });

  return (
    <div className="flex flex-col space-y-2">
      <Input placeholder={'search'} />
      <div
        className="flex flex-col overflow-hidden bg-white shadow sm:rounded-md"
        style={{
          width: '300px',
          height: '400px',
        }}
      >
        <Title>
          <div className="p-3">
            <span className="text-xl">Title</span>
          </div>
        </Title>
        <StackedList>
          <div onMouseLeave={handleMouseLeave}>
            {list?.map((item, index) => {
              return (
                <ListItem
                  key={item.id}
                  id={item.id}
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDragEnter={(e) => onDragEnter(e, index)}
                  draggable
                  onClick={(e) => handleSelect(e, item.id)}
                  className={`block hover:bg-gray-100 select-none
                ${
                  selectedItems.map(({ id }) => id).includes(item.id)
                    ? 'bg-gray-100'
                    : 'bg-white'
                }
                  `}
                >
                  <div className="p-3 cursor-pointer">
                    <span>{item.emoji}</span>
                    <span>{item.name}</span>
                  </div>
                </ListItem>
              );
            })}
          </div>
        </StackedList>
        <div className="flex justify-center p-2 border-t">
          <span>
            {selectedItems.length} / {list.length}
          </span>
        </div>
      </div>
    </div>
  );
}
