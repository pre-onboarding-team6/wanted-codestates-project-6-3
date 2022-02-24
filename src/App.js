import Button from "./components/Button";
import ChevronDoubleLeft from "./components/icons/ChevronDoubleLeft";
import ChevronDoubleRight from "./components/icons/ChevronDoubleRight";
import Refresh from "./components/icons/Refresh";
import Selector from "./components/Selector";

function App() {
  return (
    <div className="p-6 flex items-center space-x-3">
      <Selector />
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
      </div>
      <Selector />
    </div>
  );
}

export default App;
