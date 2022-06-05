import React from "react";
import "./App.css";
import ProductsList from "./Components/ProductsList/ProductsList";
import ProductsProvider from "./Components/Provider/ProductsProvider";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
    <div className="Container">
      <div className="styledContainer">
        <ProductsProvider>
          <Navbar />
          <ProductsList />
        </ProductsProvider>
      </div>
    </div>
  );
};

export default App;
