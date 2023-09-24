import React from "react";

// Images
import xbox from "../assets/images/10.jpg";
import ps5 from "../assets/images/11.jpg";

const Banner2 = () => {
  return (
    <div className="bg-slate-100 p-3">
      <div className="flex items-center justify-center pt-3 gap-3">
        <img
          src={ps5}
          alt="پلی استیشن "
          className="min-w-[10rem] rounded-lg cursor-pointer"
        />
        <img
          src={xbox}
          alt="ایکس باکس"
          className="min-w-[10rem] rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Banner2;
