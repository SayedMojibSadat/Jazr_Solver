import { create } from "zustand";

const useDegree = create((set) => ({
  degree: '',
  setDegree: (currentValue) => set(() => ({ number: currentValue })),
}));

export default useDegree;