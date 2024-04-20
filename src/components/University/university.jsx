import { Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneUniversity } from "../../redux/universitiesReducer";

const University = () => {
  const { id } = useParams();

  const university = useSelector((state) => state.data.university);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUniversity(id));
  }, [dispatch]);

  console.log(university);
  return (
    <Card
      title={university?.name}
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      {university?.name}
    </Card>
  );
};

export default University;
