import { useEffect, useState } from 'react';
import Button from './Button';
import Cog from './icons/Cog';
import Input from './Input';
import ListItem from './ListItem';
import Popover from './Popover';
import Radio from './Radio';
import StackedList from './StackedList';
import Toggle from './Toggle';

export default function Setting() {
  const [enabledTitle, setEnabledTitle] = useState();
  const [enabledSearch, setEnabledSearch] = useState();
  const [enabledMove, setEnabledMove] = useState();
  const [enabledUnit, setEnabledUnit] = useState();

  const sizeType = ['xs', 's', 'm'];
  const [size, setSize] = useState('xs');
  useEffect(() => {
    console.log('size 변경 => ', size);
  }, [size]);

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
                    console.log('title 수정가능');
                  }}
                  onDisabled={() => {
                    console.log('title 수정불가');
                  }}
                />
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="p-3 flex flex-col space-y-1">
              <div>
                <Input
                  placeholder={'avaliable options'}
                  onKeyDown={() => {
                    console.log('sub');
                  }}
                />
              </div>
              <div>
                <Input placeholder={'selected options'} />
              </div>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex items-center justify-between p-3">
              <span className="text-lg">검색</span>
              <span>
                <Toggle enabled={enabledSearch} setEnabled={setEnabledSearch} />
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex items-center justify-between p-3">
              <span className="text-lg">하나씩만 옮기기</span>
              <span>
                <Toggle enabled={enabledMove} setEnabled={setEnabledMove} />
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex items-center justify-between p-3">
              <span className="text-lg">선택된 아이템 갯수 표시</span>
              <span>
                <Toggle enabled={enabledUnit} setEnabled={setEnabledUnit} />
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="p-3 flex items-center justify-between">
              <span className="text-lg">아이템 크기</span>
              <div className="flex items-center space-x-4">
                {sizeType.map((type, index) => (
                  <Radio
                    key={index}
                    name="size"
                    value={size}
                    label={type}
                    onChange={() => {
                      setSize(type);
                    }}
                  />
                ))}
              </div>
            </div>
          </ListItem>
          <ListItem>
            <div className="p-3 flex flex-col space-y-1">
              <div>
                <Input placeholder={`가로 (현재: 171px)`} />
              </div>
              <div>
                <Input placeholder={`세로 (현재: 300px)`} />
              </div>
            </div>
          </ListItem>
        </StackedList>
      </Popover>
    </div>
  );
}
