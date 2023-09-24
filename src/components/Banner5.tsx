import React from "react";

// Images
import car from "../assets/images/car.jpg";
import Cosmetic from "../assets/images/9.jpg";

const Banner5 = () => {
  return (
    <div className="bg-slate-100 p-3">
      <div className="flex items-center justify-center pt-3 gap-3">
        <img src={car} alt="لوازم خودرو" className="min-w-[10rem] rounded-lg cursor-pointer" />
        <img src={Cosmetic} alt="لوازم آرایشی" className="min-w-[10rem] rounded-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Banner5;
