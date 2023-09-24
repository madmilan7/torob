import React from "react";

// Images
import apple from "../assets/images/1.jpg";
import samsung from "../assets/images/2.jpg";
import xiaomi from "../assets/images/3.jpg";
import nokia from "../assets/images/4.jpg";
import huawei from "../assets/images/5.jpg";

const Banner = () => {
  return (
    <div className="bg-slate-100 mt-8 p-3">
      <div className="flex items-center justify-center pt-3 gap-3">
        <img src={apple} alt="ایفون" className="min-w-[10rem] rounded-lg cursor-pointer" />
        <img src={samsung} alt="سامسونگ" className="min-w-[10rem] rounded-lg cursor-pointer" />
      </div>
      <div className="flex items-center justify-center gap-5 pt-3">
        <img src={nokia} alt="نوکیا" className="min-w-[6rem] rounded-lg cursor-pointer" />
        <img src={huawei} alt="هواوی" className="min-w-[6rem] rounded-lg cursor-pointer" />
        <img src={xiaomi} alt="شیائومی" className="min-w-[6rem] rounded-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Banner;
