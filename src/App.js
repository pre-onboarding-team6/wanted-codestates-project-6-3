import Button from './components/Button';
import ChevronDoubleLeft from './components/icons/ChevronDoubleLeft';
import ChevronDoubleRight from './components/icons/ChevronDoubleRight';
import Refresh from './components/icons/Refresh';
import Selector from './components/Selector';
import Setting from './components/Setting';
import { emojiMenus } from './constances';

function App() {
  const items = emojiMenus;
  const isDraggable = [true, true];

  return (
    <div>
      <div className="flex p-6 space-x-6">
        <Selector
          isDraggable={isDraggable}
          order="0"
          list={items.slice(0, 4)}
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
        <Selector isDraggable={isDraggable} order="1" list={items.slice(4)} />
        <Setting />
      </div>
    </div>
  );
}

export default App;
