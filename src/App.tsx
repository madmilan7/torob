import React from "react";
import "./css/main.css";

// Components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default App;
