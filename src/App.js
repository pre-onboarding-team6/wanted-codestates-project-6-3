import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import ChevronDoubleLeft from "./components/icons/ChevronDoubleLeft";
import ChevronDoubleRight from "./components/icons/ChevronDoubleRight";
import Cog from "./components/icons/Cog";
import Refresh from "./components/icons/Refresh";
import Input from "./components/Input";
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
                <div className="p-3 flex justify-between items-center">
                  <span className="text-lg">타이틀</span>
                  <span>토글</span>
                </div>
              </ListItem>
              <ListItem>
                <div className="p-3">
                  <div>
                    <Input placeholder={"avaliable options"} />
                  </div>
                  <div>
                    <Input placeholder={"selected options"} />
                  </div>
                </div>
              </ListItem>
              <ListItem>
                <div className="p-3 flex justify-between items-center">
                  <span className="text-lg">검색</span>
                  <span>토글</span>
                </div>
              </ListItem>
              <ListItem>
                <div className="p-3 flex justify-between items-center">
                  <span className="text-lg">하나씩만 옮기기</span>
                  <span>토글</span>
                </div>
              </ListItem>
              <ListItem>
                <div className="p-3 flex justify-between items-center">
                  <span className="text-lg">선택된 아이템 갯수 표시</span>
                  <span>토글</span>
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
      </div>
    </div>
  );
}

export default App;
