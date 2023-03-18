import React from "react";

// Images
import cat from "../assets/images/6.jpg";
import dog from "../assets/images/7.jpg";

const Banner6 = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex items-center justify-center py-3 gap-3">
        <img src={dog} alt="غذای حیوانات خانگی" className="w-40 rounded-lg cursor-pointer" />
        <img src={cat} alt="غذای حیوانات خانگی" className="w-40 rounded-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Banner6;
