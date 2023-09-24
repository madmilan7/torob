import React from "react";

// Images
import qesta from "../assets/images/800-700_1.jpg";

const Banner3 = () => {
  return (
    <div className="bg-slate-100 p-3">
      <img
        src={qesta}
        alt="خرید قسطی"
        className="min-w-[20rem] mx-auto cursor-pointer pt-3"
      />
    </div>
  );
};

export default Banner3;
