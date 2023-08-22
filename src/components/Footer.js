import React from "react";
import { NavLink } from "react-router-dom";
import logoWhite from "../assets/img/logo_white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to="/">
        <img src={logoWhite} alt="Logo Kasa" className="footer_logo"></img>
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
