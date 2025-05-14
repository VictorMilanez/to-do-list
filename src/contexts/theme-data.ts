import { createContext } from "react";
import { ThemeContextType, ThemeType, ThemeValues } from "../types/Theme";

export const themes: Record<ThemeType, ThemeValues> = {
  dark: {
    bgPrimary: "hsl(235,24%,19%)",
    bgSecundary: "hsl(235, 21%, 11%)",
    border: "hsl(237,14%,26%)",
    textPrimary: "hsl(234,39%,85%)",
    textSecondary: "hsl(234,11%,52%)",
    textHover: "hsl(236,33%,92%)",
  },

  light: {
    bgPrimary: "hsl(236,33%,92%)",
    bgSecundary: "hsl(0, 0%, 98%)",
    border: "hsl(235,19%,35%)",
    textPrimary: "hsl(233,11%,84%)",
    textSecondary: "hsl(236,9%,61%)",
    textHover: "hsl(236,33%,92%)",
  },
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.light,
  themeName: "light",
  toggleTheme: () => {},
});
