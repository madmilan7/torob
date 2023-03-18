import React from "react";

// Images
import homeAppliances from "../assets/images/1-2.jpg";
import babyAccessories from "../assets/images/13.jpg";
import clothing from "../assets/images/14.jpg";

const Banner4 = () => {
  return (
    <div className="bg-slate-100 flex items-center justify-center gap-3 py-3">
      <div className="flex flex-col justify-center gap-5">
        <img src={babyAccessories} alt="لوازم نوزاد" className="w-40 rounded-lg cursor-pointer" />
        <img src={clothing} alt="پوشاک" className="w-40 rounded-lg cursor-pointer" />
      </div>
      <div>
        <img src={homeAppliances} alt="لوازم خانگی" className="w-40 rounded-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Banner4;
