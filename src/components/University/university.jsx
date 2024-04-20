import { Flex } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneUniversity } from "../../redux/universitiesReducer";
import "./index.css";

const University = () => {
  const { id } = useParams();

  const university = useSelector((state) => state.data.university);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUniversity(id));
  }, [dispatch, id]);

  console.log(university);
  return (
    <div>
      <h1>Корпуса</h1>
      <Flex style={{marginTop: '70px', width: '90%', margin: 'auto'}} gap='10px' wrap="wrap">
      {university?.frame.map((item) => {
        console.log(item);
        return (
          <div className="frame">
            <Link to={`/university/frame/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <div>
                <img style={{objectFit: 'contain'}} height="280px" width="100%" src={item?.image} alt="" />
              </div>
              <h2>{item.name}</h2>
              <h3>{item?.address}</h3>
            </Link>
          </div>
        );
      })}
    </Flex>
    </div>
  );
};

export default University;
