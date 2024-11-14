import { create } from "zustand";

const localStorageKey = "theme";

interface ITheme {
  darkMode: boolean;
  theme: string | null;
  loadTheme: () => void;
  toggleTheme: () => void;
}

const useThemeStore = create<ITheme>((set) => ({
  darkMode: localStorage.getItem(localStorageKey) === "dark",
  theme: localStorage.getItem(localStorageKey),
  loadTheme: () => {
    set((state) => {
      const darkMode = state.darkMode;
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem(localStorageKey, darkMode ? "dark" : "light");
      return { darkMode: darkMode, theme: darkMode ? "dark" : "light" };
    });
  },
  toggleTheme: () => {
    set((state) => {
      const newDarkMode = !state.darkMode;
      document.documentElement.classList.toggle("dark", newDarkMode);
      localStorage.setItem(localStorageKey, newDarkMode ? "dark" : "light");
      return { darkMode: newDarkMode, theme: newDarkMode ? "dark" : "light" };
    });
  },
}));

export default useThemeStore;

// ))