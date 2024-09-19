import React from "react";
import { sidebarItems } from "../../data/index.js";
import HelpCenter from "../help center/HelpCenter.jsx";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar grid">
      <div className="logo flex">
        <h2>Dashboard</h2>
      </div>

      <div>
        <ul className="menu-items grid">
          {sidebarItems.map((item, id) => {
            return (
              <li key={id} className="item">
                <a href="/#" className="link flex">
                  <span className="icon">{item.icon}</span>
                  <span className="text">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <HelpCenter />
    </div>
  );
}

export default Sidebar;
