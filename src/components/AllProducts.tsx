import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FilterContext } from "../context/FilterContextProvider";

// Components
import NavbarDesktop from "./shared/NavbarDesktop";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

// interface
export interface ProductsType {
  id: number;
  image: string | any;
  title: string;
  storage: number;
  minPrice: number;
  maxPrice: number;
}
[];

const AllProducts: React.FC = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(FilterContext);
  const [activeItem, setActiveItem] = useState<string>("");

  // sort list display methods
  const selectSort = () => {
    document.getElementById("sort")!.classList.remove("hidden");
  };
  const cancelSelectSort = () => {
    document.getElementById("sort")!.classList.add("hidden");
  };

  // Brand filter display methods
  const selectFilter = () => {
    document.getElementById("brand-filter")!.classList.remove("hidden");
  };
  const cancelSelectFilter = () => {
    document.getElementById("brand-filter")!.classList.add("hidden");
  };

  const toggleDropdown = (item: string) => {
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <div className="bg-slate-100 mb-12 md:m-0">
      {/* title */}
      <div className="flex items-center bg-white h-10 px-3 border-b border-slate-100 md:hidden">
        <ArrowForwardIcon onClick={() => navigate(-1)} />
        <h3 className="text-xs text-slate-700 mx-auto">گوشی موبایل</h3>
      </div>
      <NavbarDesktop />
      <div className="md:flex">
        {/* sidebar filtering */}
        <aside className="hidden lg:block bg-white h-screen 
                  w-96 overflow-y-auto sticky top-0 bottom-0">
          {/* Brand selection */}
          <div className="border-b border-gray-200">
            <div
              onClick={() => toggleDropdown("brand")}
              className="flex items-center gap-3 px-4 py-7 cursor-pointer"
            >
              <i
                className={`${
                  activeItem === "brand"
                    ? "rotate-180 transition duration-500"
                    : "transition"
                }`}
              >
                <ExpandMoreIcon fontSize="small" />
              </i>
              <h1 className="text-lg">انتخاب برند</h1>
            </div>
            {activeItem === "brand" && (
              <div className="px-3 pb-5">
                <form action="" className="flex items-center">
                  <SearchIcon className="absolute right-5 text-gray-500" />
                  <input
                    type="text"
                    className="outline-none border border-gray-300 rounded 
                              pr-10 w-full py-2 placeholder:text-sm placeholder:text-gray-500"
                    placeholder="جستجوی برند"
                  />
                </form>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="hover:bg-gray-50 p-1 rounded cursor-pointer">
                    <div
                      onClick={() => {
                        dispatch({
                          type: "FILTER_PRODUCTS",
                          payload: "شیائومی",
                        });
                        dispatch({
                          type: "SORT_PRODUCTS",
                          payload: state.sort,
                        });
                      }}
                      className="flex items-center justify-between px-2"
                    >
                      <p className="text-sm text-gray-600">شیائومی</p>
                      <p className="text-sm text-gray-600">Xiaomi</p>
                    </div>
                  </div>
                  <div className="hover:bg-gray-50 p-1 rounded cursor-pointer">
                    <div
                      onClick={() => {
                        dispatch({
                          type: "FILTER_PRODUCTS",
                          payload: "سامسونگ",
                        });
                        dispatch({
                          type: "SORT_PRODUCTS",
                          payload: state.sort,
                        });
                      }}
                      className="flex items-center justify-between px-2"
                    >
                      <p className="text-sm text-gray-600">سامسونگ</p>
                      <p className="text-sm text-gray-600">Samsung</p>
                    </div>
                  </div>
                  <div className="hover:bg-gray-50 p-1 rounded cursor-pointer">
                    <div
                      onClick={() => {
                        dispatch({ type: "FILTER_PRODUCTS", payload: "اپل" });
                        dispatch({
                          type: "SORT_PRODUCTS",
                          payload: state.sort,
                        });
                      }}
                      className="flex items-center justify-between px-2"
                    >
                      <p className="text-sm text-gray-600">اپل</p>
                      <p className="text-sm text-gray-600">Apple</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Internal memory */}
          <div className="border-b border-gray-200">
            <div
              onClick={() => toggleDropdown("memory")}
              className="flex items-center gap-3 px-4 py-7 cursor-pointer"
            >
              <i
                className={`${
                  activeItem === "memory"
                    ? "rotate-180 transition duration-500"
                    : "transition"
                }`}
              >
                <ExpandMoreIcon fontSize="small" />
              </i>
              <h1 className="text-lg">حافظه داخلی</h1>
            </div>
            {activeItem === "memory" && (
              <div className="px-3 pb-5 flex flex-col gap-7">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="512gb"
                    id="512gb"
                    className="w-6 h-6 accent-gray-700"
                  />
                  <label htmlFor="512gb" className="pr-2 text-gray-700">
                    ۵۱۲ گیگابایت
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="256gb"
                    id="256gb"
                    className="w-6 h-6 accent-gray-700"
                  />
                  <label htmlFor="256gb" className="pr-2 text-gray-700">
                    ۲۵۶ گیگابایت
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="128gb"
                    id="128gb"
                    className="w-6 h-6 accent-gray-700"
                  />
                  <label htmlFor="128gb" className="pr-2 text-gray-700">
                    ۱۲۸ گیگابایت
                  </label>
                </div>
              </div>
            )}
          </div>
          {/* RAM memory */}
          <div className="border-b border-gray-200">
            <div
              onClick={() => toggleDropdown("ram")}
              className="flex items-center gap-3 px-4 py-7 cursor-pointer"
            >
              <i
                className={`${
                  activeItem === "ram"
                    ? "rotate-180 transition duration-500"
                    : "transition"
                }`}
              >
                <ExpandMoreIcon fontSize="small" />
              </i>
              <h1 className="text-lg">حافظه RAM</h1>
            </div>
            {activeItem === "ram" && (
              <div className="px-3 pb-5 flex flex-col gap-7">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="16gb"
                    id="16gb"
                    className="w-6 h-6 accent-gray-700"
                  />
                  <label htmlFor="16gb" className="pr-2 text-gray-700">
                    ۱۶ گیگابایت
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="12gb"
                    id="12gb"
                    className="w-6 h-6 accent-gray-700"
                  />
                  <label htmlFor="12gb" className="pr-2 text-gray-700">
                    ۱۲ گیگابایت
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="8gb"
                    id="8gb"
                    className="w-6 h-6 accent-gray-700"
                  />
                  <label htmlFor="8gb" className="pr-2 text-gray-700">
                    ۸ گیگابایت
                  </label>
                </div>
              </div>
            )}
          </div>
          {/* Working status */}
          <div className="border-b border-gray-200">
            <div
              onClick={() => toggleDropdown("status")}
              className="flex items-center gap-3 px-4 py-7 cursor-pointer"
            >
              <i
                className={`${
                  activeItem === "status"
                    ? "rotate-180 transition duration-500"
                    : "transition"
                }`}
              >
                <ExpandMoreIcon fontSize="small" />
              </i>
              <h1 className="text-lg">وضعیت کارکرد</h1>
            </div>
            {activeItem === "status" && (
              <div className="px-3 pb-5 flex flex-col gap-7">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="new"
                    id="new"
                    className="w-6 h-6 accent-gray-700"
                  />
                  <label htmlFor="new" className="pr-2 text-gray-700">
                    نو
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="worked"
                    id="worked"
                    className="w-6 h-6 accent-gray-700"
                  />
                  <label htmlFor="worked" className="pr-2 text-gray-700">
                    کارکرده
                  </label>
                </div>
              </div>
            )}
          </div>
          {/* Similar categories */}
          <div className="border-b border-gray-200">
            <div
              onClick={() => toggleDropdown("similar")}
              className="flex items-center gap-3 px-4 py-7 cursor-pointer"
            >
              <i
                className={`${
                  activeItem === "similar"
                    ? "rotate-180 transition duration-500"
                    : "transition"
                }`}
              >
                <ExpandMoreIcon fontSize="small" />
              </i>
              <h1 className="text-lg">دسته‌های مشابه</h1>
            </div>
            {activeItem === "similar" && (
              <div className="px-5">
                <div className="flex items-center gap-2">
                  <i className="text-gray-600">
                    <ExpandMoreIcon fontSize="small" />
                  </i>
                  <h1 className="text-sm text-gray-600">
                    موبایل و کالای دیجیتال
                  </h1>
                </div>
                <ul className="pr-10 flex flex-col gap-7 py-7">
                  <li className="text-sm text-gray-700 font-semibold">
                    گوشی موبایل
                  </li>
                  <li className="text-sm text-gray-600">تبلت</li>
                  <li className="text-sm text-gray-600">
                    هدفون، هدست و هندزفری
                  </li>
                  <li className="text-sm text-gray-600">
                    لوازم جانبی موبایل و تبلت
                  </li>
                  <li className="text-sm text-gray-600">قطعات موبایل و تبلت</li>
                  <li className="text-sm text-gray-600">
                    لوازم الکتریکی همراه
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Price */}
          <div className="border-b border-gray-200">
            <div
              onClick={() => toggleDropdown("price")}
              className="flex items-center gap-3 px-4 py-7 cursor-pointer"
            >
              <i
                className={`${
                  activeItem === "price"
                    ? "rotate-180 transition duration-500"
                    : "transition"
                }`}
              >
                <ExpandMoreIcon fontSize="small" />
              </i>
              <h1 className="text-lg">قیمت (تومان)</h1>
            </div>
            {activeItem === "price" && (
              <div className="px-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="relative">
                    <span className="text-xs text-gray-400 font-semibold absolute right-3 top-3">
                      از
                    </span>
                    <input
                      dir="ltr"
                      type="text"
                      className="outline-none border border-gray-300 rounded h-10 w-full px-2 placeholder:text-gray-600"
                      placeholder="۰"
                    />
                  </div>
                  <div className="relative">
                    <span className="text-xs text-gray-400 font-semibold absolute right-3 top-3">
                      تا
                    </span>
                    <input
                      dir="ltr"
                      type="text"
                      className="outline-none border border-gray-300 rounded h-10 w-full px-2 placeholder:text-gray-600"
                      placeholder="۱٫۱۳۴٫۳۲۳٫۰۰۰"
                    />
                  </div>
                </div>
                <button className="bg-gray-200 w-full h-10 rounded text-sm mt-5 mb-9">
                  اعمال فیلتر قیمت
                </button>
              </div>
            )}
          </div>
          {/* Search */}
          <div className="border-b border-gray-200">
            <div
              onClick={() => toggleDropdown("search")}
              className="flex items-center gap-3 px-4 py-7 cursor-pointer"
            >
              <i
                className={`${
                  activeItem === "search"
                    ? "rotate-180 transition duration-500"
                    : "transition"
                }`}
              >
                <ExpandMoreIcon fontSize="small" />
              </i>
              <h1 className="text-lg">جستجو در نتایج</h1>
            </div>
            {activeItem === "search" && (
              <form className="px-3 relative flex items-center pb-9">
                <input
                  type="text"
                  className="w-full outline-none border border-gray-300 rounded h-10"
                />
                <i className="absolute left-6 text-gray-500">
                  <SearchIcon />
                </i>
              </form>
            )}
          </div>
          {/* Inventory */}
          <div className="border-b border-gray-200">
            <div
              onClick={() => toggleDropdown("inventory")}
              className="flex items-center gap-3 px-4 py-7 cursor-pointer"
            >
              <i
                className={`${
                  activeItem === "inventory"
                    ? "rotate-180 transition duration-500"
                    : "transition"
                }`}
              >
                <ExpandMoreIcon fontSize="small" />
              </i>
              <h1 className="text-lg">موجودی</h1>
            </div>
            {activeItem === "inventory" && (
              <form action="" className="flex items-center gap-2 px-3 pb-9">
                <input type="checkbox" className="w-6 h-6 accent-gray-700" />
                <label htmlFor="inventory" className="text-gray-700">
                  نمایش محصولات موجود
                </label>
              </form>
            )}
          </div>
          {/* other */}
          <div className="border-b border-gray-200">
            <p className="text-sm font-semibold text-red-600 py-7 pr-3">
              لیست قیمت گوشی موبایل
            </p>
          </div>
          <div className="pr-3 pb-40">
            <h1 className="pt-7">دسته‌بندی‌های پربازدید</h1>
            <ul className="pt-4 pr-3">
              <li className="text-gray-400 pb-1">قیمت گوشی شیائومی</li>
              <li className="text-gray-400 pb-1">قیمت گوشی سامشونگ</li>
              <li className="text-gray-400 pb-1">قیمت گوشی اپل</li>
            </ul>
          </div>
        </aside>
        <div className="flex-1">
          {/* search box */}
          <form className="flex items-center justify-center bg-white px-3 py-4 md:hidden">
            <input
              type="text"
              className="outline-none bg-slate-100 w-full h-9 rounded-sm 
          placeholder:text-slate-400 placeholder:text-sm placeholder:pr-3"
              placeholder="جستجو در گوشی موبایل"
            />
            <i className="absolute left-6">
              <SearchIcon className="text-slate-400 rounded-r-sm" />
            </i>
          </form>
          {/* options v-mobile */}
          <div className="bg-white md:hidden">
            <div className="flex items-center overflow-x-auto gap-2 mx-3 pb-2 no-scrollbar">
              <div className="flex items-center justify-center flex-shrink-0">
                <p className="text-sm">وضعیت کارکرد</p>
                <ExpandMoreIcon fontSize="small" className="scale-75" />
              </div>
              <div
                onClick={selectFilter}
                className="flex items-center justify-center flex-shrink-0"
              >
                <p className="text-sm">برند</p>
                <ExpandMoreIcon fontSize="small" className="scale-75" />
              </div>
              <div
                onClick={selectSort}
                className="flex items-center justify-center flex-shrink-0"
              >
                <p className="text-sm">مرتب سازی</p>
                <ExpandMoreIcon fontSize="small" className="scale-75" />
              </div>
              <div className="flex items-center justify-center flex-shrink-0">
                <p className="text-sm">قیمت</p>
                <ExpandMoreIcon fontSize="small" className="scale-75" />
              </div>
              <div className="flex items-center justify-center flex-shrink-0">
                <p className="text-sm">موجودی</p>
                <ExpandMoreIcon fontSize="small" className="scale-75" />
              </div>
            </div>
          </div>
          {/* brands */}
          <div className="py-2 px-3 flex items-center gap-3 overflow-x-auto no-scrollbar md:hidden">
            <p className="text-sm flex-shrink-0 font-extralight">انتخاب برند</p>
            <p className="text-xs bg-white px-3 py-1 rounded border border-slate-200">
              سامسونگ
            </p>
            <p className="text-xs bg-white px-3 py-1 rounded border border-slate-200">
              شیائومی
            </p>
            <p className="text-xs bg-white px-3 py-1 rounded border border-slate-200">
              هواوی
            </p>
            <p className="text-xs bg-white px-3 py-1 rounded border border-slate-200">
              اپل
            </p>
            <p className="text-xs bg-white px-3 py-1 rounded border border-slate-200">
              نوکیا
            </p>
            <p className="text-xs bg-white px-3 py-1 rounded border border-slate-200">
              موتورولا
            </p>
          </div>
          {/* Beardcrumb and select sort */}
          <div className="hidden md:block mx-10">
            <div className="flex items-center justify-between border-b border-gray-200 py-3">
              <div className="flex items-center gap-2">
                <a href="#">
                  <span className="text-xs text-gray-500">همه دسته‌ها</span>
                </a>
                <span className="text-xs text-gray-500">/</span>
                <a href="#">
                  <span className="text-xs text-gray-500">
                    موبایل و کالای دیجیتال
                  </span>
                </a>
                <span className="text-xs text-gray-500">/</span>
                <a href="#">
                  <span className="text-xs text-gray-500">گوشی موبایل</span>
                </a>
              </div>
              <select
                name="sorting"
                id="sorting"
                className="bg-transparent text-sm outline-none"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  dispatch({ type: "SET_SORT", payload: e.target.value });
                  dispatch({ type: "SORT_PRODUCTS", payload: state.sort });
                }}
              >
                <option value="popular">محبوب ترین</option>
                <option value="ascending">ارزان ترین</option>
                <option value="descending">گران ترین</option>
              </select>
            </div>
            <h1 className="pt-8 pb-4 text-2xl font-semibold text-gray-700">
              قیمت انواع گوشی موبایل
            </h1>
          </div>
          {/* Filter's button */}
          <div className="mx-10 py-3 hidden md:block lg:hidden cursor-pointer">
            <i className="text-gray-700"><FilterAltOutlinedIcon /></i>
            <span className="text-sm text-gray-700">فیلتر ها</span>
          </div>
          {/* products */}
          <div className="flex items-center justify-between md:justify-normal lg:justify-start flex-wrap gap-2 px-3 pb-2 md:px-8">
            {state.filteredProducts.map((product: ProductsType) => (
              <Link to={`/${product.id}`} key={product.id}>
                <div className="bg-white rounded w-40 md:w-44 h-80 md:h-[26rem]">
                  <img
                    src={Object.values(product.image)[0]! as string}
                    alt="کلیک کنید"
                    className="mx-auto py-2"
                  />
                  <p
                    className="text-sm px-3 text-gray-700 font-semibold h-14 md:h-20 md:leading-7
                                overflow-hidden text-ellipsis mb-20 md:mb-32"
                  >
                    {product.title}
                  </p>
                  <p className="text-sm px-3">از {product.minPrice} تومان</p>
                  <div className="flex pr-3 items-center justify-between mt-1">
                    <p className="text-xs text-slate-500 mt-1">در 37 فروشگاه</p>
                    <div
                      className="flex items-center justify-between 
                                  text-gray-500 scale-75 gap-3"
                    >
                      <FavoriteBorderIcon />
                      <NotificationsNoneIcon />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Sort */}
          <div
            id="sort"
            className="bg-white z-20 w-full h-full fixed top-0 hidden"
          >
            <div className="flex items-center border-b border-slate-100 py-2 px-3">
              <ClearIcon onClick={cancelSelectSort} fontSize="small" />
              <h3 className="mx-auto text-xs">انتخاب مرتب سازی</h3>
            </div>
            <div className="flex flex-col items-start gap-3 px-5 py-3">
              <button
                className="text-sm hover:text-red-600"
                onClick={() =>
                  dispatch({ type: "SET_SORT", payload: "ascending" })
                }
              >
                ارزان ترین
              </button>
              <button
                className="text-sm hover:text-red-600"
                onClick={() =>
                  dispatch({ type: "SET_SORT", payload: "descending" })
                }
              >
                گران ترین
              </button>
            </div>
            <div
              className="flex items-center justify-between gap-3 py-2 px-3 
              border-t border-slate-100 absolute bottom-0 w-full"
            >
              <button
                className="text-sm text-white bg-zinc-700 w-full py-1 rounded"
                onClick={() => {
                  dispatch({ type: "SORT_PRODUCTS", payload: state.sort });
                  cancelSelectSort();
                }}
              >
                اعمال فیلتر
              </button>
              <button className="text-sm text-zinc-700 px-3 py-1 border border-zinc-700 rounded">
                حذف
              </button>
            </div>
          </div>
          {/* filter Brand */}
          <div
            id="brand-filter"
            className="bg-white z-20 w-full h-full fixed top-0 hidden"
          >
            <div className="flex items-center border-b border-slate-100 py-2 px-3">
              <ClearIcon onClick={cancelSelectFilter} fontSize="small" />
              <h3 className="mx-auto text-xs">انتخاب برند</h3>
            </div>
            <div className="px-3">
              <form className="flex items-center justify-center py-3">
                <i className="border border-slate-200 p-1 rounded border-l-0 rounded-l-none">
                  <SearchIcon fontSize="small" className="text-slate-500" />
                </i>
                <input
                  type="text"
                  className="border border-slate-200 rounded w-full placeholder:text-xs
                          placeholder:text-slate-500 placeholder:pr-1 py-1 outline-none
                          border-r-0 rounded-r-none"
                  placeholder="جستجوی برند"
                />
              </form>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between hover:bg-slate-200 rounded-sm">
                  <button
                    className="p-1 text-xs text-right w-full"
                    onClick={() =>
                      dispatch({ type: "SET_BRAND", payload: "samsung" })
                    }
                  >
                    سامسونگ
                  </button>
                  <button
                    className="p-1 text-xs text-left w-full"
                    onClick={() =>
                      dispatch({ type: "SET_BRAND", payload: "samsung" })
                    }
                  >
                    Samsung
                  </button>
                </div>
                <div className="flex items-center justify-between hover:bg-slate-200 rounded-sm">
                  <button
                    className="p-1 text-xs text-right w-full"
                    onClick={() =>
                      dispatch({ type: "SET_BRAND", payload: "xiaomi" })
                    }
                  >
                    شیائومی
                  </button>
                  <button
                    className="p-1 text-xs text-left w-full"
                    onClick={() =>
                      dispatch({ type: "SET_BRAND", payload: "xiaomi" })
                    }
                  >
                    Xiaomi
                  </button>
                </div>
                <div className="flex items-center justify-between hover:bg-slate-200 rounded-sm">
                  <button
                    className="p-1 text-xs text-right w-full"
                    onClick={() =>
                      dispatch({ type: "SET_BRAND", payload: "apple" })
                    }
                  >
                    اپل
                  </button>
                  <button
                    className="p-1 text-xs text-left w-full"
                    onClick={() =>
                      dispatch({ type: "SET_BRAND", payload: "apple" })
                    }
                  >
                    Apple
                  </button>
                </div>
              </div>
            </div>
            <div
              className="flex items-center justify-between gap-3 py-2 px-3 
              border-t border-slate-100 absolute bottom-0 w-full"
            >
              <button
                className="text-sm text-white bg-zinc-700 w-full py-1 rounded"
                onClick={() => {
                  dispatch({ type: "FILTER_PRODUCTS", payload: state.brand });
                  dispatch({ type: "SORT_PRODUCTS", payload: state.sort });
                  cancelSelectFilter();
                }}
              >
                اعمال فیلتر
              </button>
              <button className="text-sm text-zinc-700 px-3 py-1 border border-zinc-700 rounded">
                حذف
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
