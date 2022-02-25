import { useState } from 'react';

import Button from './components/Button';
import ChevronDoubleLeft from './components/icons/ChevronDoubleLeft';
import ChevronDoubleRight from './components/icons/ChevronDoubleRight';
import ChevronLeft from './components/icons/ChevronLeft';
import ChevronRight from './components/icons/ChevronRight';
import Refresh from './components/icons/Refresh';
import Selector from './components/Selector';
import Setting from './components/Setting';
import { emojiMenus } from './constances';
import moveItems from './utils/moveItems';

const items = emojiMenus;

const initialSeleted = {
  left: [],
  right: [],
};
function App() {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState(initialSeleted);

  const [leftTitle, setLeftTitle] = useState('available options');
  const [rightTitle, setRightTitle] = useState('selected options');
  const [moveOnlyOne, setMoveOnlyOne] = useState(false);
  const [showSelected, setShowSelected] = useState(false);
  const [itemSize, setItemSize] = useState(15);
  const [listHeight, setListHeight] = useState(400);
  const [listWidth, setListWidth] = useState(300);
  const [searchDisabled, setSearchDisabled] = useState(false);

  const {
    handleLeftSelect,
    handleRightSelect,
    moveToRight,
    moveToLeft,
    resetMove,
  } = moveItems({
    items,
    initialSeleted,
    leftItems,
    rightItems,
    setLeftItems,
    setRightItems,
    selectedItems,
    setSelectedItems,
  });

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
    <div className="flex p-6 space-x-3">
      <Selector
        list={leftItems}
        selectedItems={selectedItems.left}
        handleSelect={handleLeftSelect}
        setList={setLeftItems}
        listWidth={listWidth}
        listHeight={listHeight}
        leftTitle={leftTitle}
        searchDisabled={searchDisabled}
        itemSize={itemSize}
        showSelected={showSelected}
      />
      <div className="flex flex-col self-center">
        <Button onClick={resetMove}>
          <Refresh />
        </Button>
        <Button onClick={() => moveToLeft({ all: true })}>
          <ChevronDoubleLeft />
        </Button>
        <Button onClick={() => moveToRight({ all: true })}>
          <ChevronDoubleRight />
        </Button>
        <Button onClick={moveToLeft}>
          <ChevronLeft />
        </Button>
        <Button onClick={moveToRight}>
          <ChevronRight />
        </Button>
      </div>
      <Selector
        list={rightItems}
        selectedItems={selectedItems.right}
        handleSelect={handleRightSelect}
        setList={setRightItems}
        listHeight={listHeight}
        listWidth={listWidth}
        rightTitle={rightTitle}
        searchDisabled={searchDisabled}
        itemSize={itemSize}
        showSelected={showSelected}
      />
      <Setting
        changeListSize={onChangeListSize}
        changeTitle={onChangeTitle}
        setSearchDisabled={setSearchDisabled}
        setItemSize={setItemSize}
        setShowSelected={setShowSelected}
        setMoveOnlyOne={setMoveOnlyOne}
      />
    </div>
  );
}

export default App;
