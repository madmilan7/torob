import React from "react";

// Images
import book from "../assets/images/book.jpg";
import pen from "../assets/images/pen.jpg";
import paint from "../assets/images/paint.jpg";
import assets from "../assets/images/8.jpg";
import camp from "../assets/images/camp.jpg";
import dishes from "../assets/images/dishes.jpg";
import cam from "../assets/images/cam.jpg";
import shoes from "../assets/images/shoes.jpg";
import insta from "../assets/images/instagram-banner.jpg";

const Banner7 = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex items-center justify-center pt-3 gap-3">
        <img src={book} alt="دفتر و کاغذ" className="w-40 rounded-lg cursor-pointer" />
        <img src={pen} alt="نوشت افزار" className="w-40 rounded-lg cursor-pointer" />
      </div>
      <div className="flex items-center justify-center py-3 gap-3">
        <img src={paint} alt="ابزار نقاشی" className="w-40 rounded-lg cursor-pointer" />
        <img src={assets} alt="ست اداری" className="w-40 rounded-lg cursor-pointer" />
      </div>
      <div className="py-6">
        <img src={camp} alt="کمپینگ" className="w-80 mx-auto rounded-lg cursor-pointer" />
      </div>
      <div className="flex items-center justify-center pb-3 gap-5">
        <img src={dishes} alt="ظروف سفری" className="w-24 rounded-lg cursor-pointer" />
        <img src={cam} alt="دوربین شکاری" className="w-24 rounded-lg cursor-pointer" />
        <img src={shoes} alt="تجهیزات کوهنوردی" className="w-24 rounded-lg cursor-pointer" />
      </div>
      <div className="pb-3">
        <img src={insta} alt="اینستاگرام ما" className="w-80 mx-auto rounded-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Banner7;
