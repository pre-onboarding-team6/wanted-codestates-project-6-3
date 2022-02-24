import { useState } from 'react';

import Button from './components/Button';
import ChevronDoubleLeft from './components/icons/ChevronDoubleLeft';
import ChevronDoubleRight from './components/icons/ChevronDoubleRight';
import Refresh from './components/icons/Refresh';
import Selector from './components/Selector';
import Setting from './components/Setting';

import { emojiMenus } from './constances';

function App() {
  const [leftTitle, setLeftTitle] = useState('available options');
  const [rightTitle, setRightTitle] = useState('selected options');
  const [moveOnlyOne, setMoveOnlyOne] = useState(false);
  const [showSelected, setShowSelected] = useState(false);
  const [itemSize, setItemSize] = useState(15);
  const [listHeight, setListHeight] = useState(400);
  const [listWidth, setListWidth] = useState(300);
  const [search, setSearch] = useState(false);

  const [availableList, setAvailableList] = useState(emojiMenus);
  const [selectedList, setSelectedList] = useState(emojiMenus);

  const onChangeListSize = (data, type) => {
    if (type === 'width') {
      setListWidth(data);
    } else if (type === 'height') {
      setListHeight(data);
    }
  };

  const onChangeTitle = (text, type) => {
    if (type === 'avail') {
      setLeftTitle(text);
    } else if (type === 'selected') {
      setRightTitle(text);
    }
  };

  return (
    <div>
      <div className="flex p-6 space-x-6">
        <Selector
          items={availableList}
          listWidth={listWidth}
          listHeight={listHeight}
          leftTitle={leftTitle}
          search={search}
          itemSize={itemSize}
          showSelected={showSelected}
        />
        <div className="flex flex-col self-center">
          <Button>
            <Refresh />
          </Button>
          <Button>
            <ChevronDoubleLeft />
          </Button>
          <Button>
            <ChevronDoubleRight />
          </Button>
        </div>
        <Selector
          items={selectedList}
          listHeight={listHeight}
          listWidth={listWidth}
          rightTitle={rightTitle}
          search={search}
          itemSize={itemSize}
          showSelected={showSelected}
        />
        <Setting
          changeListSize={onChangeListSize}
          changeTitle={onChangeTitle}
          setSearch={setSearch}
          setItemSize={setItemSize}
          setShowSelected={setShowSelected}
        />
      </div>
    </div>
  );
}

export default App;
