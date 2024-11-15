import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ITheme {
  darkMode: boolean;
  theme: string | null;
  loadTheme: () => void;
  toggleTheme: () => void;
}

const themeStore = create<ITheme>((set) => ({
  darkMode: false,
  theme: "light",
  loadTheme: () => {
    set((state) => {
      const darkMode = state.darkMode;
      document.documentElement.classList.toggle("dark", darkMode);
      return { darkMode: darkMode, theme: darkMode ? "dark" : "light" };
    });
  },
  toggleTheme: () => {
    set((state) => {
      const newDarkMode = !state.darkMode;
      document.documentElement.classList.toggle("dark", newDarkMode);
      return { darkMode: newDarkMode, theme: newDarkMode ? "dark" : "light" };
    });
  },
}));

const useThemeStore = persist(themeStore, { name: "theme" });

export default useThemeStore;
