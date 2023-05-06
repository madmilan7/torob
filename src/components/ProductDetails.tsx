import React from "react";
import { apple, samsung, xiaomi } from "../assets/products/products";
import { useParams } from "react-router-dom";

// Chart
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js/auto";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import torob from "../assets/images/torob_logo.svg";

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
            size: 10
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
            size: 10
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
            size: 10
          },
        },
        ticks: {
          font: {
            family: "vazir",
            size: 10
          },
        }
      },
    },
    layout: {
      padding: {
        right: 20,
        left: 20,
        top: 9
      },
    },
  };

  return (
    <div className="bg-slate-100">
      <header
        className="flex items-center gap-5  h-10 px-3
      border-b border-slate-200 bg-white"
      >
        <ArrowForwardIcon />
        <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </p>
      </header>
      <div className="h-5"></div>
      {/*  */}
      <div className="bg-white pb-3">
        <img
          src={Object.values(image)[0]! as string}
          alt="گوشی"
          className="w-40 mx-auto py-4"
        />
        <p className="text-sm px-3">{title}</p>
        <p className="py-4 px-3 text-sm text-red-600">
          از {minPrice} تومان تا {maxPrice} تومان
        </p>
        {/*  */}
        <div className="flex pr-3 mb-2">
          <div className="border border-slate-200 rounded py-2 px-4 hover:border-2 hover:border-slate-400">
            <p className="text-xs font-semibold pb-1">
              {storage + "GB"} {ram && "-"} {ram + "GB"}
            </p>
            <p className="text-xs">از {minPrice} تومان</p>
          </div>
        </div>
        {/*  */}
        <div className="px-3 flex items-center gap-3">
          <button
            className="bg-red-600 text-white px-4 py-1 
          rounded whitespace-nowrap overflow-hidden text-ellipsis"
          >
            خرید از ارزانترین فروشنده رجیستر شده
          </button>
          <NotificationsNoneOutlinedIcon className="text-slate-500" />
          <FavoriteBorderIcon className="text-slate-500" />
          <ShareOutlinedIcon className="text-slate-500" />
        </div>
      </div>
      {/* install torob */}
      <div className="flex justify-between p-5 bg-white m-3 rounded">
        <div className="w-2/3 flex flex-col justify-between">
          <p className="text-sm">میخواهید «ترب» را روی گوشی خود نصب کنید؟</p>
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
      {/*  */}
      <div>
        <div className="px-3 py-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold">فروشنده ها</p>
            <a href="#" className="text-xs text-red-600">
              راهنمای خرید امن
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white border-2 border-black rounded-xl px-2 py-1 w-28 h-12">
              <p className="text-xs font-semibold">تمام فروشگاه ها</p>
              <span className="text-xs font-normal">از{minPrice}تومان</span>
            </div>
            <div className="flex items-center justify-center bg-white rounded-xl w-28 h-12">
              <p className="text-xs">انتخاب شهر</p>
            </div>
          </div>
        </div>
        {/* shoppers */}
        <div className="bg-white mx-3 rounded px-3">
          <div className="flex items-center justify-center gap-8 h-12 border-b-2 border-slate-100">
            <div className="flex items-center gap-2">
              <p className="text-sm">خرید اینترنتی</p>
              <span className="text-xs font-extralight bg-slate-200 rounded-md px-1">
                195
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm">خرید حضوری</p>
              <span className="text-xs font-extralight bg-slate-200 rounded-md px-1">
                1
              </span>
            </div>
          </div>
          {/* shop */}
          <div className="border-b-2 border-slate-100">
            <div className="flex items-center gap-2 py-2">
              <p className="text-sm font-semibold">مقداد ای تی</p>
              <span className="text-xs text-slate-500 font-extralight">
                تهران
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <p className="text-xs text-green-700 bg-green-200 px-3 py-1 rounded-xl">
                5 (5 سال در ترب)
              </p>
              <span className="text-xs text-slate-500 bg-slate-200 px-2 py-1 rounded-xl">
                گزارش
              </span>
            </div>
            <p className="text-xs py-1 text-slate-600">{title}</p>
            <p className="text-xs font-extralight text-slate-400">
              رجیستر شده | گارانتی سانافون
            </p>
            <div className="py-2">
              <p className="inline text-xs text-slate-500 bg-slate-200 rounded-xl py-1 px-3">
                تحویل فوری
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-red-600 text-sm">{minPrice}تومان</p>
              <button className="text-red-600 text-xs font-semibold border border-red-600 rounded-md px-3 py-1">
                خرید اینترنتی
              </button>
            </div>
            <p className="text-xs text-slate-500 py-2">
              آخرین بروزرسانی: 9 روز پیش
            </p>
          </div>
          {/* shop */}
          <div>
            <div className="flex items-center gap-2 py-2">
              <p className="text-sm font-semibold">مقداد ای تی</p>
              <span className="text-xs text-slate-500 font-extralight">
                تهران
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <p className="text-xs text-green-700 bg-green-200 px-3 py-1 rounded-xl">
                5 (5 سال در ترب)
              </p>
              <span className="text-xs text-slate-500 bg-slate-200 px-2 py-1 rounded-xl">
                گزارش
              </span>
            </div>
            <p className="text-xs py-1 text-slate-600">{title}</p>
            <p className="text-xs font-extralight text-slate-400">
              رجیستر شده | گارانتی سانافون
            </p>
            <div className="py-2">
              <p className="inline text-xs text-slate-500 bg-slate-200 rounded-xl py-1 px-3">
                تحویل فوری
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-red-600 text-sm">{minPrice}تومان</p>
              <button className="text-red-600 text-xs font-semibold border border-red-600 rounded-md px-3 py-1">
                خرید اینترنتی
              </button>
            </div>
            <p className="text-xs text-slate-500 py-2">
              آخرین بروزرسانی: 9 روز پیش
            </p>
            <button className="text-white bg-red-600 text-sm w-full py-1 rounded-md my-3">
              نمایش تمام 195 فروشگاه
            </button>
          </div>
        </div>
        {/* buy in person */}
        <div className="bg-white mx-3 px-3 rounded mt-3">
          {/* p1 */}
          <div className="border-b-2 border-slate-200">
            <div className="flex items-center gap-2 py-3">
              <p className="text-sm font-semibold">آیفونچی</p>
              <span className="text-xs font-extralight text-slate-400">
                تهران
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-600 bg-slate-200 px-2 py-1 rounded-xl">
                فروشگاه حضوری
              </p>
              <span className="text-xs text-slate-600 bg-slate-200 px-2 py-1 rounded-xl">
                گزارش
              </span>
            </div>
            <p className="text-xs py-2">
              خیابان ولیعصر، بلوار میرداماد، مجنمع کامپیوتر پایتخت، طبقه 2، واحد
              220
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-blue-700">{minPrice} تومان</p>
              <p className="text-xs text-white bg-blue-700 px-3 py-1 rounded">
                اطلاعات تماس
              </p>
            </div>
            <p className="text-xs text-slate-500 py-2">
              آخرین تغییر قیمت در فروشگاه: دیروز
            </p>
          </div>
          {/* p2 */}
          <div>
            <div className="flex items-center gap-2 py-3">
              <p className="text-sm font-semibold">آیفونچی</p>
              <span className="text-xs font-extralight text-slate-400">
                تهران
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-600 bg-slate-200 px-2 py-1 rounded-xl">
                فروشگاه حضوری
              </p>
              <span className="text-xs text-slate-600 bg-slate-200 px-2 py-1 rounded-xl">
                گزارش
              </span>
            </div>
            <p className="text-xs py-2">
              خیابان ولیعصر، بلوار میرداماد، مجنمع کامپیوتر پایتخت، طبقه 2، واحد
              220
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-blue-700">{minPrice} تومان</p>
              <p className="text-xs text-white bg-blue-700 px-3 py-1 rounded">
                اطلاعات تماس
              </p>
            </div>
            <p className="text-xs text-slate-500 py-2">
              آخرین تغییر قیمت در فروشگاه: دیروز
            </p>
          </div>
        </div>
        {/* Product Details */}
        <div className="p-3">
          <h3 className="text-sm font-semibold py-1">مشخصات محصول</h3>
          <div className="bg-white px-3 rounded">
            <div className="border-b border-slate-200 py-2">
              <p className="text-xs font-semibold">وزن (گرم)</p>
              <span className="text-xs text-slate-500">240</span>
            </div>
            <div className="py-2">
              <p className="text-xs font-semibold">ابعاد (میلی متر)</p>
              <span className="text-xs text-slate-500">170 * 78 * 7.7</span>
            </div>
            <button className="text-sm text-red-600 w-full mx-auto py-3">
              نمایش تمام مشخصات
            </button>
          </div>
        </div>
        {/* the Chart */}
        <div className="bg-white mx-3 rounded h-fit">
          <Line data={chartData} options={options}></Line>
          <div className="text-red-600 text-sm text-center w-full pt-10 pb-3">لیست تغییرات قیمت</div>
        </div>
      </div>
      <div className="h-20"></div>
      {/* <img src={Object.values(image)[0]! as string} alt="" /> */}
    </div>
  );
};

export default ProductDetails;
