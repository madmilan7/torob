import React from "react";

// Images
import cat from "../assets/images/6.jpg";
import dog from "../assets/images/7.jpg";

const Banner6 = () => {
  return (
    <div className="bg-slate-100 p-3">
      <div className="flex items-center justify-center pt-3 gap-3">
        <img src={dog} alt="غذای حیوانات خانگی" className="min-w-[10rem] rounded-lg cursor-pointer" />
        <img src={cat} alt="غذای حیوانات خانگی" className="min-w-[10rem] rounded-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Banner6;
