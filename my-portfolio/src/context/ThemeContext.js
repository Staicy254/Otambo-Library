import { create } from "zustand";

const useThemeStore = create((set) => ({
  darkMode: localStorage.getItem("theme") === "dark",
  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.darkMode ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { darkMode: !state.darkMode };
    }),
}));

export default useThemeStore;
