import React, { useState } from "react";

// Icon
import logo from "../../assets/images/torob_logo.svg";
import SearchIcon from "@mui/icons-material/Search";

const NavbarDesktop = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <div onClick={closeMenu} className="hidden md:block px-10 pt-5 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between gap-7">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} className="w-12" alt="ترب" />
            <h1 className="text-2xl font-bold text-red-600">ترب</h1>
          </div>
          <form action="" className="flex items-center w-[30rem]">
            <input
              type="text"
              className="border border-gray-300 outline-none py-3 px-2 h-12 w-full rounded rounded-l-none"
              placeholder="نام کالا را وارد کنید"
            />
            <i className="bg-red-600 h-12 w-20 flex items-center justify-center rounded rounded-r-none">
              <SearchIcon fontSize="large" className="text-white" />
            </i>
          </form>
        </div>
        <button
          className="border border-gray-300 text-sm font-semibold
                            text-gray-600 px-4 py-3 rounded h-12 whitespace-nowrap"
        >
          ورود / ثبت نام
        </button>
      </div>
      {/* menu */}
      <div className="flex items-center justify-between py-5 overflow-auto no-scrollbar">
        <ul className="flex items-center gap-6">
          <div>
            <li
              onClick={openMenu}
              className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer"
            >
              موبایل و کالای دیجیتال
            </li>
            {/* drop down */}
            <div
              id="drop-down"
              className={`z-10 right-10 left-10 bg-white mt-7 rounded absolute ${
                !isOpen && "hidden"
              }`}
            >
              <div>
                <h1 className="py-4 px-6 text-sm font-semibold text-gray-700 border-b border-gray-200">
                  موبایل و کالای دیجیتال
                </h1>
                <ul className="py-3 px-9 columns-[180px]">
                  <div>
                    <h3 className="text-sm text-gray-700 py-0.5 leading-7 font-bold hover:text-red-600">
                      گوشی موبایل
                    </h3>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی سامسونگ
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی شیائومی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی اپل، آیفون
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی هوآوی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی نوکیا
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی ال‌ جی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی اچ‌ تی‌ سی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی سونی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی موتورولا
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی لنوو
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی ایسوس
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی سونی اریکسون
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی الکاتل
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی جی‌ ال ایکس
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی بلک بری
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی اوپو
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی آنر
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گوشی ریل می
                    </li>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-700 py-0.5 leading-7 font-bold">
                      تبلت
                    </h3>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تبلت سامسونگ
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تبلت اپل، آیپد
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تبلت هوآوی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تبلت ایسوس
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تبلت ایسر
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تبلت سونی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تبلت مایکروسافت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تبلت لنوو
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تبلت گوگل
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تبلت پرستیژیو
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تبلت آی لایف
                    </li>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-700 py-0.5 leading-7 font-bold">
                      هدفون، هدست و هندزفری
                    </h3>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست سامسونگ
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست اپل
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست شیائومی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست بیتس
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست انکر
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست تسکو
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست رپو
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست جبرا
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست هوآوی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست جی بی ال
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست ریمکس
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست ای فورتک (بلودی)
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست ریزر
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست لاجیتک
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست لنوو
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست سونی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست سنهایزر
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست اونیکوما
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست اوی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست ادیفایر
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      هدفون و هدست نیا
                    </li>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-700 py-0.5 leading-7 font-bold">
                      لوازم جانبی موبایل و تبلت
                    </h3>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      کیف و کاور گوشی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      محافظ صفحه نمایش گوشی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      شارژر
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      کابل و تبدیل
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      پایه نگهدارنده گوشی و تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      مونوپاد و گیمبال موبایل
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      محافظ لنز دوربین
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      برچسب و استیکر موبایل و لپ تاپ
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      دسته بازی مخصوص موبایل
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      کیف و کاور تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      محافظ صفحه نمایش تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      سیم کارت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      قلم لمسی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      دستکش و کاور انگشت مخصوص بازی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      فن و پنکه USB و شارژی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      فایل موبایل
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      سایر لوازم جانبی موبایل و تبلت
                    </li>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-700 py-0.5 leading-7 font-bold">
                      قطعات موبایل و تبلت
                    </h3>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      باتری گوشی موبایل
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      باتری تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      قاب، شاسی و درب گوشی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      گلس تعمیراتی گوشی و تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      آی سی گوشی و تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      خشاب سیم کارت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      تاچ و ال سی دی گوشی و تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      بازر و بلندگو گوشی و تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      فلت گوشی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      دوربین گوشی و تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      جک و سوکت گوشی و تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      جک و کانکتور هدفون
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      دکمه پاور گوشی و تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      سنسور اثر انگشت گوشی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      کی پد گوشی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      شیشه دوربین گوشی و تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      برد گوشی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      میکروفن گوشی و تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      آنتن گوشی و تبلت
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      ویبره گوشی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      سایر قطعات گوشی و تبلت
                    </li>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-700 py-0.5 leading-7 font-bold">
                      لوازم الکتریکی همراه
                    </h3>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      پاوربانک و شارژر همراه
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      کتاب‌خوان و کاغذ دیجیتال
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      مکان‌ یاب و قبله نما
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      پخش‌کننده MP3 و MP4
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      ضبط‌کننده صدا
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      لوازم جانبی پاوربانک
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      لوازم جانبی هدفون و هدست
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      سایر لوازم الکتریکی همراه
                    </li>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-700 py-0.5 leading-7 font-bold">
                      ساعت و مچ بند هوشمند
                    </h3>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      ساعت هوشمند اپل
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      ساعت هوشمند سامسونگ
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      ساعت هوشمند شیائومی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      ساعت هوشمند هوآوی
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      ساعت هوشمند آنر
                    </li>
                    <li className="text-xs text-gray-700 py-0.5 leading-7">
                      ساعت هوشمند گارمین
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <li className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer">
            لپ‌تاپ، کامپیوتر، اداری
          </li>
          <li className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer">
            هایپر مارکت
          </li>
          <li className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer">
            لوازم خانگی
          </li>
          <li className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer">
            مد و پوشاک
          </li>
          <li className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer">
            زیبایی و بهداشت
          </li>
          <li className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer">
            صوتی و تصویری
          </li>
          <li className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer">
            خودرو و سایر وسایل نقلیه
          </li>
          <li className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer">
            ورزش و سرگرمی
          </li>
          <li className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer">
            سلامت و پزشکی
          </li>
          <li className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer">
            فرهنگی هنر
          </li>
          <li className="text-sm text-gray-700 whitespace-nowrap hover:text-red-600 cursor-pointer">
            سایر دسته ها
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDesktop;
