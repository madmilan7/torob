import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Products
import { apple, samsung, xiaomi } from "../assets/products/products";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

// interface
interface ProductsType {
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

  const [products, setProducts] = useState<ProductsType[]>([
    ...apple,
    ...samsung,
    ...xiaomi,
  ]);
  const [filters, setFilters] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    setProducts([...apple, ...samsung, ...xiaomi]);
  }, [filters]);

  // get selected filters

  const selectedFilter = (e: any) => {
    setFilters(e.target.dataset.id);
  };

  const selectedSort = (e: any) => {
    setSort(e.target.dataset.selectedSort);
  };

  // apply filters
  const applyFilters = () => {
    if (filters === "samsung") {
      const filteredProducts = [...products].filter((product) => {
        return product.title.toLocaleLowerCase().includes("samsung");
      });
      setProducts(filteredProducts);
    } else if (filters === "apple") {
      const filteredProducts = [...products].filter((product) => {
        return product.title.toLocaleLowerCase().includes("apple");
      });
      setProducts(filteredProducts);
    } else if (filters === "xiaomi") {
      const filteredProducts = [...products].filter((product) => {
        return product.title.toLocaleLowerCase().includes("xiaomi");
      });
      setProducts(filteredProducts);
    } else return;
    cancelSelectFilter();
  };

  // apply sorting
  const applySort = () => {
    if (sort === "Ascending") {
      const sortedProducts = [...products].sort((a, b): any => {
        return a.minPrice > b.minPrice ? 1 : -1;
      });
      setProducts(sortedProducts);
    } else if (sort === "Descending") {
      const sortedProducts = [...products].sort((a, b): any => {
        return a.minPrice < b.minPrice ? 1 : -1;
      });
      setProducts(sortedProducts);
    } else return;
    cancelSelectSort();
  };

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

  return (
    <div className="bg-slate-100">
      {/* title */}
      <div className="flex items-center bg-white h-10 px-3 border-b border-slate-100">
        <ArrowForwardIcon onClick={() => navigate(-1)} />
        <h3 className="text-xs text-slate-700 mx-auto">گوشی موبایل</h3>
      </div>
      {/* search box */}
      <form className="flex items-center justify-center bg-white px-3 py-4">
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
      <div className="bg-white">
        <div className="flex items-center justify-between overflow-x-auto gap-2 mx-3 pb-2 no-scrollbar">
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
      {/* selected filter */}
      <div className="flex items-center justify-between py-3 border-b border-slate-200 px-3">
        <div
          className="flex items-center justify-between w-fit gap-1 bg-white px-3 py-1 rounded-2xl
                        border border-slate-200 overflow-x-auto no-scrollbar"
        >
          <p className="text-xs">سامسونگ</p>
          <ClearIcon fontSize="small" className="scale-75" />
        </div>
      </div>
      {/* brands */}
      <div className="py-2 px-3 flex items-center gap-3 overflow-x-auto no-scrollbar">
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
      {/* products */}
      <div className="mx-3 flex items-center justify-between flex-wrap gap-2 pb-2">
        {products?.map((product) => (
          <div key={product.id} className="bg-white rounded px-3 w-40 h-80">
            <img
              src={Object.values(product.image)[0]! as string}
              alt="کلیک کنید"
              className="w-36 mx-auto py-3"
            />
            <p className="text-sm h-14 overflow-hidden text-ellipsis my-5">
              {product.title}
            </p>
            <p className="text-sm">از {product.minPrice}</p>
            <p className="text-xs text-slate-500 mt-1">در 37 فروشگاه</p>
            <div className="flex items-center justify-evenly mt-4 text-slate-400">
              <FavoriteBorderIcon />
              <NotificationsNoneIcon />
            </div>
          </div>
        ))}
      </div>
      {/* Sort */}
      <div id="sort" className="bg-white z-20 w-full h-full fixed top-0 hidden">
        <div className="flex items-center border-b border-slate-100 py-2 px-3">
          <ClearIcon onClick={cancelSelectSort} fontSize="small" />
          <h3 className="mx-auto text-xs">انتخاب مرتب سازی</h3>
        </div>
        <div className="flex flex-col items-start gap-3 px-5 py-3">
          <button
            onClick={selectedSort}
            className="text-sm hover:text-red-600"
            data-selected-sort="Ascending"
          >
            ارزان ترین
          </button>
          <button
            onClick={selectedSort}
            className="text-sm hover:text-red-600"
            data-selected-sort="Descending"
          >
            گران ترین
          </button>
        </div>
        <div
          className="flex items-center justify-between gap-3 py-2 px-3 
              border-t border-slate-100 absolute bottom-0 w-full"
        >
          <button
            onClick={applySort}
            className="text-sm text-white bg-zinc-700 w-full py-1 rounded"
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
            <button
              onClick={selectedFilter}
              data-id="samsung"
              className="flex items-center justify-between hover:bg-slate-200
                                p-1 rounded-sm"
            >
              <span className="text-xs">سامسونگ</span>
              <span className="text-xs">Samsung</span>
            </button>
            <button
              onClick={selectedFilter}
              data-id="xiaomi"
              className="flex items-center justify-between hover:bg-slate-200
                                p-1 rounded-sm"
            >
              <span className="text-xs">شیائومی</span>
              <span className="text-xs">Xiaomi</span>
            </button>
            <button
              onClick={selectedFilter}
              data-id="apple"
              className="flex items-center justify-between hover:bg-slate-200
                                p-1 rounded-sm"
            >
              <span className="text-xs">اپل</span>
              <span className="text-xs">Apple</span>
            </button>
          </div>
        </div>
        <div
          className="flex items-center justify-between gap-3 py-2 px-3 
              border-t border-slate-100 absolute bottom-0 w-full"
        >
          <button
            onClick={applyFilters}
            className="text-sm text-white bg-zinc-700 w-full py-1 rounded"
          >
            اعمال فیلتر
          </button>
          <button className="text-sm text-zinc-700 px-3 py-1 border border-zinc-700 rounded">
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
