import { Flex } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DirectionIcon from "../../images/icons/DirectionIcon";
import StudentsIcon from "../../images/icons/StudentsIcon";
import { getUniversities } from "../../redux/universitiesReducer";
import HeaderList from "../Header/HeaderList";
import Search from "../Header/Search";
import cap from "../../images/cap.png";
import "./index.css";
import SuffixIcon from "../../images/icons/SuffixIcon";
import { useState } from "react";
import Card from "../Card";


const UniversitiesRender = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const universities = useSelector((state) => state.data.universities);

  const [openFilters, setOpenFilters] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUniversities());
  }, [dispatch]);

  const filteredUniversities = searchValue.trim()
    ? universities.filter((item) =>
        item.shortName.toLowerCase().includes(searchValue.toLowerCase())
      )
    : universities;

  const handleOpenFilters = () => {
    setOpenFilters(!openFilters);
  };

  return (
    <div style={{ paddingTop: "84px" }}>
      <div className="title">
        <img src={cap} alt="" />
        <h1>
          Поступи в университет <br /> своей мечты!
        </h1>
        <Search />
        <h3>
          Университеты в вашем регионе: <span>Чеченская Республика</span>
        </h3>
        <div>
          <button onClick={handleOpenFilters}>
            <SuffixIcon /> Фильтры
          </button>
          {openFilters && (
            <Flex gap="35px" className="title_filters">
              <div>Рейтинг</div>
              <div>Студенты</div>
              <div>Направления</div>
            </Flex>
          )}
        </div>
      </div>
      <div className="universities">
        {filteredUniversities.map((item) => (
          <Card link={"university/"} item={item}>
            <h2>{item.shortName}</h2>
            <h3>{item.name}</h3>
            <Flex gap="50px">
              <HeaderList children={<StudentsIcon />} text="11.234" />
              <HeaderList children={<DirectionIcon />} text="50" />
            </Flex>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UniversitiesRender;
