import React from "react";

// Images
import homeAppliances from "../assets/images/1-2.jpg";
import babyAccessories from "../assets/images/1-3.jpg";
import clothing from "../assets/images/1-4.jpg";

const Banner4 = () => {
  return (
    <div className="bg-slate-100 flex items-stretch justify-center gap-3 px-3 py-6">
      <div className="flex flex-col items-center justify-between">
        <img src={babyAccessories} alt="لوازم نوزاد" className="min-w-[10rem] rounded-lg cursor-pointer" />
        <img src={clothing} alt="پوشاک" className="min-w-[10rem] rounded-lg cursor-pointer" />
      </div>
      <div>
        <img src={homeAppliances} alt="لوازم خانگی" className="min-w-[10rem] rounded-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Banner4;
