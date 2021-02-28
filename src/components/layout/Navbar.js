import React from "react";
import "./navbar.css"
import { Link, NavLink } from "react-router-dom";
import image from './image.png';


const Navbar = () => {
  return (
    <nav>
    <ul class="nav-list">
      <li class="nav-item">
        <Link href="#" exact to="/" ><img className="img" src={image}/></Link>
      </li>
      <li class="nav-item">
        <NavLink href="#" exact to="/" >Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink href="#" exact to="/about">About</NavLink>
      </li>   
      <li class="nav-item">
        <NavLink class="btn" to="/users/add">Add Job</NavLink>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;
