import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  console.log(inputValue);

  return (
    <header style={{padding: '10px', borderBottom: '1px solid gray'}}>
      <Flex align='center' justify="space-between">
        <h2>LOGO</h2>
        <div style={{width: '40%'}}>
          <Search
            placeholder="input search text"
            allowClear
            value={inputValue}
            onChange={(e) => handleChangeInputValue(e)}
          />
        </div>
        <Avatar size="large" icon={<UserOutlined />} />
      </Flex>
    </header>
  );
};

export default Header;
