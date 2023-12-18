import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      Made with By{" "}
      <a
        className="footer__link"
        href="#!"
        target="_blank"
        style={{ color: "#fdfdfd" }}
        rel="noreferrer"
      >
        Dimple | Christian
      </a>
    </footer>
  );
};

export default Footer;
