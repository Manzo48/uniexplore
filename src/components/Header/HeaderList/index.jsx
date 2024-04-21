import { Flex } from "antd";
import React from "react";
import "./index.css";

const HeaderList = ({ children, text, description }) => {
  return (
    <Flex className="list_element" align="center" gap="13px">
      <div style={{display: 'flex', alignItems:"center", gap: '10px'}}>
        {children}
        {text}
      </div>
      <div style={{color: 'rgba(0, 165, 7, 1)'}}>{description}</div>
    </Flex>
  );
};

export default HeaderList;
