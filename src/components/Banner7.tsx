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
    <div className="bg-slate-100 p-3">
      <div className="flex items-center justify-center pt-3 gap-3">
        <img src={book} alt="دفتر و کاغذ" className="min-w-[10rem] rounded-lg cursor-pointer" />
        <img src={pen} alt="نوشت افزار" className="min-w-[10rem] rounded-lg cursor-pointer" />
      </div>
      <div className="flex items-center justify-center py-3 gap-3">
        <img src={paint} alt="ابزار نقاشی" className="min-w-[10rem] rounded-lg cursor-pointer" />
        <img src={assets} alt="ست اداری" className="min-w-[10rem] rounded-lg cursor-pointer" />
      </div>
      <div className="py-6">
        <img src={camp} alt="کمپینگ" className="min-w-[20rem] mx-auto rounded-lg cursor-pointer" />
      </div>
      <div className="flex items-center justify-center pb-3 gap-5">
        <img src={dishes} alt="ظروف سفری" className="min-w-[6rem] rounded-lg cursor-pointer" />
        <img src={cam} alt="دوربین شکاری" className="min-w-[6rem] rounded-lg cursor-pointer" />
        <img src={shoes} alt="تجهیزات کوهنوردی" className="min-w-[6rem] rounded-lg cursor-pointer" />
      </div>
      <div className="pb-3">
        <img src={insta} alt="اینستاگرام ما" className="min-w-[20rem] mx-auto rounded-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Banner7;
