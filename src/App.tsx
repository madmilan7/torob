import React from "react";
import "./css/main.css";

// Components
import Search from "./pages/Search";
import Footer from "./components/shared/Footer";
import Category from "./pages/Category";

const App: React.FC = () => {  
  return (
    <div>
      {/* <Search /> */}
      <Category />
      <Footer />
    </div>
  );
};

export default App;
