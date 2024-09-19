import React from "react";
import "./Activity.css";
import Button from "../button/Button";
import { customers } from "../../data";

function Activity() {
  return (
    <div className="activity">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <Button />
      </div>

      <div className="customers grid">
        {customers.map((customer, id) => {
          return (
            <div className="customer flex">
              <img src={customer.image} alt="" />
              <div className="customer-details">
                <span className="name">{customer.title}</span>
                <small>{customer.content}</small>
              </div>
              <div className="duration">{customer.duration}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Activity;
