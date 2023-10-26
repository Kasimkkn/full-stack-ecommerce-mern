import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to='/'><span>HOME</span> </NavLink>
      <NavLink to='/products'><span>PRODUCTS</span> </NavLink>
      <NavLink to='/cart'><span>CART</span> </NavLink>
      <NavLink to='/account'><span>PROFILE</span> </NavLink>
    </nav>
  )
}

export default Navbar
