import React from "react";
import "./css/main.css";
import { Routes, Route } from "react-router-dom";

// Components
import Search from "./pages/Search";
import Footer from "./components/shared/Footer";
import Category from "./pages/Category";
import MyTorob from "./pages/MyTorob";
import ProductDetails from "./components/ProductDetails";
import DigitalProduct from "./components/DigitalProduct";
import AllProducts from "./components/AllProducts";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/category" element={<Category />} />
        <Route path="/myTorob" element={<MyTorob />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/mobile" element={<DigitalProduct />} />
        <Route path="/digitalProducts" element={<AllProducts />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
