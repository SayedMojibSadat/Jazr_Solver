import { create } from "zustand";

const useNumber = create((set) => ({
  number: '',
  setNumber: (currentValue) => set(() => ({ number: currentValue })),
}));

export default useNumber;