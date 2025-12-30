import { create } from "zustand";

const useDegree = create((set) => ({
  degree: 2,
  setDegree: (currentValue) => set(() => ({ number: currentValue })),
}));

export default useDegree;