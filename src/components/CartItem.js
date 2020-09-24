import React from "react";

const CartItem = ({product}) => {
  console.log(product)

  return(
    <div className="row">
      <div className="col">{product.product_title}</div>
      <div className="col">{product.product_price} Euro</div>
      <div className="col">{product.quantity}</div>
    </div>
  )
}

export default CartItem;