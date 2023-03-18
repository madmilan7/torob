import React from "react";

// Images
import qesta from "../assets/images/800-700_1.jpg";

const Banner3 = () => {
  return (
    <div className="bg-slate-100 py-3">
      <img
        src={qesta}
        alt="خرید قسطی"
        className="w-80 mx-auto rounded-lg cursor-pointer"
      />
    </div>
  );
};

export default Banner3;
