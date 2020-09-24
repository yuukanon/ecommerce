import React from "react";
import { NavLink } from 'react-router-dom';



const Navbar = ({totalPrice}) => {
  return (
    <div className="navbar">
      <ul>
        <div className="navOptions">
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/cart'><li>Cart</li></NavLink>
        </div>
        <div className="navPrice">
          <li>Total Price: {totalPrice} Euro</li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;