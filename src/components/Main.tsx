import { TasksList } from "./TasksList";
import btnLightTheme from "../../public/images/icon-sun.svg";

export const Main = () => {
  return (
    <section className="w-full h-full">
      <div className="h-1/3 flex justify-evenly lg:bg-[url('/images/bg-desktop-dark.jpg')] bg-[url('/images/bg-mobile-dark.jpg')] bg-top bg-no-repeat bg-cover relative">
        <h1 className="text-white text-5xl font-bold mt-16 ml-8 tracking-[1rem]">
          TODO
        </h1>
        <button className="w-10 h-10 mt-16 mr-10 cursor-pointer">
          <img src={btnLightTheme} alt="" className="w-10 h-10" />
        </button>
      </div>
      <TasksList />
      <div className="h-2/3 bg-[hsl(235,21%,11%)]">...</div>
    </section>
  );
};
