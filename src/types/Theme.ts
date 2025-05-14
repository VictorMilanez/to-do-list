export type ThemeType = "light" | "dark";

export type ThemeValues = {
  bgPrimary: string;
  bgSecundary: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textHover: string;
};

export type ThemeContextType = {
  theme: ThemeValues;
  themeName: ThemeType;
  toggleTheme: () => void;
};
