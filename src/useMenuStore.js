import { create } from 'zustand';

const useMenuStore = create((set) => ({
  // Initial State
  activeMenu: null,

  // Actions to update state
  setActiveMenu: (menuName) => set({ activeMenu: menuName }),
  
  // Optional: A reset function
  clearMenu: () => set({ activeMenu: null }),
}));

export default useMenuStore;