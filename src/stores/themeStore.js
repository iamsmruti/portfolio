import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: 'light',
    setTheme: (mode) => set((state) => ({theme: mode}))
}))