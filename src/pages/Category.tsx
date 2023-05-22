import React from "react";
import { Link } from "react-router-dom";

// Icons
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Category = () => {
  return (
    <div className="bg-slate-100 pb-10">
      <div className="w-full bg-white h-10 flex items-center justify-center border-b border-slate-200 sticky top-0">
        <label htmlFor="" className="text-sm">همه دسته ها</label>
      </div>
      <ul className="bg-white">
        <Link to="/mobile" className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">موبایل و کالای دیجیتال</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </Link>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">لپ تاپ, کامپیوتر, اداری</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">هایپر مارکت</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">لوازم خانگی</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">مد و پوشاک</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">زیبایی و بهداشت</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">صوتی و تصویری</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">خودرو و سایر وسایل نقلیه</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">ورزش و سرگرمی</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">سلامت و پزشکی</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">فرهنگی هنری</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">کودک و نوزاد</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">ابزار و ساختمان</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">ابزارآلات</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">لوازم سفر و گردشگری</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">ارز و طلا</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">تجهیزات نگهداری و پرورش حیوانات</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">متفرقه</li>
        </div>
        <div className="flex items-center justify-between h-12 border-b border-slate-100 px-3">
          <li className="pr-2 text-sm">تجهیزات صنعتی</li>
          <NavigateBeforeIcon className="text-slate-500" />
        </div>
      </ul>
    </div>
  );
};

export default Category;
