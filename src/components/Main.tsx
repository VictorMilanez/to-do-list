import { TasksList } from "./TasksList";
import { ThemeTogglerButton } from "./ThemeTogglerButton";

export const Main = () => {
  return (
    <section className="w-full h-full">
      <div className="relative flex h-full lg:justify-center xl:gap-64 lg:gap-24 md:gap-20 sm:gap-24 md:justify-around sm:justify-center bg-verylight-grayish dark:bg-dark-blue">
        <h1 className="xl:text-5xl lg:text-3xl md:text-2xl sm:text-2xl font-bold lg:mt-14 sm:mt-10 xl:pl-2 sm:pr-28 md:pl-32 tracking-[1rem] text-dark-blue dark:text-grayish-blue">
          TODO
        </h1>
        <ThemeTogglerButton />
      </div>
      <TasksList />
    </section>
  );
};
