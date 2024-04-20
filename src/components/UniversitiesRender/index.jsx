import { Card } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUniversities } from "../../redux/universitiesReducer";
const UniversitiesRender = () => {
  const universities = useSelector((state) => state.data.universities);
  console.log(universities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUniversities());
  }, [dispatch]);

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", width: '90%', margin: 'auto' }}>
      {universities.map((item) => {
        return (
          <Link style={{width: '600px', paddingTop: '50px'}} to={`university/${item.id}`}>
            <Card>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <img
                  width='100%'
                  height='310px'
                  style={{objectFit: 'contain'}}
                  src={item.image}
                  alt=""
                />
                {item.name}
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default UniversitiesRender;
