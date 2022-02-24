import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import ChevronDoubleLeft from "./components/icons/ChevronDoubleLeft";
import ChevronDoubleRight from "./components/icons/ChevronDoubleRight";
import Cog from "./components/icons/Cog";
import Refresh from "./components/icons/Refresh";
import ListItem from "./components/ListItem";
import Selector from "./components/Selector";
import StackedList from "./components/StackedList";

function App() {
  return (
    <div>
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
                <div className="p-3 flex justify-between">
                  <span className="text-lg">타이틀</span>
                  <span>토글</span>
                </div>
              </ListItem>
            </StackedList>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default App;
