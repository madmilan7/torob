import React from "react";
import { Link } from "react-router-dom";

// Icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

// interface
interface ProductsProps {
  productData: {
    id: number;
    image: string | any;
    title: string;
    storage: number;
    minPrice: number;
    maxPrice: number;
  };
}

const AppleProduct: React.FC<ProductsProps> = ({ productData }) => {
  return (
    <div className="flex flex-col bg-white grow-0 shrink-0 basis-36 h-80 mt-3 rounded-lg">
      <Link to={`/${productData.id}`}><img src={Object.values(productData.image)[0]! as string} alt="iphone" className="w-36 mx-auto py-4" /></Link>
      <h3 className="text-sm h-14 mb-10 overflow-hidden px-4">{productData.title}</h3>
      <p className="text-sm pr-4"> از {productData.minPrice} تومان</p>
      <p className="text-sm text-slate-500 mt-1 pr-4">در 37 فروشگاه</p>
      <div className="flex items-center justify-evenly mt-2 text-slate-400">
        <FavoriteBorderIcon />
        <NotificationsNoneIcon />
      </div>
    </div>
  );
};

export default AppleProduct;
