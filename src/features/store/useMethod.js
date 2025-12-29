import { create } from "zustand";

const useMethod = create((set) => ({
  method: 'U',
  setMethod: (currentValue) => set(() => ({ method: currentValue })),
}));

export default useMethod;