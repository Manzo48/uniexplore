import { Flex } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneUniversity } from "../../redux/universitiesReducer";
import Slider from "../Slider/Slider";

const Frame = () => {
  const { id } = useParams();

  const frame = useSelector((state) => state.data.university);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUniversity(id));
  }, [dispatch, id]);

  const filteredFrame = frame?.frame.filter((item) => item.id === Number(id));

  return (
    <Flex>
      {filteredFrame?.map((item, index) => {
        return (
          <Slider key={index} images={item.carouselElements} />
        );
      })}
      <div>
        <h1>{filteredFrame[0].name}</h1>
      </div>
    </Flex>
  );
};

export default Frame;
