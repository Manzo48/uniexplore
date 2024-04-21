import { Flex } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DirectionIcon from "../../images/icons/DirectionIcon";
import StudentsIcon from "../../images/icons/StudentsIcon";
import { getOneUniversity } from "../../redux/universitiesReducer";
import Card from "../Card";
import HeaderList from "../Header/HeaderList";
import embleme from "../../images/embleme.png";
import "./index.css";
import CreateDateIcon from "../../images/icons/CreateDateIcon";
import AllStudentsIcon from "../../images/icons/AllStudentsIcon";
import BudgetIcon from "../../images/icons/BudgetIcon";
import BallsIcon from "../../images/icons/BallsIcon";

const University = () => {
  const { id } = useParams();

  const university = useSelector((state) => state.data.university);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUniversity(id));
  }, [dispatch, id]);

  console.log(university);
  return (
    <div className="uni">
      <div className="uni_title">Учебные корпуса в выбранном университете: <br/> <span className="uni_name">{university?.name}</span></div>
      <div className="about_uni">
        <div>
          <img src={embleme} alt="" />
        </div>
        <h1>{university?.name}</h1>
        <p>{university?.description}</p>
        <Flex justify='center' align='center' style={{width: '80%', margin: 'auto', paddingBottom: '80px', paddingTop: '70px'}} gap='80px 130px' wrap="wrap">
          <HeaderList children={<CreateDateIcon />} text='Дата основания' description='07.02.1938г'/>
          <HeaderList children={<AllStudentsIcon />} text='Дата основания' description='50'/>
          <HeaderList children={<BudgetIcon />} text='Дата основания' description='50'/>
          <HeaderList children={<BallsIcon />} text='Дата основания' description='50'/>
          <HeaderList children={<DirectionIcon />} text='Дата основания' description='50'/>
        </Flex>
      </div>
      <Flex
        style={{ marginTop: "70px", width: "90%", margin: "auto" }}
        gap="10px"
        wrap="wrap"
      >
        {university?.frame.map((item) => {
          console.log(item);
          return (
            <Card link="/university/frame/" item={item}>
              <h2>{item.name}</h2>
              <h3>{item.address}</h3>
              <Flex gap="50px">
                <HeaderList children={<StudentsIcon />} text="11.234" />
                <HeaderList children={<DirectionIcon />} text="50" />
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </div>
  );
};

export default University;
