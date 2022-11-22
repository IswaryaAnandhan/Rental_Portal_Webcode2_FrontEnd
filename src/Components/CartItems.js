import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useContext, useState } from "react";
import { UserContext } from "./Context";
import { Config } from './Config';
import Calendar from "./Calendar";


function CartItems() {
  const cartitems = useContext(UserContext);
  let a = cartitems.CartItems;



  let addItems = (id) => {
    console.log(id);
    let index = a.findIndex((cart) => cart._id == id);
    console.log(index);
    if (a[index].quantity != 5) {
      a[index].quantity += 1;
    }
    cartitems.setCartItems([...a]);
  };
  let removeItems = (id) => {
    console.log(id);
    let index = a.findIndex((cart) => cart._id == id);
    console.log(index);
    if (a[index].quantity != 0) {
      a[index].quantity = a[index].quantity - 1;
    }
    cartitems.setCartItems([...a]);
  };
  console.log(cartitems);

  var total = cartitems.CartItems.reduce((acc, curr) => {
    return (acc = acc + curr.price * curr.quantity *curr.hours);
  }, 0);
  

  const [amount,setAmount]=useState();

  const finalOrder=(e)=>{
    
    setAmount(total);
    console.log(amount);
    e.preventDefault();
    if(total==""){alert("please add items to cart")}
    else{
      var options = {
        key :"rzp_test_LclmW435wRbISo",
        key_secret:"USe8Ksd02FiuTSx8FDZ10vVY",
        amount: total *100,
        currency: "INR",
        name:"webcode",
        description:"testing purpose",
        handler : function(response){
          alert(response.razorpay_payment_id)
        },
        prefill:{
          name:"manivasagam",
          email:"s.kishore123.64@gmail.com",
          contact:"9566991210"
        },
        notes:{
          address:"Razor Corporate office"
        },
        theme : {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div className="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">price</th>
            <th scope="col">days</th>
            <th scope="col">Total Hours</th>
            <th scope="col">quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartitems.CartItems.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <Calendar id={item._id} ></Calendar>
                </td>
                <td>{item.hours}</td>
                <td>
                  <button
                    className="me-3 btn btn-warning"
                    onClick={() => {
                      addItems(item._id);
                    }}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="ml-3 btn btn-warning"
                    onClick={() => {
                      removeItems(item._id);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{item.price * item.quantity*item.hours}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3  >Total Rs = {total}</h3>
      <button onClick={finalOrder} className="btn btn-warning">Place Order</button>
    </div>
  );
}

export default CartItems;