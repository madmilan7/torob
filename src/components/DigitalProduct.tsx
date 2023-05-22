import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const DigitalProduct: React.FC = () => {

  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="bg-slate-100 pb-20">
      <div className="flex items-center bg-white h-10 px-3 border-b border-slate-100">
        <ArrowForwardIcon onClick={() => navigate(-1)} />
        <h3 className="text-xs text-slate-700 mx-auto">موبایل و کالای دیجیتال</h3>
      </div>
      <div className="bg-white h-12 px-3 border-b border-slate-100 flex items-center">
        <h3 className="text-xs font-semibold text-slate-700">نمایش تمام کالاهای موبایل و کالای دیجیتال</h3>
      </div>
      {/* list */}
      <ul className="bg-white">
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-xs text-slate-600">گوشی موبایل</li>
          <NavigateBeforeIcon className="text-slate-400" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-xs text-slate-600">تبلت</li>
          <NavigateBeforeIcon className="text-slate-400" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-xs text-slate-600">هدفون، هدست و هندزفری</li>
          <NavigateBeforeIcon className="text-slate-400" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-xs text-slate-600">لوازم جانبی موبایل و تبلت</li>
          <NavigateBeforeIcon className="text-slate-400" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-xs text-slate-600">قطعات موبایل و تبلت</li>
          <NavigateBeforeIcon className="text-slate-400" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-xs text-slate-600">لوازم الکتریکی همراه</li>
          <NavigateBeforeIcon className="text-slate-400" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-xs text-slate-600">ساعت و مچ بند هوشمند</li>
          <NavigateBeforeIcon className="text-slate-400" />
        </div>
      </ul>
    </div>
  );
};

export default DigitalProduct;
