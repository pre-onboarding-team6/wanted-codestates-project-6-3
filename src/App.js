import Button from './components/Button';
import ChevronDoubleLeft from './components/icons/ChevronDoubleLeft';
import ChevronDoubleRight from './components/icons/ChevronDoubleRight';
import ChevronLeft from './components/icons/ChevronLeft';
import ChevronRight from './components/icons/ChevronRight';
import Refresh from './components/icons/Refresh';
import Selector from './components/Selector';
import useMoveItems from './hooks/useMoveItems';
import { emojiMenus } from './constances';

function App() {
  const items = emojiMenus;
  const { leftItems, rightItems, moveToLeft, moveToRight, handleSelect } =
    useMoveItems(items);

  return (
    <div className="flex items-center p-6 space-x-3">
      <Selector list={leftItems} handleSelect={handleSelect} />
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
        <Button onClick={moveToLeft}>
          <ChevronLeft />
        </Button>
        <Button onClick={moveToRight}>
          <ChevronRight />
        </Button>
      </div>
      <Selector list={rightItems} handleSelect={handleSelect} />
    </div>
  );
}

export default App;
