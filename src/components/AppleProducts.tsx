import React from "react";
import { apple } from "../assets/products/products";

// Components
import AppleProduct from "./shared/AppleProduct";

const AppleProducts: React.FC = () => {  
  return (
    <div className="bg-slate-100">
      <div className="flex items-center justify-between px-3">
        <h2 className="font-bold">گوشی اپل</h2>
        <p className="text-sm text-red-500 cursor-pointer">بیشتر</p>
      </div>
      <div className="no-scrollbar flex justify-between items-center gap-3 mx-4 pb-10 overflow-x-auto">
        {apple.map((product) => (
          <AppleProduct key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default AppleProducts;
