import axios from "axios";
import React, { useContext, useState } from "react";
import { Config } from "./Config";
import { UserContext } from "./Context";

function ProductCard({ item }) {
  const cart = useContext(UserContext);
  const CartItem = cart.CartItems;
  const setcart = cart.setCartItems;
  const Add = async (_id) => {
    let product = await axios.get(`${Config.api}/Product/${_id}`);
    console.log(product.data);
    let addproduct = product.data;
    CartItem.push(addproduct);
    setcart([...CartItem]);
  };
  return (
    <div className="col-lg-4 mt-4">
      <div className="card card-prod" style={{ width: "18em" }}>
        <img
          className="card-img"
          src={item.image}
          alt="Product image"
          width={"80px"}
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">Name : {item.name}</h5>
          <p className="card-text">Price/Hr : {item.price}</p>
          <button
            className="btn btn-primary"
            disabled={CartItem.some((obj) => obj._id == item._id)}
            onClick={() => {
              Add(item._id);
            }}
          >
            {CartItem.some((obj) => obj._id == item._id)
              ? "Added to card"
              : "add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
