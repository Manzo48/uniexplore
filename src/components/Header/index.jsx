import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex } from "antd";
import Link from "antd/es/typography/Link";
import logo from "../../images/logo.png";
import "./index.css";
import UniversitiesIcon from "../../images/icons/UniversitiesIcon";
import RatingIcon from "../../images/icons/RatingIcon";
import ContactsIcon from "../../images/icons/ContactsIcon";
import AboutUsIcon from "../../images/icons/AboutUsIcon";
import HeaderList from "./HeaderList";

const Header = () => {

  return (
    <header>
      <Flex style={{width: '100%'}} align="center" justify="space-between">
        <a href={"/"}>
          <img width="70%" src={logo} alt="" />
        </a>
        <Flex gap="50px">
          <HeaderList children={<UniversitiesIcon />} text="Университеты" />
          <HeaderList children={<RatingIcon />} text="Рейтинг" />
          <HeaderList children={<ContactsIcon />} text="Контакты" />
          <HeaderList children={<AboutUsIcon />} text="О нас" />
        </Flex>
        <Flex className="signin">
          <Avatar size="large" icon={<UserOutlined />} />
          <Link href="/login">Войти</Link>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
