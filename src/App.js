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

const items = emojiMenus;

const initialSeleted = {
  left: [],
  right: [],
};

function App() {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState(initialSeleted);

  return (
    <div className="flex items-center p-6 space-x-3">
      <Selector
        list={leftItems}
        setLeftItems={setLeftItems}
        setRightItems={setRightItems}
        selectedItems={selectedItems}
        handleSelect={setSelectedItems}
      />
      <div className="flex flex-col">
        <Button>
          <Refresh />
        </Button>
        <Button>
          <ChevronDoubleLeft />
        </Button>
        <Button>
          <ChevronDoubleRight />
        </Button>
        <Button onClick={() => {}}>
          <ChevronLeft />
        </Button>
        <Button onClick={() => {}}>
          <ChevronRight />
        </Button>
      </div>
      <Selector
        list={rightItems}
        setLeftItems={setLeftItems}
        setRightItems={setRightItems}
        selectedItems={selectedItems}
        handleSelect={setSelectedItems}
      />
      <Setting />
    </div>
  );
}

export default App;
