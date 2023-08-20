import React from "react";
import { NavLink } from "react-router-dom";
import logoBlanc from "../assets/img/logo_white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to="/">
        <img src={logoBlanc} alt="Logo Kasa" className="logo-footer"></img>
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
