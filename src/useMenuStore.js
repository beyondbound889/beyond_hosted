import { create } from 'zustand';

const useMenuStore = create((set) => ({
  // Initial State
  activeMenu: null,
  activePage: 'home',

  // Actions to update state
  setActiveMenu: (menuName) => set({ activeMenu: menuName }),
  setActivePage: (pageName) => set({ activePage: pageName, activeMenu: null }),
  
  // Optional: A reset function
  clearMenu: () => set({ activeMenu: null }),
}));

export default useMenuStore;