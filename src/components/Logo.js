import React from "react";
import { NavLink } from "react-router-dom";
import kasaLogo from "../assets/img/logo_salmon.png";

const Logo = () => {
  return (
    <div className="logo_contain">
      <NavLink to="/">
        <img src={kasaLogo} alt="Kasa Logo" className="logo" />
      </NavLink>
    </div>
  );
};

export default Logo;
