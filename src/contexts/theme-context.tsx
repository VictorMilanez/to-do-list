import { useEffect, useState } from "react";
import { ThemeType } from "../types/Theme";
import { ThemeContext as Context, themes } from "./theme-data";

export const ThemeContext = Context;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? (savedTheme as ThemeType) : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", themeName);
    if (themeName === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
