import Button from './components/Button';
import ChevronDoubleLeft from './components/icons/ChevronDoubleLeft';
import ChevronDoubleRight from './components/icons/ChevronDoubleRight';
import ChevronLeft from './components/icons/ChevronLeft';
import ChevronRight from './components/icons/ChevronRight';
import Refresh from './components/icons/Refresh';
import Selector from './components/Selector';
import Setting from './components/Setting';
import { emojiMenus } from './constances';
import { useState } from 'react';
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
  return (
    <div className="flex p-6 space-x-3">
      <Selector
        list={leftItems}
        selectedItems={selectedItems.left}
        handleSelect={handleLeftSelect}
        setList={setLeftItems}
      />
      <div className="flex flex-col self-center">
        <Button>
          <Refresh onClick={resetMove} />
        </Button>
        <Button>
          <ChevronDoubleLeft onClick={() => moveToLeft({ all: true })} />
        </Button>
        <Button>
          <ChevronDoubleRight onClick={() => moveToRight({ all: true })} />
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
      />
      <Setting />
    </div>
  );
}

export default App;
