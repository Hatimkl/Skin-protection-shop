import React from "react";
import Logo from "../../assets/logo.png";
import LocationMarkerIcon from "@heroicons/react/outline";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
          <span>amazon</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
