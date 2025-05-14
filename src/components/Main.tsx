//import { useContext } from "react";
import { TasksList } from "./TasksList";
import { ThemeTogglerButton } from "./ThemeTogglerButton";
//import { ThemeContext } from "../contexts/theme-context";

export const Main = () => {
  //const { themeName } = useContext(ThemeContext);

  return (
    <section className="w-full h-full">
      <div className="relative flex h-full justify-evenly bg-verylight-grayish dark:bg-dark-blue">
        <h1 className="text-5xl font-bold mt-14 pl-12 tracking-[1rem] text-dark-blue dark:text-[hsl(234,39%,85%)]">
          TODO
        </h1>
        <ThemeTogglerButton />
      </div>
      <TasksList />
    </section>
  );
};
