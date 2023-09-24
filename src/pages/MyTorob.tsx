import React, { useState } from "react";

// Icons
import torob from "../assets/images/torob_logo.svg";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyTorob: React.FC = () => {
  const [drop, setDrop] = useState(false);

  const moreDetail = (e: any) => {
    const el1 = document.getElementById("details-1");
    const el2 = document.getElementById("details-2");
    if (drop && e.target.dataset.id === "1") {
      el1?.classList.add("hidden");
    } else if (drop && e.target.dataset.id === "2") {
      el2?.classList.add("hidden");
    } else if (!drop && e.target.dataset.id === "1") {
      el1?.classList.remove("hidden");
    } else if (!drop && e.target.dataset.id === "2") {
      el2?.classList.remove("hidden");
    }
    setDrop((prevState: boolean) => !prevState);
  };

  return (
    <div className="bg-slate-100 h-screen pb-4">
      <header className="flex flex-col items-center gap-4 py-6 border-b-2 border-slate-200 bg-white">
        <img src={torob} alt="ترب" className="w-8" />
        <button className="text-sm text-white bg-red-600 px-14 py-1 rounded">
          ورود / ثبت نام
        </button>
      </header>
      {/* menu */}
      <ul className="py-4 border-b border-slate-200 bg-white">
        <div className="mb-3 mr-4">
          <li
            className="text-sm font-bold mb-3"
            data-id="1"
            onClick={moreDetail}
          >
            <ChatBubbleOutlineIcon fontSize="small" className="ml-3" />
            پیگیری سفارش
            <ExpandMoreIcon fontSize="small" />
          </li>
          <div className="mr-10 mb-4 hidden" id="details-1">
            <p className="text-sm text-slate-700 pb-3">
              جستجوی فروشگاه و ثبت پیگیری
            </p>
            <p className="text-sm text-slate-700 pb-3">
              ادامه گفتگو با فروشگاه
            </p>
            <p className="text-sm text-slate-700">راهنما</p>
          </div>
        </div>
        <div className="flex gap-2 mb-3 mr-4 font-bold">
          <NotificationsNoneIcon />
          <li className="text-sm font-bold">تغییرات قیمت</li>
        </div>
        <div className="flex gap-2 mb-3 mr-4 font-bold">
          <FavoriteBorderIcon />
          <li className="text-sm font-bold">محبوب ها</li>
        </div>
        <div className="flex gap-2 mr-4 font-bold">
          <AccessTimeIcon fontSize="small" />
          <li className="text-sm font-bold">مشاهدات اخیر</li>
        </div>
      </ul>
      {/*  */}
      <div className="py-4 flex flex-col gap-3 border-b border-slate-200 bg-white">
        <p className="text-sm text-slate-700 mr-5">لیست فروشگاه های ترب</p>
        <p className="text-sm text-slate-700 mr-5">ثبت نام فروشگاه</p>
        <p className="text-sm text-slate-700 mr-5">پنل فروشگاه</p>
      </div>
      {/*  */}
      <div className="py-4 flex flex-col gap-3 border-b border-slate-200 bg-white">
        <div className="">
          <p
            className="text-sm text-slate-700 mr-5"
            data-id="2"
            onClick={moreDetail}
          >
            راهنمایی و شرایط
            <ExpandMoreIcon fontSize="small" className="" />
          </p>
          <div className="mr-8 my-3 hidden" id="details-2">
            <p className="text-sm text-slate-700 pb-3">
              جستجوی فروشگاه و ثبت پیگیری
            </p>
            <p className="text-sm text-slate-700 pb-3">
              ادامه گفتگو با فروشگاه
            </p>
            <p className="text-sm text-slate-700">راهنما</p>
          </div>
        </div>
        <p className="text-sm text-slate-700 mr-5">تماس با ما</p>
        <p className="text-sm text-slate-700 mr-5">درباره ترب</p>
      </div>
      <div className="h-4 bg-white"></div>
    </div>
  );
};

export default MyTorob;
