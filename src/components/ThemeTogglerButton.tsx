import { useContext } from "react";
import btnLightTheme from "../../public/images/icon-sun.svg";
import btnDarkTheme from "../../public/images/icon-moon.svg";
import { ThemeContext } from "../contexts/theme-context";

export const ThemeTogglerButton = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => toggleTheme()}
      className="cursor-pointer lg:w-10 lg:h-10 sm:w-8 sm:h-8 lg:mt-4 xl:mr-2 md:mr-32 sm:pt-10"
    >
      {themeName === "dark" ? (
        <img
          src={btnLightTheme}
          alt=""
          className="lg:w-10 lg:h-10 sm:w-8 sm:h-8"
        />
      ) : (
        <img
          src={btnDarkTheme}
          alt=""
          className="lg:w-10 lg:h-10 sm:w-8 sm:h-8"
        />
      )}
    </button>
  );
};
