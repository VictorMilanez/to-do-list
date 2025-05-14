import { useContext } from "react";
import btnLightTheme from "../../public/images/icon-sun.svg";
import btnDarkTheme from "../../public/images/icon-moon.svg";
import { ThemeContext } from "../contexts/theme-context";

export const ThemeTogglerButton = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => toggleTheme()}
      className="w-10 h-10 cursor-pointer mt-14 mr-14"
    >
      {themeName === "dark" ? (
        <img src={btnLightTheme} alt="" className="w-10 h-10" />
      ) : (
        <img src={btnDarkTheme} alt="" className="w-10 h-10" />
      )}
    </button>
  );
};
