import React, { createContext, useReducer, useEffect } from "react";

// Product
import { apple, samsung, xiaomi } from "../assets/products/products";
import { ProductsType } from "../components/AllProducts";

interface ProductContextType {
  products: ProductsType[];
  filteredProducts: ProductsType[];
  brand: string;
  sort: string;
}

const initialState: ProductContextType = {
  products: [],
  filteredProducts: [],
  brand: "",
  sort: "",
};

function reducer(
  state: any,
  action: { type: string; payload: string | ProductsType[] }
): ProductContextType {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case "SET_BRAND":
      return { ...state, brand: action.payload };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    case "SORT_PRODUCTS":
      const sortedProducts = state.filteredProducts.sort((a: any, b: any) => {
        if (state.sort === "ascending") {
          return a.minPrice - b.minPrice;
        } else if (state.sort === "descending") {
          return b.minPrice - a.minPrice;
        } else if (state.sort === "popular") {
          return a.id - b.id;
        }
      });
      return { ...state, filteredProducts: sortedProducts };
    case "FILTER_PRODUCTS":
      const filteredProducts = state.products.filter((product: any) => {
        return product.title.toLowerCase().includes(action.payload);
      });
      return { ...state, filteredProducts };
    default:
      return state;
  }
}

export const FilterContext = createContext<ProductContextType | any>(
  initialState
);

const FilterContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "SET_PRODUCTS",
      payload: [...apple, ...samsung, ...xiaomi],
    });
  }, []);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
