import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <div className="flex items-center justify-evenly sticky bottom-0 bg-white h-12 ">
      <Link to="/" className="flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#64748b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`feather feather-search w-6 ${
            location.pathname === "/" && "stroke-red-500"
          }`}
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <p
          className={`text-sm scale-75 ${
            location.pathname === "/" ? "text-red-500" : "text-slate-500"
          }`}
        >
          جستجو
        </p>
      </Link>
      <Link
        to="/category"
        className="flex flex-col items-center justify-center pt-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#64748b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`feather feather-grid w-5 ${
            location.pathname === "/category" && "stroke-red-500"
          }`}
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>

        <p
          className={`text-sm scale-75 ${
            location.pathname === "/category"
              ? "text-red-500"
              : "text-slate-500"
          }`}
        >
          دسته بندی
        </p>
      </Link>
      <Link to="/" className="flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#64748b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-tag w-5"
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7" y2="7"></line>
        </svg>

        <p className="text-sm scale-75 text-slate-500">پیشنهاد ویژه</p>
      </Link>
      <Link to="/myTorob" className="flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#64748b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`feather feather-user w-5 ${
            location.pathname === "/myTorob" && "stroke-red-500"
          }`}
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <p
          className={`text-sm scale-75 ${
            location.pathname === "/myTorob" ? "text-red-500" : "text-slate-500"
          }`}
        >
          ترب من
        </p>
      </Link>
    </div>
  );
};

export default Footer;
