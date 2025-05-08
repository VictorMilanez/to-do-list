import { useState } from "react";
import { List } from "../types/List";
import iconChecked from "../../public/images/icon-check.svg";
import iconDelete from "../../public/images/icon-cross.svg";

export const TasksList = () => {
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState<List[]>([]);

  const handleAddItem = () => {
    if (itemInput.trim() === "") return;

    setList([
      ...list,
      { id: list.length + 1, text: itemInput, checked: false },
    ]);

    setItemInput("");
  };

  const handleDeleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  const toggleItem = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
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
        <div className="overflow-y-auto flex-1">
          {list.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 py-6 text-[hsl(234,39%,85%)] text-xl border-b-2 border-[hsl(237,14%,26%)] last:border-b-0 list-none cursor-pointer"
            >
              <div
                onClick={() => toggleItem(item.id)}
                className={`w-8 h-8 flex items-center justify-center ml-4 border-2 border-[hsl(237,14%,26%)] rounded-full cursor-pointer hover:border-[hsl(237,14%,26%)] hover:border-2 hover:[background:linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:bg-clip-border ${
                  item.checked
                    ? "[background:linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]"
                    : "border-[hsl(237,14%,26%)]"
                }`}
              >
                {item.checked ? (
                  <img
                    src={iconChecked}
                    alt="ícone check"
                    className="w-5 h-5"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[hsl(235,24%,19%)]"></div>
                )}
              </div>
              {item.text}
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="ml-auto pr-6 text-3xl text-[hsl(234,11%,52%)] font-light cursor-pointer"
              >
                <img src={iconDelete} alt="ícone para deletar tarefa" />
              </button>
            </li>
          ))}
        </div>
        <div className="flex justify-between py-4 pl-6 h-16 border-t-2 border-[hsl(237,14%,26%)]">
          <p className="text-[hsl(234,11%,52%)]">4 itens left</p>
          <div className="flex gap-4">
            <button className="text-[hsl(220,98%,61%)]">All</button>
            <button className="text-[hsl(234,11%,52%)] hover:[color:hsl(236,33%,92%)] cursor-pointer">
              Active
            </button>
            <button className="text-[hsl(234,11%,52%)] hover:[color:hsl(236,33%,92%)] cursor-pointer">
              Completed
            </button>
          </div>
          <button className="text-[hsl(234,11%,52%)] pr-6 hover:[color:hsl(236,33%,92%)] cursor-pointer">
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
};
