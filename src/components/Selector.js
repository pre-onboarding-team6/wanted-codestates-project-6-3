import Input from "./Input";
import ListItem from "./ListItem";
import StackedList from "./StackedList";
import Title from "./Title";
import { emojiMenus } from "../constances";

export default function Selector() {
  const items = emojiMenus;

  return (
    <div
      style={{
        width: "300px",
        height: "400px",
      }}
      className="flex flex-col space-y-2"
    >
      <Input placeholder={"search"} />
      <div className="bg-white shadow overflow-hidden sm:rounded-md flex flex-col">
        <Title>
          <div className="p-3">
            <span className="text-xl">Title</span>
          </div>
        </Title>
        <StackedList>
          {items.map((item, index) => {
            return (
              <ListItem key={index}>
                <div className="p-3 cursor-pointer">
                  <span>{item.emoji}</span>
                  <span>{item.name}</span>
                </div>
              </ListItem>
            );
          })}
        </StackedList>
        <div className="border-t flex justify-center p-2">
          <span>0/4</span>
        </div>
      </div>
    </div>
  );
}
