import { create } from "zustand";

//@ts-ignore
const search = (products, query) => {
  //@ts-ignore
  return products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
};

const useEcohealth = create((set) => ({
  shoppingCart: [],
  //@ts-ignore
  addToCart: (product) =>
    //@ts-ignore
    set((state) => ({
      shoppingCart: [...state.shoppingCart, product],
    })),
  isCartOpen: false,
  //@ts-ignore
  setIsCartOpen: (isCartOpen) => set({ isCartOpen }),
  //@ts-ignore
  searchQuery: (products, query) => search(products, query),
}));

export default useEcohealth;
