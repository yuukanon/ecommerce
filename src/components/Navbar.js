import React from "react";


const Navbar = ({totalPrice}) => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Cart</li>
        <li>Total Price: {totalPrice}</li>
      </ul>
    </div>
  )
}

export default Navbar;