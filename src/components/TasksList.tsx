import { useEffect, useRef, useState } from "react";
import { List } from "../types/List";
import iconChecked from "../../public/images/icon-check.svg";
import iconDelete from "../../public/images/icon-cross.svg";

export const TasksList = () => {
  const [itemInput, setItemInput] = useState("");

  const [list, setList] = useState<List[]>(() => {
    const savedList = localStorage.getItem("todoList");
    return savedList ? JSON.parse(savedList) : [];
  });

  const [listCompleted, setListCompleted] = useState<
    "all" | "active" | "completed"
  >("all");

  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const dragStart = (event: React.DragEvent) => {
    const target = event.currentTarget as HTMLElement;
    dragItem.current = Number(target.dataset.id);
  };

  const dragEnter = (event: React.DragEvent) => {
    const target = event.currentTarget as HTMLElement;
    dragOverItem.current = Number(target.dataset.id);
  };

  const drop = () => {
    if (dragItem.current === null || dragOverItem.current === null) return;
    const copyListItems = [...list];
    const dragIndex = copyListItems.findIndex(
      (item) => item.id === dragItem.current
    );
    const hoverIndex = copyListItems.findIndex(
      (item) => item.id === dragOverItem.current
    );
    if (dragIndex === -1 || hoverIndex === -1) return;
    const [draggedItem] = copyListItems.splice(dragIndex, 1);
    copyListItems.splice(hoverIndex, 0, draggedItem);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  const handleAddItem = () => {
    if (itemInput.trim() === "") return;

    setList([...list, { id: Date.now(), text: itemInput, checked: false }]);

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

  const clearCompletedItems = () => {
    setList(list.filter((item) => !item.checked));
  };

  return (
    <>
      <div className="w-2/5 h-20 flex items-center bg-verylight-gray dark:bg-dark-desaturatedblue absolute top-1/7 left-[30%] rounded-md">
        <button
          onClick={handleAddItem}
          className="w-8 h-8 ml-4 rounded-full cursor-pointer border-3 border-verylight-grayish dark:border-verydark-grayishbluetwo"
        ></button>
        <input
          type="text"
          placeholder="Criar uma nova tarefa..."
          className="w-3/4 ml-10 text-2xl outline-none text-dark-desaturatedblue dark:text-dark-grayishblue"
          value={itemInput}
          onChange={(event) => setItemInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddItem();
            }
          }}
        />
      </div>
      <div className="w-2/5 h-3/5 flex flex-col bg-verylight-gray dark:bg-dark-desaturatedblue absolute top-2/8 left-[30%] rounded-md">
        <div className="flex-1 overflow-y-auto">
          {list
            .filter((item) => {
              if (listCompleted === "completed") return item.checked;
              if (listCompleted === "active") return !item.checked;
              return true;
            })
            .map((item) => (
              <li
                data-id={item.id}
                draggable
                onDragStart={(event) => dragStart(event)}
                onDragEnter={(event) => dragEnter(event)}
                onDragEnd={drop}
                key={item.id}
                className={`flex items-center gap-4 py-6 text-xl border-b-2 border-verylight-grayish dark:border-verydark-grayishbluetwo last:border-b-0 list-none cursor-pointer  ${
                  item.checked
                    ? "line-through text-light-grayishdark dark:text-dark-grayishblue"
                    : "text-dark-desaturatedblue dark:text-verylight-gray"
                }`}
              >
                <div
                  onClick={() => toggleItem(item.id)}
                  className={`w-8 h-8 flex items-center justify-center ml-4 border-2 border-verylight-grayish dark:border-verydark-grayishbluetwo rounded-full cursor-pointer hover:border-verydark-grayishbluetwo hover:border-2 hover:[background:linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:bg-clip-border ${
                    item.checked
                      ? "[background:linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]"
                      : "border-verydark-grayishbluetwo"
                  }`}
                >
                  {item.checked ? (
                    <img
                      src={iconChecked}
                      alt="ícone check"
                      className="w-5 h-5 pr-0.5"
                    />
                  ) : (
                    <div className="rounded-full w-7 h-7 bg-verylight-gray dark:bg-dark-desaturatedblue"></div>
                  )}
                </div>
                {item.text}
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="pr-6 ml-auto cursor-pointer"
                >
                  <img src={iconDelete} alt="ícone para deletar tarefa" />
                </button>
              </li>
            ))}
        </div>
        <div className="flex items-center justify-between py-4 pl-6 border-t-2 h-22 border-verylight-grayish dark:border-verydark-grayishbluetwo">
          <p className="font-semibold text-dark-grayishblue">
            {list.length} items left
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setListCompleted("all")}
              className="text-[hsl(220,98%,61%)] hover:font-bold font-semibold cursor-pointer"
            >
              All
            </button>
            <button
              onClick={() => setListCompleted("active")}
              className="font-semibold cursor-pointer text-dark-grayishblue hover:text-dark-desaturatedblue dark:hover:text-light-grayishblue"
            >
              Active
            </button>
            <button
              onClick={() => setListCompleted("completed")}
              className="font-semibold cursor-pointer text-dark-grayishblue hover:text-dark-desaturatedblue dark:hover:text-light-grayishblue"
            >
              Completed
            </button>
          </div>
          <button
            onClick={() => clearCompletedItems()}
            className="pr-6 font-semibold cursor-pointer text-dark-grayishblue hover:text-dark-desaturatedblue dark:hover:text-light-grayishblue"
          >
            Clear Completed
          </button>
        </div>
      </div>
      <div className="w-2/5 h-20 flex justify-center items-center bg-verylight-gray dark:bg-dark-desaturatedblue absolute bottom-[4%] left-[30%] rounded-md">
        <div className="flex items-center justify-center w-3/4 text-2xl text-dark-grayishblue">
          <p>Arraste e solte para reordenar a lista</p>
        </div>
      </div>
    </>
  );
};
