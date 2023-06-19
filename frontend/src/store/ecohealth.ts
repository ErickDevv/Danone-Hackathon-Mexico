import { create } from "zustand";

//@ts-ignore
const search = (products, query) => {
  //@ts-ignore
  return products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
};

const useEcohealth = create((set) => ({
  //@ts-ignore
  searchQuery: (products, query) => search(products, query),
}));

export default useEcohealth;
