import { create } from "zustand";

const useResult = create((set) => ({
  result: '',
  setResult: (currentValue) => set((state) => ({ result: state.result + currentValue })),
}));

export default useResult;