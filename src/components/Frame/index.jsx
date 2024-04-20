import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneUniversity } from "../../redux/universitiesReducer";

const Frame = () => {
  const { id } = useParams();

  const frame = useSelector((state) => state.data.university);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUniversity(id));
  }, [dispatch, id]);

  const filteredFrame = frame?.frame.filter((item) => item.id === Number(id));

  return (
    <div>
      {filteredFrame?.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};

export default Frame;
