import React, { useContext, useState } from "react";
import { UserContext } from "./Context";
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
  let removeFromCart = (id) =>{
    const indexVal= a.findIndex(obj => obj._id === id);
    a.splice(indexVal,1);
    cartitems.setCartItems([...a])
   }
  var total = cartitems.CartItems.reduce((acc, curr) => {
    return (acc = acc + curr.price * curr.quantity * curr.hours);
  }, 0);

  const [amount, setAmount] = useState();

  const finalOrder = (e) => {
    setAmount(total);
    console.log(amount);
    e.preventDefault();
    if (total == "") {
      alert("please add items to cart");
    } else {
      var options = {
        key: "rzp_test_LclmW435wRbISo",
        key_secret: "USe8Ksd02FiuTSx8FDZ10vVY",
        amount: total * 100,
        currency: "INR",
        name: "Equipment Rental Portal",
        description: "testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Anandhan Iswarya",
          email: "aishwariyaanandhan@gmail.com",
          contact: "8778218366",
        },
        notes: {
          address: "Razor Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Days</th>
            <th scope="col">Total Hours</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {cartitems.CartItems.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <Calendar id={item._id}></Calendar>
                </td>
                <td>{item.hours}</td>
                <td>
                  <div className="ms-2 me-auto">
                    <div className="input-group ms-2">
                      <button
                        className="input-group-text"
                        onClick={() => {
                          removeItems(item._id);
                        }}
                      >
                        -
                      </button>
                  
                    <div className="form-control text-center">
                      {item.quantity}
                    </div>
                   
                      <button
                        className="input-group-text"
                        onClick={() => {
                          addItems(item._id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td>{item.price * item.quantity * item.hours}</td>
                <button
                    onClick={() => {
                      removeFromCart(item);
                    }}
                    className="badge bg-primary rounded-pill mt-5"
                  >
                    X
                  </button>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Total Amount:{total}</h3>
      <button onClick={finalOrder} className="btn btn-primary sm-1">
        Place Order
      </button>
    </div>
  );
}

export default CartItems;
