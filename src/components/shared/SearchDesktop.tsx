import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icon
import logo from "../../assets/images/torob_logo.svg";
import SearchIcon from "@mui/icons-material/Search";

const SearchDesktop = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <div className="hidden md:flex flex-col" onClick={closeMenu}>
      {/* Navbar */}
      <div className="flex items-center justify-between px-10 py-3 gap-10">
        <ul className="flex items-center gap-6 overflow-auto no-scrollbar">
          <div>
            <li
              onClick={openMenu}
              className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer"
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
                    <Link to="/digitalProducts">
                      <h3 className="text-sm text-gray-700 py-0.5 leading-7 font-bold hover:text-red-600">
                        گوشی موبایل
                      </h3>
                    </Link>
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
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer">
            لپ‌تاپ، کامپیوتر، اداری
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer">
            هایپر مارکت
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer">
            لوازم خانگی
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer">
            مد و پوشاک
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer">
            زیبایی و بهداشت
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer">
            صوتی و تصویری
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer">
            خودرو و سایر وسایل نقلیه
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer">
            ورزش و سرگرمی
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer">
            سلامت و پزشکی
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer">
            فرهنگی هنر
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-red-600 cursor-pointer">
            سایر دسته ها
          </li>
        </ul>
        <button
          className="text-xs whitespace-nowrap bg-white text-gray-500 border border-gray-300
                            rounded px-4 py-1"
        >
          ورود / ثبت نام
        </button>
      </div>
      {/* Searchbar */}
      <div className="flex flex-col items-center bg-gray-100 h-[89vh] pt-40">
        <img src={logo} alt="torob" />
        <h1 className="text-4xl text-red-600 font-semibold pt-3">ترب</h1>
        <form className="py-7 flex items-center">
          <i className="absolute pr-2">
            <SearchIcon fontSize="large" className="text-gray-500" />
          </i>
          <input
            type="text"
            className="outline-none border border-gray-300 rounded w-[480px] h-12
                        placeholder:text-gray-500 pr-14"
            placeholder="نام کالا را وارد کنید"
          />
        </form>
        <p className="text-sm text-gray-500">
          مقایسه قیمت میلیون‌ها محصول بین هزاران فروشگاه
        </p>
      </div>
      {/* Footer */}
      <div className="flex lg:flex-col xl:flex-row flex-wrap items-center justify-evenly xl:justify-between px-10 
                      lg:h-20 xl:h-10">
        <ul className="flex items-center gap-6">
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-black cursor-pointer">
            راهنمای خرید امن
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-black cursor-pointer">
            پیگیری سفارش
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-black cursor-pointer">
            تماس با ما
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-black cursor-pointer">
            درباره ترب
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-black cursor-pointer">
            تخفیف ها
          </li>
        </ul>
        <ul className="flex items-center gap-6">
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-black cursor-pointer">
            لیست فروشگاه‌ها
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-black cursor-pointer">
            ثبت نام فروشگاه
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-black cursor-pointer">
            پنل فروشگاه‌ها
          </li>
          <li className="text-sm text-gray-500 whitespace-nowrap hover:text-black cursor-pointer">
            فرصت‌های شغلی
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchDesktop;
