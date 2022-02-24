import { useState } from 'react';
import Button from './Button';
import Dropdown from './Dropdown';
import Cog from './icons/Cog';
import Input from './Input';
import ListItem from './ListItem';
import StackedList from './StackedList';
import Toggle from './Toggle';

export default function Setting() {
  const [enabledTitle, setEnabledTitle] = useState();
  const [enabledSearch, setEnabledSearch] = useState();
  const [enabledMove, setEnabledMove] = useState();
  const [enabledUnit, setEnabledUnit] = useState();

  return (
    <div className="p-6">
      <Dropdown
        button={
          <Button>
            <Cog />
          </Button>
        }
      >
        <StackedList>
          <ListItem>
            <div className="p-3 flex justify-between items-center">
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
            <div className="p-3">
              <div>
                <Input placeholder={'avaliable options'} />
              </div>
              <div>
                <Input placeholder={'selected options'} />
              </div>
            </div>
          </ListItem>
          <ListItem>
            <div className="p-3 flex justify-between items-center">
              <span className="text-lg">검색</span>
              <span>
                <Toggle enabled={enabledSearch} setEnabled={setEnabledSearch} />
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="p-3 flex justify-between items-center">
              <span className="text-lg">하나씩만 옮기기</span>
              <span>
                <Toggle enabled={enabledMove} setEnabled={setEnabledMove} />
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="p-3 flex justify-between items-center">
              <span className="text-lg">선택된 아이템 갯수 표시</span>
              <span>
                <Toggle enabled={enabledUnit} setEnabled={setEnabledUnit} />
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="p-3 flex items-center space-x-2">
              <span className="text-lg">아이템 크기</span>
              <span>xs</span>
              <span>s</span>
              <span>m</span>
            </div>
          </ListItem>
          <ListItem>
            <div className="p-3">
              <div>
                <Input placeholder={`가로 (현재: 171px)`} />
              </div>
              <div>
                <Input placeholder={`세로 (현재: 300px)`} />
              </div>
            </div>
          </ListItem>
        </StackedList>
      </Dropdown>
    </div>
  );
}
