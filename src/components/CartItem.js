import React from "react";

const CartItem = ({product}) => {
  console.log(product)

  return(
   <div>{product.product_title}</div>
  )
}

export default CartItem;