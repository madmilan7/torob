import React from "react";
import { xiaomi } from "../assets/products/products";

// Components
import XiaomiProduct from "./shared/XiaomiProduct";

const XiaomiProducts: React.FC = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex items-center justify-between px-3">
        <h2 className="font-bold">گوشی های شیائومی</h2>
        <p className="text-sm text-red-500 cursor-pointer">بیشتر</p>
      </div>
      <div className="no-scrollbar flex justify-between items-center gap-3 mx-4 pb-1 overflow-x-auto">
        {xiaomi.map((product) => (
          <XiaomiProduct key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default XiaomiProducts;
