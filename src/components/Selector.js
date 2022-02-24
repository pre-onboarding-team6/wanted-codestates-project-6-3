import { useEffect, useState } from 'react';

import Input from './Input';
import ListItem from './ListItem';
import StackedList from './StackedList';
import Title from './Title';

import { emojiMenus } from '../constances';

export default function Selector(props) {
  const [keyword, setKeyword] = useState('');

  const onKeyUp = (e) => e.keyCode === 13 && setKeyword(e.target.value);

  return (
    <div
      style={{
        width: props.listWidth,
        height: props.listHeight,
      }}
      className="flex flex-col space-y-2"
    >
      <Input
        placeholder={'search'}
        disabled={props.searchDisabled}
        onKeyUp={onKeyUp}
      />
      <div className="flex flex-col overflow-hidden bg-white shadow sm:rounded-md">
        <Title>
          <div className="p-3">
            <span className="text-xl">
              {props.leftTitle ? props.leftTitle : props.rightTitle}
            </span>
          </div>
        </Title>
        <StackedList>
          {emojiMenus.map((item, index) => {
            return (
              item.name.includes(keyword) && (
                <ListItem key={index}>
                  <div className="p-3 cursor-pointer">
                    <span style={{ fontSize: props.itemSize }}>
                      {item.emoji}
                    </span>
                    <span style={{ fontSize: props.itemSize }}>
                      {item.name}
                    </span>
                  </div>
                </ListItem>
              )
            );
          })}
        </StackedList>
        <div className="flex justify-center p-2 border-t">
          {props.showSelected ? <span>0/4</span> : ''}
        </div>
      </div>
    </div>
  );
}
