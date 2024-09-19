import React from "react";
import "./Main.css";
import { BsArrowRightShort } from "react-icons/bs";
import HelpCenter from "../help center/HelpCenter";
import banner from "../../assets/banner.jpg";

function Main() {
  return (
    <div className="main-container flex">
      <div className="banner flex">
        <h1>AdminDashboard by SalaiLunLyanPon.</h1>
        <p>This is testing and studying the react for mama Hsu.</p>
        <div className="buttons">
          <button className="btn">Exploer more</button>
          <button className="btn transparent">Top sellers</button>
        </div>
        <div className="banner-image">
          <img src={banner} alt="" />
        </div>
      </div>

      <div className="main-content flex">
        <div className="stat flex">
          <div className="stat-text">
            <h1>My Stat</h1>
            <div className="flex">
              <span>
                Today <br /> <small>5 Orders</small>
              </span>
              <span>
                This Month <br /> <small>135 Orders</small>
              </span>
            </div>
            <span className="flex link">
              Go to my orders <BsArrowRightShort className="icon" />
            </span>
          </div>
        </div>
        <HelpCenter />
      </div>
    </div>
  );
}

export default Main;
