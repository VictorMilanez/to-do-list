import { useState } from "react";
import { List } from "../types/List";

export const TasksList = () => {
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState<List[]>([]);

  const handleAddItem = () => {
    if (itemInput.trim() === "") return;

    setList([
      ...list,
      { id: list.length + 1, text: itemInput, checked: false },
    ]);
  };

  return (
    <>
      <div className="w-2/5 h-20 flex items-center bg-[hsl(235,24%,19%)] absolute top-1/6 left-[30%] rounded-md">
        <button
          onClick={handleAddItem}
          className="w-8 h-8 ml-4 border-3 border-[hsl(237,14%,26%)] rounded-full cursor-pointer"
        ></button>
        <input
          type="text"
          placeholder="Criar uma nova tarefa..."
          className="ml-10 w-3/4 text-2xl text-[hsl(234,11%,52%)] outline-none"
          value={itemInput}
          onChange={(event) => setItemInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddItem();
            }
          }}
        />
      </div>
      <div className="w-2/5 h-3/5 flex flex-col items- bg-[hsl(235,24%,19%)] absolute top-2/7 left-[30%] rounded-md">
        <div>
          {list.map((item) => (
            <li
              key={item.id}
              className="p-6 text-[hsl(234,39%,85%)] text-xl border-b-2 border-[hsl(237,14%,26%)]"
            >
              {item.text}
            </li>
          ))}
        </div>
        <div>...</div>
      </div>
    </>
  );
};
