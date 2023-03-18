import React from "react";
import { samsung } from "../assets/products/products";

// Components
import SamProduct from "./shared/SamProduct";

const SamProducts: React.FC = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex items-center justify-between px-3">
        <h2 className="font-bold">گوشی سامسونگ</h2>
        <p className="text-sm text-red-500 cursor-pointer">بیشتر</p>
      </div>
      <div className="no-scrollbar flex justify-between items-center gap-3 mx-4 pb-1 overflow-x-auto">
        {samsung.map((product) => (
          <SamProduct key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default SamProducts;
