import React from "react";
import "./css/main.css";

// Components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AppleProducts from "./components/AppleProducts";
import Banner2 from "./components/Banner2";
import SamProducts from "./components/SamProducts";

const App: React.FC = () => {  
  return (
    <div>
      <Navbar />
      <Banner />
      <AppleProducts  />
      <Banner2 />
      <SamProducts />
    </div>
  );
};

export default App;
