import React from "react";
import Button from "../button/Button.jsx";
import "./Products.css";
import { products } from "../../data/index.js";
import { RiH3 } from "react-icons/ri";

function Products() {
  return (
    <>
      <div className="products-header flex">
        <h1>My Products</h1>
        <Button />
      </div>

      <div className="products-items flex">
        {products.map((product, id) => {
          return (
            <div key={id} className="product-item">
              <span className="icon">{product.icon}</span>
              <img src={product.imageSrc} alt="" />
              <h3>{product.title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
