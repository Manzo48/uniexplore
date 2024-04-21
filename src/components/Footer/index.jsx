import { Flex } from "antd";
import React from "react";
import FooterLogoIcon from "../../images/icons/FooterLogoIcon";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <Flex align='center' justify='center'>
        <FooterLogoIcon />
      </Flex>
    </div>
  );
};

export default Footer;
