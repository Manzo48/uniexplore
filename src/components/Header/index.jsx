import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { getOneUser } from "../../redux/userReducer";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.token);  // Ensure the path here matches your Redux state structure
  const user = useSelector((state) => state.users.user);    // Ditto
  const id = useSelector((state) => state.users.id);        // Ditto

  useEffect(() => {
    if (token && id) {
      dispatch(getOneUser({id}));
    }
  }, [dispatch, token, id]);

  return (
    <header>
      <Flex style={{ width: "100%" }} align="center" justify="space-between">
        <a href={"/"}>
          <img width="70%" src={logo} alt="Logo" />
        </a>
        <Flex gap="50px">
          <HeaderList children={<UniversitiesIcon />} text="Университеты" />
          <HeaderList children={<RatingIcon />} text="Рейтинг" />
          <HeaderList children={<ContactsIcon />} text="Контакты" />
          <HeaderList children={<AboutUsIcon />} text="О нас" />
        </Flex>
        <Flex className="signin">
          <Avatar size="large" icon={<UserOutlined />} />
          <Link href={token ?`/profile/${id}` : "/login"}>
            {token ? user?.name || "Профиль" : "Войти"} 
          </Link>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
