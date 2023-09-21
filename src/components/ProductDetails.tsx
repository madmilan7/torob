import React from "react";
import { apple, samsung, xiaomi } from "../assets/products/products";
import {
  useParams,
  useNavigate,
  NavigateFunction,
  Link,
} from "react-router-dom";

// Components
import NavbarDesktop from "./shared/NavbarDesktop";

// Chart
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  elements,
} from "chart.js/auto";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import torob from "../assets/images/torob_logo.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PlaceIcon from "@mui/icons-material/Place";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

interface type {
  id: number;
  image: string | any;
  title: string;
  storage: number;
  ram?: number;
  minPrice: number;
  maxPrice: number;
}

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

// Scroll
window.onscroll = () => {
  const sections = document.querySelectorAll("section")!;
  const buyType = document.querySelectorAll(".buy")!;
  let current: any = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 70) {
      current = section.getAttribute("id");
    }
  });

  buyType.forEach((buy) => {
    buy.classList.remove("active");
    if (buy.classList.contains(current)) {
      buy.classList.add("active");
    }
  });
};

const ProductDetails: React.FC = () => {
  const params = useParams();
  const id: any = params.id;
  const data = [...apple, ...samsung, ...xiaomi];
  const product: type = data[id];
  const { image, title, storage, ram, minPrice, maxPrice } = product;

  // Chart
  const chartData: any = {
    labels: ["12 اردیبهشت", "13 اردیبهشت", "14 اردیبهشت", "15 اردیبهشت"],
    datasets: [
      {
        label: "میانگین قیمت",
        data: [minPrice + 2000000, minPrice + 4000000, maxPrice, minPrice],
        backgroundColor: "transparent",
        borderColor: "green",
        pointBorderColor: "transparent",
      },
    ],
  };
  const options: any = {
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            family: "vazir",
            size: 10,
          },
          boxWidth: 3,
          boxHeight: 3,
          useBorderRadius: true,
          borderRadius: 2,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            family: "vazir",
            size: 10,
          },
          minRotation: 45,
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        title: {
          display: true,
          text: "تومان",
          font: {
            family: "vazir",
            size: 10,
          },
        },
        ticks: {
          font: {
            family: "vazir",
            size: 10,
          },
        },
      },
    },
    layout: {
      padding: {
        right: 20,
        left: 20,
        top: 9,
      },
    },
  };

  const moreReview = () => {
    document.getElementById("wrapper1")?.classList.replace("h-28", "h-fit");
    document.getElementById("wrapper2")?.classList.replace("h-28", "h-fit");
    document.getElementById("more")!.classList.add("hidden");
  };

  const onlineShoping = () => {
    const el = document.getElementById("onlineShoping")!;
    el.scrollIntoView(true);
  };

  const buyPerson = () => {
    const el = document.getElementById("buyPerson")!;
    el.scrollIntoView(true);
  };

  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="bg-slate-100">
      <header
        className="flex items-center gap-5  h-10 px-3
      border-b border-slate-200 bg-white sticky top-0 z-10 sm:hidden"
      >
        <ArrowForwardIcon onClick={() => navigate(-1)} />
        <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </p>
      </header>
      <div className="h-5 sm:hidden"></div>
      <NavbarDesktop />
      <div className="max-w-[80rem] mx-auto">
        {/* Breadcrumb */}
        <div className="hidden sm:flex items-center gap-2 h-12">
          <a href="#">
            <span className="text-xs text-gray-500">ترب</span>
          </a>
          <span className="text-xs text-gray-500">/</span>
          <a href="#">
            <span className="text-xs text-gray-500">همه‌ی دسته‌ها</span>
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
          <span className="text-xs text-gray-500">/</span>
          <a href="#">
            <span className="text-xs text-gray-500">شیائومی (Xiaomi)</span>
          </a>
        </div>
        <div className="sm:grid grid-cols-[840px_416px] gap-6">
          {/* Showcase */}
          <div className="bg-white sm:flex pb-3 order-1 sm:rounded sm:py-6">
            <div className="sm:w-2/3">
              <img
                src={Object.values(image)[0]! as string}
                alt="گوشی"
                className="w-40 mx-auto py-4 sm:w-80 sm:h-80 sm:object-cover"
              />
            </div>
            <div className="sm:px-6">
              <p
                className="text-sm px-3 sm:text-base sm:font-semibold sm:text-gray-700
                            sm:py-10"
              >
                {title}
              </p>
              <p className="py-4 px-3 text-sm text-red-600 sm:hidden">
                از {minPrice} تومان تا {maxPrice} تومان
              </p>
              {/* price and storage */}
              <div className="flex pr-3 mb-2">
                <div
                  className="border border-slate-200 rounded py-2 px-4 hover:border-2 
                              hover:border-slate-400"
                >
                  <p
                    dir="ltr"
                    className="text-xs font-semibold pb-1 text-right"
                  >
                    {storage + " GB"} {ram ? `- ${ram} GB` : ""}
                  </p>
                  <p className="text-xs">از {minPrice} تومان</p>
                </div>
              </div>
              {/* button and icons */}
              <div className="px-3 flex items-center gap-3">
                <button
                  className="bg-red-600 text-white px-4 py-1 sm:hidden
                            rounded whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  خرید از ارزانترین فروشنده رجیستر شده
                </button>
                <div className="flex items-center justify-between w-full gap-10 py-3">
                  <div
                    className="hidden sm:flex items-center hover:bg-gray-100 px-2 py-1.5 rounded-lg
                                  font-semibold text-gray-700 cursor-pointer"
                  >
                    <p>از {minPrice} تومان</p>
                    <i>
                      <ExpandMoreIcon fontSize="small" />
                    </i>
                  </div>
                  <div className="flex items-center sm:gap-5">
                    <NotificationsNoneOutlinedIcon className="text-slate-500 sm:text-gray-400" />
                    <FavoriteBorderIcon className="text-slate-500 sm:text-gray-400" />
                    <ShareOutlinedIcon className="text-slate-500 sm:text-gray-400" />
                  </div>
                </div>
                <div className="hidden sm:flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-2xl">
                  <FlagOutlinedIcon fontSize="small" />
                  گزارش
                </div>
              </div>
              {/* button desktop */}
              <div
                className="bg-red-500 rounded-lg w-full sm:flex items-center justify-between
                              text-white px-3 py-1 hidden"
              >
                <div className="leading-8">
                  <p>خرید از مقداد ای تی</p>
                  <p>از {minPrice} تومان</p>
                </div>
                <div>
                  <p className="text-xs bg-red-600 px-2 py-1 rounded-2xl">
                    گزارش
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* install torob */}
          <div className="flex justify-between p-5 bg-white m-3 rounded sm:hidden">
            <div className="w-2/3 flex flex-col justify-between">
              <p className="text-sm">
                میخواهید «ترب» را روی گوشی خود نصب کنید؟
              </p>
              <div className="flex items-center gap-3">
                <button className="bg-red-600 text-white text-sm px-3 py-1 rounded">
                  بله نصب شود
                </button>
                <button className="text-sm text-red-600 border border-red-600 rounded px-3 py-1">
                  خیر
                </button>
              </div>
            </div>
            <img
              src={torob}
              alt="ترب"
              className="w-20 border border-slate-200 p-3 rounded-2xl"
            />
          </div>
          {/* Sellers */}
          <div className="order-3">
            <div className="px-3 sm:px-6 py-4 sm:bg-white sm:rounded-t">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-bold">فروشنده ها</p>
                <a href="#" className="text-xs sm:text-sm text-red-600">
                  راهنمای خرید امن
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white border-2 border-black rounded-xl px-2 py-1 w-28 h-12">
                  <p className="text-xs font-semibold">تمام فروشگاه ها</p>
                  <span className="text-xs font-normal">از{minPrice}تومان</span>
                </div>
                <div
                  className="flex items-center justify-center bg-white rounded-xl w-28 h-12
                                sm:border border-gray-300"
                >
                  <PlaceIcon fontSize="small" />
                  <p className="text-xs px-1">انتخاب شهر</p>
                  <ExpandMoreIcon fontSize="small" />
                </div>
              </div>
            </div>
            <div>
              <div
                className="flex items-center justify-center sm:justify-start gap-8 border-b-2 
                        border-slate-100 sticky top-10 sm:top-0 bg-white sm:font-semibold sm:px-6"
              >
                <div
                  onClick={onlineShoping}
                  className="onlineShoping buy flex items-center py-4 relative cursor-pointer"
                >
                  <i className="flex text-red-600">
                    <PlaceIcon fontSize="small" />
                  </i>
                  <p className="text-sm">خرید اینترنتی</p>
                  <span className="text-xs font-extralight bg-slate-200 rounded-md px-1 mx-2">
                    195
                  </span>
                </div>
                <div
                  onClick={buyPerson}
                  className="buyPerson buy flex items-center py-4 cursor-pointer relative"
                >
                  <i className="flex text-blue-600">
                    <PlaceIcon fontSize="small" />
                  </i>
                  <p className="text-sm">خرید حضوری</p>
                  <span className="text-xs font-extralight bg-slate-200 rounded-md px-1 mx-2">
                    1
                  </span>
                </div>
              </div>
              {/*  */}
              <section
                id="onlineShoping"
                className="bg-white mx-3 sm:mx-0 rounded px-3 sm:px-0"
              >
                {/* shop */}
                <div
                  className="group sm:flex items-start justify-between border-b border-gray-200
                              sm:hover:bg-gray-50 sm:px-6"
                >
                  {/* s01 */}
                  <div className="group/item flex sm:flex-col items-center sm:items-start sm:w-40 gap-2 py-2 cursor-pointer">
                    <p className="text-sm font-semibold sm:py-3 sm:group-hover/item:text-blue-400">
                      مقداد ای تی
                    </p>
                    <span className="text-xs text-slate-500 font-extralight sm:group-hover/item:text-blue-400">
                      تهران
                    </span>
                  </div>
                  {/* s02 */}
                  <div>
                    <div className="flex items-center justify-between sm:justify-normal sm:gap-x-2 py-1 sm:py-4">
                      <p className="text-xs text-green-700 bg-green-100 px-2 sm:py-0.5 rounded-2xl cursor-pointer">
                        5 (5 سال در ترب)
                        <ExpandMoreIcon />
                      </p>
                      <span
                        className="text-xs text-slate-500 bg-gray-100 px-2 py-0.5 
                                        sm:py-1 rounded-2xl sm:group-hover:bg-white cursor-pointer"
                      >
                        <FlagOutlinedIcon fontSize="small" />
                        گزارش
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm py-1 sm:py-0 text-gray-700 sm:group-hover:text-blue-400">
                      {title}
                    </p>
                    <p
                      className="text-xs font-extralight sm:font-normal text-gray-500 sm:py-3
                                  sm:group-hover:text-blue-400"
                    >
                      رجیستر شده | گارانتی سانافون
                    </p>
                    <div className="py-2 sm:pb-5 sm:pt-0">
                      <p className="inline text-xs text-gray-600 bg-gray-100 rounded-2xl py-1 px-2 cursor-pointer">
                        <PlaceIcon fontSize="small" />
                        آیا امکان{" "}
                        <span className="font-semibold">پرداخت در محل</span> در
                        شهر من وجود دارد؟
                      </p>
                    </div>
                  </div>
                  {/* s03 */}
                  <div className="sm:w-56">
                    <div className="flex sm:flex-col items-center justify-between sm:items-end sm:justify-normal">
                      <p className="text-red-600 text-sm sm:py-4">
                        {minPrice} تومان
                      </p>
                      <button
                        className="text-white bg-red-600 font-semibold border 
                                   rounded-lg sm:text-sm text-xs px-3 sm:px-5 py-2 sm:py-2.5"
                      >
                        خرید اینترنتی
                      </button>
                    </div>
                    <div className="flex items-center gap-1 sm:block sm:py-4 py-2">
                      <p className="text-xs text-gray-500 sm:text-left">
                        آخرین تغییر قیمت فروشگاه:
                      </p>
                      <p className="text-xs text-gray-500 sm:text-left sm:pt-1">
                        ۲ ساعت پیش
                      </p>
                    </div>
                  </div>
                </div>
                {/* shop */}
                <div
                  className="group sm:flex items-start justify-between sm:border-b border-gray-200
                              sm:hover:bg-gray-50 sm:px-6"
                >
                  {/* s01 */}
                  <div className="group/item flex sm:flex-col items-center sm:items-start sm:w-40 gap-2 py-2 cursor-pointer">
                    <p className="text-sm font-semibold sm:py-3 sm:group-hover/item:text-blue-400">
                      مقداد ای تی
                    </p>
                    <span className="text-xs text-slate-500 font-extralight sm:group-hover/item:text-blue-400">
                      تهران
                    </span>
                  </div>
                  {/* s02 */}
                  <div>
                    <div className="flex items-center justify-between sm:justify-normal sm:gap-x-2 py-1 sm:py-4">
                      <p className="text-xs text-green-700 bg-green-100 px-2 sm:py-0.5 rounded-2xl cursor-pointer">
                        5 (5 سال در ترب)
                        <ExpandMoreIcon />
                      </p>
                      <span
                        className="text-xs text-slate-500 bg-gray-100 px-2 py-0.5 sm:py-1 rounded-2xl
                                        sm:group-hover:bg-white cursor-pointer"
                      >
                        <FlagOutlinedIcon fontSize="small" />
                        گزارش
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm py-1 sm:py-0 text-gray-700 sm:group-hover:text-blue-400">
                      {title}
                    </p>
                    <p
                      className="text-xs font-extralight sm:font-normal text-gray-500 
                                  sm:py-3 sm:group-hover:text-blue-400"
                    >
                      رجیستر شده | گارانتی سانافون
                    </p>
                    <div className="py-2 sm:pb-5 sm:pt-0">
                      <p className="inline text-xs text-gray-600 bg-gray-100 rounded-2xl py-1 px-2 cursor-pointer">
                        <PlaceIcon fontSize="small" />
                        آیا امکان{" "}
                        <span className="font-semibold">پرداخت در محل</span> در
                        شهر من وجود دارد؟
                      </p>
                    </div>
                  </div>
                  {/* s03 */}
                  <div className="sm:w-56">
                    <div className="flex sm:flex-col items-center justify-between sm:items-end sm:justify-normal">
                      <p className="text-red-600 text-sm sm:py-4">
                        {minPrice} تومان
                      </p>
                      <button
                        className="text-white bg-red-600 font-semibold border 
                                 rounded-lg sm:text-sm text-xs px-3 py-2 sm:px-5 sm:py-2.5"
                      >
                        خرید اینترنتی
                      </button>
                    </div>
                    <div className="flex items-center gap-1 sm:block py-2 sm:py-4">
                      <p className="text-xs text-gray-500 sm:text-left">
                        آخرین تغییر قیمت فروشگاه:
                      </p>
                      <p className="text-xs text-gray-500 sm:text-left sm:pt-1">
                        ۲ ساعت پیش
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:p-6 py-3">
                  <button
                    className="bg-red-600 text-center w-full py-3.5 
                                    text-white text-sm rounded sm:rounded-lg"
                  >
                    نمایش تمام ۶۹ فروشگاه
                  </button>
                </div>
              </section>
              {/*  */}
              <section
                id="buyPerson"
                className="bg-white mx-3 sm:mx-0 px-3 sm:px-0 rounded mt-3 sm:mt-6"
              >
                {/* person */}
                <div className="group border-b border-gray-200 sm:hover:bg-gray-50">
                  <div className="sm:flex sm:px-6">
                    {/* s01 */}
                    <div className="group/item flex sm:flex-col sm:items-start items-center gap-2 py-3 sm:w-40 cursor-pointer">
                      <p
                        className="text-sm sm:text-base font-semibold sm:py-2 
                                  text-gray-800 sm:group-hover/item:text-blue-400"
                      >
                        آیفونچی
                      </p>
                      <span
                        className="text-xs font-extralight text-gray-400 
                                    sm:group-hover/item:text-blue-400"
                      >
                        تهران
                      </span>
                    </div>
                    {/* s02 */}
                    <div>
                      <div className="flex items-center justify-between sm:justify-normal sm:gap-2 sm:py-4">
                        <p className="text-xs text-gray-700 bg-gray-200 px-2 py-1 rounded-2xl cursor-pointer">
                          فروشگاه حضوری
                          <ExpandMoreIcon fontSize="small" />
                        </p>
                        <span
                          className="text-xs text-gray-600 bg-gray-100 px-2 py-1
                                          rounded-2xl sm:group-hover:bg-white cursor-pointer"
                        >
                          <FlagOutlinedIcon fontSize="small" />
                          گزارش
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 py-2 sm:py-0">
                        خیابان ولیعصر، بلوار میرداماد، مجنمع کامپیوتر پایتخت،
                        طبقه 2، واحد 220
                      </p>
                    </div>
                    {/* s03 */}
                    <div
                      className="flex sm:flex-col items-center sm:items-end 
                                  justify-between sm:justify-normal sm:w-56 sm:flex-1"
                    >
                      <p className="text-sm text-blue-600 sm:py-4">
                        {minPrice} تومان
                      </p>
                      <p
                        className="text-xs sm:text-sm text-white bg-blue-600 px-3 py-1 
                                  sm:px-4 sm:py-2.5 rounded-lg cursor-pointer"
                      >
                        اطلاعات تماس
                        <ExpandMoreIcon fontSize="small" />
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 py-2 sm:pr-6 sm:py-4">
                    آخرین تغییر قیمت در فروشگاه: دیروز
                  </p>
                </div>
                {/* person */}
                <div className="group sm:hover:bg-gray-50 sm:border-b border-gray-200">
                  <div className="sm:flex sm:px-6">
                    {/* s01 */}
                    <div className="group/item flex sm:flex-col sm:items-start items-center gap-2 py-3 sm:w-40 cursor-pointer">
                      <p
                        className="text-sm sm:text-base font-semibold sm:py-2
                                  text-gray-800 sm:group-hover/item:text-blue-400"
                      >
                        آیفونچی
                      </p>
                      <span className="text-xs font-extralight text-gray-400 sm:group-hover/item:text-blue-400">
                        تهران
                      </span>
                    </div>
                    {/* s02 */}
                    <div>
                      <div className="flex items-center justify-between sm:justify-normal sm:gap-2 sm:py-4">
                        <p className="text-xs text-gray-700 bg-gray-200 px-2 py-1 rounded-2xl cursor-pointer">
                          فروشگاه حضوری
                          <ExpandMoreIcon fontSize="small" />
                        </p>
                        <span
                          className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-2xl
                                          sm:group-hover:bg-white cursor-pointer"
                        >
                          <FlagOutlinedIcon fontSize="small" />
                          گزارش
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 py-2 sm:py-0">
                        خیابان ولیعصر، بلوار میرداماد، مجنمع کامپیوتر پایتخت،
                        طبقه 2، واحد 220
                      </p>
                    </div>
                    {/* s03 */}
                    <div
                      className="flex sm:flex-col items-center sm:items-end 
                                  justify-between sm:justify-normal sm:w-56 sm:flex-1"
                    >
                      <p className="text-sm text-blue-600 sm:py-4">
                        {minPrice} تومان
                      </p>
                      <p
                        className="text-xs sm:text-sm text-white bg-blue-600 px-3 py-1 
                                  sm:px-4 sm:py-2.5 rounded-lg cursor-pointer"
                      >
                        اطلاعات تماس
                        <ExpandMoreIcon fontSize="small" />
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 py-2 sm:pr-6 sm:py-4">
                    آخرین تغییر قیمت در فروشگاه: دیروز
                  </p>
                </div>
                <div className="sm:p-6 py-3">
                  <button
                    className="bg-blue-600 text-center w-full py-3.5 
                                    text-white text-sm rounded sm:rounded-lg"
                  >
                    نمایش تمام ۹ فروشگاه
                  </button>
                </div>
              </section>
            </div>
          </div>
          {/* Specs */}
          <div className="p-3 sm:p-0 order-4 sm:h-64 row-span-2 sm:min-h-full">
            <div className="sm:flex flex-col sm:bg-white sm:rounded sm:h-full sm:max-h-full">
              <h3
                className="text-sm sm:text-lg text-gray-700 font-semibold 
                              py-1 sm:py-7 sm:px-6"
              >
                مشخصات محصول
              </h3>
              <div
                className="bg-white px-3 sm:pr-6 rounded sm:ml-3 sm:mb-5 sm:h-full 
                              sm:overflow-y-scroll scrollbar"
              >
                <h2 className="hidden sm:block text-gray-700 font-semibold border-b border-gray-200 pb-2">
                  مشخصات کلی
                </h2>
                <div className="border-b border-slate-200 sm:border-none py-2">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                    سازنده
                  </p>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {title.split(" ")[1]}
                  </span>
                </div>
                <div className="py-2">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                    وزن
                  </p>
                  <span className="text-xs sm:text-sm text-gray-500">
                    200 گرم
                  </span>
                </div>
                {/* desktop */}
                <div className="hidden sm:block">
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      ابعاد
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      7.9 × 73.9 × 161.6 میلی‌متر
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      نوع دستگاه
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      موبایل
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      تاریخ معرفی دستگاه
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      2023
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      کاربری موبایل
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      گوشی 5G, گوشی میان رده, گوشی مناسب عکاسی
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      جنس بدنه
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      بدنه پشت و دور بدنه پلاستیک, پنل جلو شیشه
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      نوع پردازنده موبایل
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      64 بیت
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      پردازنده مرکزی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      8 هسته ای
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      تعداد هسته (Core)
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      8 هسته
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      تراشه اصلی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      Qualcomm SM6375 Snapdragon 695 5G (6 nm)
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      سازنده تراشه
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      Snapdragon
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      فرکانس پردازنده مرکزی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      2 هسته با سرعت 2.2 گیگاهرتز (Kryo 660 Gold) و 6 هسته با
                      سرعت 1.7 گیگاهرتز (Kryo 660 Silver)
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      مدل پردازنده گرافیکی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      Adreno 619
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      حافظه داخلی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {storage} گیگابایت
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      حافظه اجرایی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      8 گیگابایت
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      پشتيباني کارت حافظه جانبي
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      ندارد
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      توضیحات کارت حافظه جانبی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      ندارد
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      قابلیت افزایش حافظه جانبی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      ندارد
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      دوربین اصلی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      2 + 5 + 64 مگاپیکسل
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      رزولوشن دوربین اصلی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      64 مگاپیکسل
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      دریچه دیافراگم دوربین اصلی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      دوربین اول f/1.8, دوربین دوم f/2.2, دوربین سوم f/2.4
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      فیلم برداری دوربین اصلی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      رزولوشن (1080 × 1920) Full HD با سرعت 30 فریم بر ثانیه
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      فلش دوربین اصلی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      دارد
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      قابلیت های دوربین اصلی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      دارای حسگر سنجش عمق , دارای لنز واید, رزولوشن عکس 6912 ×
                      9216 پیکسل, فیلمبرداری گذر زمان (Time Lapse), قابلیت تشخیص
                      لبخند, قابلیت زوم دیجیتال 8 برابر, قابلیت عکاسی HDR,
                      قابلیت عکسبرداری ماکرو (Macro)
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      فناوری فوکوس
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      دارد
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      بازه دوربین اصلی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      از 32.1 تا 64 مگاپیکسل
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      دوربین سلفی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      دارد
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      رزولوشن دوربين سلفي
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      16 مگاپیکسل
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      دریچه‌ دیافراگم دوربین سلفی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      دریچه دیافراگم f/2.5
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      فیلمبرداری دوربین سلفی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      کیفیت فیلمبرداری با رزولوشن (1920 × 1080) Full HD با سرعت
                      30 فریم بر ثانیه
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      فلش دوربین سلفی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      ندارد
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      قابلیت های دوربین سلفی
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      دارای لنز واید
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      رنج دوربین جلو
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      از 12 تا 16 مگاپیکسل
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      بازه ی اندازه صفحه نمایش
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      از 6.1 تا 7.9 اینچ
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold sm:py-1">
                      ابعاد صفحه نمایش
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      6.67 اینچ
                    </span>
                  </div>
                </div>
                <button className="text-sm text-red-600 w-full mx-auto py-3 sm:hidden">
                  نمایش تمام مشخصات
                </button>
              </div>
            </div>
          </div>
          {/* Chart */}
          <h3 className="text-sm font-semibold py-1 px-3 sm:hidden">
            تغییرات قیمت
          </h3>
          <div className="sm:flex flex-col bg-white mx-3 sm:mx-0 rounded h-fit order-2 sm:w-full sm:h-full">
            <Line data={chartData} options={options} className="order-2"></Line>
            <h1
              className="text-red-600 sm:text-gray-700 text-sm text-center w-full pt-10 pb-3
                            sm:text-lg sm:font-semibold order-1 sm:text-right sm:px-6 sm:py-7"
            >
              لیست تغییرات قیمت
            </h1>
          </div>
          {/* Product section */}
          <div className="flex flex-col mx-3 mt-6 sm:m-0 order-5 sm:p-6 bg-white sm:w-full rounded">
            {/* s01 */}
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2 bg-slate-100 sm:bg-white 
                            gap-2 sm:mb-5 pb-2 sm:p-0"
            >
              <h2 className="text-sm sm:text-base text-gray-800 font-semibold">
                راهنمای انتخاب محصول
              </h2>
              <h3 className="text-xs text-gray-500">
                با بررسی مزایا و معایب کلیدی، مطمئن انتخاب کنید
              </h3>
            </div>
            {/* s02 */}
            <div className="flex flex-col sm:flex-row p-3 sm:p-0 gap-6">
              <ul id="wrapper1" className="h-28 overflow-hidden">
                <h3 className="text-xs sm:text-sm text-green-500 font-semibold pb-1">
                  نقاط قوت
                </h3>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-green-500">. </span>پشتیبانی از
                  5g
                </li>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-green-500">. </span>نمایشگر عالی
                </li>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-green-500">. </span>کیفیت تصویر
                  و عملکرد سیستم عالی
                </li>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-green-500">. </span>عملکرد بدون
                  لگ و بدون اختلال
                </li>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-green-500">. </span>باتری
                  5100mAh (برای مدتی در رده بالا بود)
                </li>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-green-500">. </span>طراحی جذاب
                </li>
              </ul>
              <ul id="wrapper2" className="pb-3 sm:p-0 h-28 overflow-hidden">
                <h3 className="text-xs sm:text-sm text-orange-400 font-semibold pb-1">
                  نقاط ضعف
                </h3>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-orange-400">. </span>میانگین
                  پردازنده
                </li>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-orange-400">. </span>کاهش در
                  عکاسی دوربین
                </li>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-orange-400">. </span>ضعف دوربین
                  عقب و عملکرد سیستم عالی
                </li>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-orange-400">. </span>نمایشگر
                  منحنی و حساس به ضربه
                </li>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-orange-400">. </span>پردازنده
                  متوسط
                </li>
                <li className="text-xs text-gray-800">
                  <span className="text-xl text-orange-400">. </span>محدودیت و
                  کمبود تنوع در لوازم جانبی
                </li>
              </ul>
            </div>
            {/* s03 */}
            <div onClick={moreReview}>
              <p
                id="more"
                className="text-center text-sm text-red-600 font-semibold py-3 sm:pb-0 cursor-pointer"
              >
                ادامه بررسی
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* similar products */}
      <div className="max-w-[80rem] mx-auto">
        <h3 className="text-sm sm:text-lg text-gray-800 font-semibold text-center pt-4 sm:py-5">
          محصولات مشابه
        </h3>
        <div
          className="mx-3 sm:m-0 flex items-center justify-between sm:justify-normal flex-wrap gap-3 
                        sm:gap-y-2 sm:gap-x-1.5 mt-3"
        >
          {data.map((product) => (
            <Link to={`/${product.id}`} key={product.id}>
              <div className="bg-white rounded px-3 w-40 sm:w-52 h-80 sm:h-[26rem]">
                <img
                  src={Object.values(product.image)[0]! as string}
                  alt="کلیک کنید"
                  className="w-36 mx-auto py-4 sm:w-full"
                />
                <p
                  className="text-sm h-14 sm:h-20 overflow-hidden text-ellipsis my-5
                              sm:font-semibold sm:leading-7 text-gray-700 sm:mt-3 sm:mb-24"
                >
                  {product.title}
                </p>
                <p className="text-sm sm:font-semibold text-gray-800">
                  از {product.minPrice} تومان
                </p>
                <div className="sm:flex items-center justify-between sm:py-2">
                  <p className="text-xs text-gray-500 mt-1 sm:m-0">
                    در 37 فروشگاه
                  </p>
                  <div
                    className="flex items-center justify-evenly mt-4 sm:m-0 
                                text-gray-400 sm:scale-75 sm:gap-5"
                  >
                    <FavoriteBorderIcon />
                    <NotificationsNoneIcon />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default ProductDetails;
