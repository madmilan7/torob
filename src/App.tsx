import React from "react";
import "./css/main.css";

// Components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AppleProducts from "./components/AppleProducts";

const App: React.FC = () => {  
  return (
    <div>
      <Navbar />
      <Banner />
      <AppleProducts  />
    </div>
  );
};

export default App;
