import React, { createContext, useReducer, useEffect } from "react";

// Product
import { apple, samsung, xiaomi } from "../assets/products/products";
import { ProductsType } from "../components/AllProducts";

interface ProductContextType {
  products: ProductsType[];
  brand: string;
  sorting: string;
}

const initialState: ProductContextType = {
  products: [],
  brand: "",
  sorting: "",
};

function reducer(
  state: any,
  action: { type: string; payload: string | ProductsType[] }
): ProductContextType {
  switch (action.type) {
    case "SET_BRAND":
      return { ...state, brand: action.payload };
    case "SET_SORTING":
      return { ...state, sorting: action.payload };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

export const FilterContext = createContext<ProductContextType | any>(initialState);

const FilterContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "SET_PRODUCTS",
      payload: [...apple, ...samsung, ...xiaomi],
    });
  }, [state.brand]);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
