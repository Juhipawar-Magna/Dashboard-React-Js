import React from "react";
import "./Nav.css";
import Magna from "../../Image/Magna.png";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="Nav__warpper">
      <div className="Logo">
        <img src={Magna} alt="MagnaLogo" height={100} width={300}/>
      </div>
      <NavLink to="/forms">Create a new Items</NavLink>
      <NavLink to="/">Pie Chart</NavLink>
      <NavLink to="/bar">Bar Chart</NavLink>
    </div>
  );
};

export default NavBar;