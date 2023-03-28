import React from "react";
import "./css/main.css";

// Components
import Search from "./pages/Search";
import Footer from "./components/shared/Footer";
import Category from "./pages/Category";
import MyTorob from "./pages/MyTorob";

const App: React.FC = () => {  
  return (
    <div>
      {/* <Search /> */}
      {/* <Category /> */}
      <MyTorob />
      <Footer />
    </div>
  );
};

export default App;
