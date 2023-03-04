import React from "react";

// Logo & Icon
import logo from "../assets/images/torob_logo.svg";
import SearchIcon from "@mui/icons-material/Search";

const Navbar: React.FC = () => {
  return (
    <div>
      <img src={logo} alt="torob" className="mx-auto mt-14 mb-4" />
      <form className="flex items-center justify-center relative px-3 mb-4">
        <i className="absolute right-6">
          <SearchIcon
            fontSize="large"
            className="text-slate-500 rounded-r-sm"
          />
        </i>
        <input
          type="text"
          className="outline-none bg-slate-100 w-full h-9 rounded-sm 
          placeholder:text-slate-500 placeholder:text-md placeholder:pr-14 placeholder:pb-2"
          placeholder="نام کالا را وارد کنید"
        />
      </form>
      <div className="">
        <p className="text-sm text-center text-slate-500 mb-3">بیشترین جستجوی کاربران</p>
        <div className="flex gap-2 px-3 mb-2">
          <span className="bg-fuchsia-900 w-full min-w-fit rounded-lg text-sm px-3 py-1 text-center text-white">کتونی پسرانه</span>
          <span className="bg-fuchsia-800 w-full min-w-fit rounded-lg text-sm px-3 py-1 text-center text-white">دوچرخه 20</span>
          <span className="bg-fuchsia-700 w-full min-w-fit rounded-lg text-sm px-3 py-1 text-center text-white">طلا 18 عیار</span>
        </div>
        <div className="flex gap-2 px-3 mb-2">
          <span className="bg-violet-800 w-full min-w-fit rounded-lg text-sm px-3 py-1 text-center text-white">کاغذ a 4</span>
          <span className="bg-violet-700 w-full min-w-fit rounded-lg text-sm px-3 py-1 text-center text-white">گوشی m 12</span>
          <span className="bg-violet-600 w-full min-w-fit rounded-lg text-sm px-3 py-1 text-center text-white">فرفره های انفجاری</span>
        </div>
        <div className="flex gap-2 px-3">
          <span className="bg-indigo-700 w-full min-w-fit rounded-lg text-sm px-3 py-1 text-center text-white">دوو</span>
          <span className="bg-indigo-600 w-full min-w-fit rounded-lg text-sm px-3 py-1 text-center text-white">پنکه</span>
          <span className="bg-indigo-500 w-full min-w-fit rounded-lg text-sm px-3 py-1 text-center text-white">رینگ خرچنگی</span>
          <span className="bg-indigo-400 w-full min-w-fit rounded-lg text-sm px-3 py-1 text-center text-white">جردن</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
