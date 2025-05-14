import { useEffect, useState } from "react";
import { ThemeType } from "../types/Theme";
import { ThemeContext as Context, themes } from "./theme-data";

// const themes: Record<ThemeType, ThemeValues> = {
//   dark: {
//     bgPrimary: "hsl(235, 24%, 19%)",
//     border: "hsl(237, 14%, 26%)",
//     textPrimary: "hsl(234, 39%, 85%)",
//     textSecondary: "hsl(234, 11%, 52%)",
//     textHover: "hsl(236, 33%, 92%)",
//   },

//   light: {
//     bgPrimary: "hsl(236, 9%, 61%)",
//     border: "hsl(235, 19%, 35%)",
//     textPrimary: "hsl(233,11%,84%)",
//     textSecondary: "hsl(236,9%,61%)",
//     textHover: "hsl(236, 33%, 92%)",
//   },
// };

// export const ThemeContext = createContext<ThemeContextType>({
//   theme: themes.light,
//   themeName: "light",
//   toggleTheme: () => {},
// });

export const ThemeContext = Context;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeType>("light");

  useEffect(() => {
    if (themeName === "dark") {
      document.documentElement.classList.add("dark");
      //document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      //document.documentElement.classList.add("light");
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
