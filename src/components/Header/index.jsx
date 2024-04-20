import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Input } from "antd";
import Link from "antd/es/typography/Link";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/searchReducer";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      dispatch(setSearchValue(e.target.value));
    }
  };

  return (
    <header style={{ padding: '10px', borderBottom: '1px solid gray' }}>
      <Flex align='center' justify="space-between">
        <Link href={'/'}>LOGO</Link>
        <div style={{ width: '40%' }}>
          <Input
            placeholder="input search text"
            allowClear
            value={inputValue}
            onChange={handleChangeInputValue}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </div>
        <Flex>
          <Avatar size="large" icon={<UserOutlined />} />
          <Link href="/login">Войти</Link>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
