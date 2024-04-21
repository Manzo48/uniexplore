import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../redux/userReducer";

const Header = () => {
  const token = useSelector((state) => state.users.token);
  const id = useSelector((state) => state?.users?.id);
  const user = useSelector((state) => state.users.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getOneUser(id));
    }
  }, [dispatch, id]);

  console.log(user);

  return (
    <header>
      <Flex style={{ width: "100%" }} align="center" justify="space-between">
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
          <Link href={token ? "/profile" : "/login"}>
            {token ? "профиль" : "войти"}
          </Link>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
