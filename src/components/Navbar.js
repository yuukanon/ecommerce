import React from "react";
import { Link } from 'react-router-dom';



const Navbar = ({totalPrice}) => {
  return (
    <div className="navbar">
      <ul>
        <div className="navOptions">
          <Link to='/'><li>Home</li></Link>
          <Link to='/cart'><li>Cart</li></Link>
        </div>
        <div className="navPrice">
          <li>Total Price: 0{totalPrice}</li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;