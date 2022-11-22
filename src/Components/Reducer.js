import React from "react";

function Cart({removeFromCart,cartItems,setCartItems}) {
  const handleDecrement = (card_id) => {
    setCartItems(cartItems =>
      cartItems.map((item)=>
        card_id === item.id ? {...item,quantity:item.quantity - (item.quantity > 1 ? 1 : 0)} : item
      )
      );
  }
  const handleIncrement= (card_id)=>{
    setCartItems(cartItems =>
      cartItems.map((item)=>
        card_id === item.id ? {...item,quantity:item.quantity + (item.quantity < 5 ? 1 : 0)} : item
      )
      );
  }

  return (
    <>
      {
      cartItems.length === 0 ? (
        <div> No items in cart </div>
      ) : (
        <>
          <ol className="list-group list-group-numbered">
            {cartItems.map((items,index) => {
              return (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{items.name}</div>
                    Rs.{items.Price*items.quantity}
                  </div>
                  <div className="ms-2 me-auto">
             <div className="input-group ms-2">
             <button onClick={()=>handleDecrement(items.id)} className="input-group-text" >-</button>
         
             <div className="form-control text-center">{items.quantity}</div>
          <button onClick={()=>handleIncrement(items.id)}  className="input-group-text" >+</button>
           </div>
                  </div>
                  <button
                    onClick={() => {
                      removeFromCart(items);
                    }}
                    className="badge bg-primary rounded-pill"
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ol>
          <h3>
            Total: Rs.
            {cartItems.reduce((prev, curr) => {
              return (prev = prev + curr.Price*curr.quantity);
            }, 0)}
          </h3>
        </>
      )}
    </>
  );
}

export default Cart;