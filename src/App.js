import Button from './components/Button';
import ChevronDoubleLeft from './components/icons/ChevronDoubleLeft';
import ChevronDoubleRight from './components/icons/ChevronDoubleRight';
import ChevronLeft from './components/icons/ChevronLeft';
import ChevronRight from './components/icons/ChevronRight';
import Refresh from './components/icons/Refresh';
import Selector from './components/Selector';
import { emojiMenus } from './constances';

function App() {
  const items = emojiMenus;

  // 처리

  return (
    <div className="flex items-center p-6 space-x-3">
      <Selector list={items} />
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
        <Button>
          <ChevronLeft />
        </Button>
        <Button onClick={() => {}}>
          <ChevronRight />
        </Button>
      </div>
      <Selector list={[]} />
    </div>
  );
}

export default App;
