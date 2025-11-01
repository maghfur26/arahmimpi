import { create } from "zustand";

interface ScrollStore {
  isScrolling: boolean;
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
}

const useScrollStore = create<ScrollStore>((set) => ({
  isScrolling: false,
  scrollPosition: 0,
  setScrollPosition: (position: number) => set({ scrollPosition: position }),
}));

export default useScrollStore;