import { useState } from 'react';
import Input from './Input';
import ListItem from './ListItem';
import StackedList from './StackedList';
import Title from './Title';

export default function Selector({
  list,
  setLeftItems,
  setRightItems,
  selectedItems,
  setSelectedItems,
  handleSelect,
}) {
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
          {list?.map((item) => {
            return (
              <ListItem
                key={item.id}
                id={item.id}
                onClick={() => handleSelect(item.id)}
              >
                <div className="p-3 cursor-pointer">
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
