import { Flex } from "antd";
import React from "react";
import './index.css'

const HeaderList = ({ children, text }) => {
  return (
    <Flex className="list_element" align="center" gap="13px">
      {children}{text}
    </Flex>
  );
};

export default HeaderList;
