import { useEffect, useState } from 'react';
import Button from './Button';
import Cog from './icons/Cog';
import Input from './Input';
import ListItem from './ListItem';
import Popover from './Popover';
import Radio from './Radio';
import StackedList from './StackedList';
import Toggle from './Toggle';

const sizeList = [
  { type: 'xs', value: 15 },
  { type: 's', value: 20 },
  { type: 'm', value: 30 },
];

export default function Setting({
  changeListSize,
  changeTitle,
  setSearchDisabled,
  setItemSize,
  setShowSelected,
  setMoveOnlyOne,
}) {
  const [enabledTitle, setEnabledTitle] = useState(false);
  const [enabledSearch, setEnabledSearch] = useState(false);
  const [enabledMove, setEnabledMove] = useState(false);
  const [enabledUnit, setEnabledUnit] = useState(false);

  const [isChangeTitle, setIsChangeTitle] = useState(false);

  const [leftTitle, setLeftTitle] = useState('available options');
  const [rightTitle, setRightTitle] = useState('selected options');

  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(400);

  const [sizeType, setSizeType] = useState(sizeList[0].type);

  const onChangeListSize = (e, type) => {
    if (e.target.value >= '0' && e.target.value <= '9') {
      let result = parseInt(e.target.value);
      if (type === 'width') {
        changeListSize(result, 'width');
        setWidth(result);
      } else {
        changeListSize(result, 'height');
        setHeight(result);
      }
    } else {
      alert('숫자를 입력해주세요');
    }
  };

  return (
    <div>
      <Popover
        button={
          <Button>
            <Cog />
          </Button>
        }
      >
        <StackedList>
          <ListItem>
            <div className="flex items-center justify-between p-3">
              <span className="text-lg">타이틀</span>
              <span>
                <Toggle
                  enabled={enabledTitle}
                  setEnabled={setEnabledTitle}
                  onEnabled={() => {
                    setIsChangeTitle(true);
                  }}
                  onDisabled={() => {
                    setIsChangeTitle(false);
                  }}
                />
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex flex-col p-3 space-y-1">
              <div>
                <Input
                  // value={leftTitle}
                  defaultValue={leftTitle}
                  placeholder={`${leftTitle}`}
                  // onChange={(e) => setLeftTitle(e.target.value)}
                  onKeyUp={(e) =>
                    e.keyCode === 13 && changeTitle(e.target.value, 'avail')
                  }
                  disabled={!isChangeTitle}
                />
              </div>
              <div>
                <Input
                  value={rightTitle}
                  placeholder={`${rightTitle}`}
                  onChange={(e) => setRightTitle(e.target.value)}
                  onKeyUp={(e) =>
                    e.keyCode === 13 && changeTitle(e.target.value, 'selected')
                  }
                  disabled={!isChangeTitle}
                />
              </div>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex items-center justify-between p-3">
              <span className="text-lg">검색</span>
              <span>
                <Toggle
                  enabled={enabledSearch}
                  setEnabled={setEnabledSearch}
                  onEnabled={() => {
                    setSearchDisabled(false);
                  }}
                  onDisabled={() => {
                    setSearchDisabled(true);
                  }}
                />
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex items-center justify-between p-3">
              <span className="text-lg">하나씩만 옮기기</span>
              <span>
                <Toggle
                  enabled={enabledMove}
                  setEnabled={setEnabledMove}
                  onEnabled={() => {
                    setMoveOnlyOne(true);
                  }}
                  onDisabled={() => {
                    setMoveOnlyOne(false);
                  }}
                />
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex items-center justify-between p-3">
              <span className="text-lg">선택된 아이템 갯수 표시</span>
              <span>
                <Toggle
                  enabled={enabledUnit}
                  setEnabled={setEnabledUnit}
                  onEnabled={() => {
                    setShowSelected(true);
                  }}
                  onDisabled={() => {
                    setShowSelected(false);
                  }}
                />
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex items-center justify-between p-3">
              <span className="text-lg">아이템 크기</span>
              <div className="flex items-center space-x-4">
                {sizeList.map((item, index) => (
                  <Radio
                    key={index}
                    name="size"
                    value={sizeType}
                    label={item.type}
                    onChange={() => {
                      setSizeType(item.type);
                      setItemSize(item.value);
                    }}
                  />
                ))}
              </div>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex flex-col p-3 space-y-1">
              <div>
                <Input
                  placeholder={`가로 (현재: ${width}px)`}
                  onKeyUp={(e) =>
                    e.keyCode === 13 && onChangeListSize(e, 'width')
                  }
                />
              </div>
              <div>
                <Input
                  placeholder={`세로 (현재: ${height}px)`}
                  onKeyUp={(e) =>
                    e.keyCode === 13 && onChangeListSize(e, 'height')
                  }
                />
              </div>
            </div>
          </ListItem>
        </StackedList>
      </Popover>
    </div>
  );
}
