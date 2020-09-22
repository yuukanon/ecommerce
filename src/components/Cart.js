import React from "react";
import CartItem from "./CartItem";

const Cart = ({cartArray}) => {
  return(
    <div>
      {cartArray.map(cartItem => <CartItem product={cartItem} />)}
    </div>
  )
}

export default Cart;