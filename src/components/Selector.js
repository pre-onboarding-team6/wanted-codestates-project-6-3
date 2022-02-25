import Input from './Input';
import ListItem from './ListItem';
import StackedList from './StackedList';
import Title from './Title';
import { useRef, useState } from 'react';
import useDragAndDrop from '../hooks/useDragAndDrop';

export default function Selector({
  list,
  selectedItems,
  handleSelect,
  setList,
  listWidth,
  listHeight,
  leftTitle,
  searchDisabled,
  itemSize,
  showSelected,
  rightTitle,
  moveOnlyOne,
}) {
  const dragContainer = useRef();
  const [keyword, setKeyword] = useState('');
  const onKeyUp = (e) => e.keyCode === 13 && setKeyword(e.target.value);

  const { handleDragStart, onDragEnter, handleMouseLeave } = useDragAndDrop({
    setItems: setList,
    items: list,
  });

  return (
    <div className="flex flex-col space-y-2">
      <Input
        placeholder={'search'}
        disabled={searchDisabled}
        onKeyUp={onKeyUp}
      />
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow"
        style={{
          width: listWidth,
          height: listHeight,
        }}
      >
        <Title>
          <div className="p-3 border-b border-gray-200">
            <span className="text-xl">
              {leftTitle ? leftTitle : rightTitle}
            </span>
          </div>
        </Title>
        <StackedList>
          <div
            ref={dragContainer}
            onMouseLeave={handleMouseLeave}
            className="divide-y divide-gray-200"
          >
            {list?.map((item, index) => {
              return (
                <ListItem
                  key={item.id}
                  id={item.id}
                  onDragStart={(e) => {
                    if (dragContainer.current) {
                      dragContainer.current.classList.add('group');
                    }
                    handleDragStart(e, index);
                  }}
                  onDragEnd={() => {
                    if (dragContainer.current) {
                      dragContainer.current.classList.remove('group');
                    }
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDragEnter={(e) => onDragEnter(e, index)}
                  draggable
                  onClick={(e) => handleSelect(e, item.id)}
                  className={`block group-hover:bg-white hover:bg-gray-100 select-none${
                    selectedItems.map(({ id }) => id).includes(item.id)
                      ? 'bg-gray-100'
                      : 'bg-white'
                  }
                  `}
                >
                  <div className="p-3 cursor-pointer">
                    <span style={{ fontSize: itemSize }}>{item.emoji}</span>
                    <span style={{ fontSize: itemSize }}>{item.name}</span>
                  </div>
                </ListItem>
              );
            })}
          </div>
        </StackedList>
        <div className="flex justify-center p-2 border-t">
          <span className={showSelected ? 'text-black' : 'text-gray-100'}>
            {selectedItems.length} / {list.length}
          </span>
        </div>
      </div>
    </div>
  );
}
