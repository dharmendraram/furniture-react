import React from "react";
import Footer_top from "./Footer_top";
import Footer_buttom from "./Footer_buttom";

const Footer = () => {
  return (
    <>
      <footer className=" py-2">
      <Footer_top/>
      <hr />
      <Footer_buttom/>
      </footer>
    </>
  );
};

export default Footer;
