import React from "react";

// Components
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AppleProducts from "../components/AppleProducts";
import Banner2 from "../components/Banner2";
import SamProducts from "../components/SamProducts";
import Banner3 from "../components/Banner3";
import XiaomiProducts from "../components/XiaomiProducts";
import Banner4 from "../components/Banner4";
import Banner5 from "../components/Banner5";
import Banner6 from "../components/Banner6";
import Banner7 from "../components/Banner7";
import SearchDesktop from "../components/shared/SearchDesktop";

const Search = () => {
  return (
    <div>
      {/* mobile version */}
      <div className="md:hidden mb-12 md:m-0">
        <Navbar />
        <Banner />
        <AppleProducts />
        <Banner2 />
        <SamProducts />
        <Banner3 />
        <XiaomiProducts />
        <Banner4 />
        <AppleProducts />
        <Banner5 />
        <SamProducts />
        <Banner6 />
        <XiaomiProducts />
        <Banner7 />
      </div>
      {/* desktop version */}
      <div>
        <SearchDesktop />
      </div>
    </div>
  );
};

export default Search;
