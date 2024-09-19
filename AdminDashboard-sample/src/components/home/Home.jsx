import React from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import Main from "../main/Main";
import Products from "../products/Products";
import Sellers from "../sellers/Sellers";
import Activity from "../activity/Activity";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Main />
      <div className="bottom flex">
        <div className="listing-section">
          <Products />
          <Sellers />
        </div>
        <Activity />
      </div>
    </div>
  );
}

export default Home;
