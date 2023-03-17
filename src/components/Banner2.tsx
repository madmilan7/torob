import React from "react";

// Images
import xbox from "../assets/images/10.jpg";
import ps5 from "../assets/images/11.jpg";

const Banner2 = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex items-center justify-center pt-3 pb-3 gap-3">
        <img
          src={ps5}
          alt="پلی استیشن "
          className="w-40 rounded-lg cursor-pointer"
        />
        <img
          src={xbox}
          alt="ایکس باکس"
          className="w-40 rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Banner2;
