import React from "react";
import "./footer.css";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return <div className="footer">Sergio Sánchez, {year}</div>;
}

export default Footer;
