import { Card } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUniversities } from "../../redux/universitiesReducer";
import "./index.css";

const UniversitiesRender = () => {
  const universities = useSelector((state) => state.data.universities);
  console.log(universities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUniversities());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        width: "90%",
        margin: "auto",
        paddingTop: "50px",
      }}
    >
      {universities.map((item) => {
        return (
          <Link className="uni_link" to={`university/${item.id}`}>
            <div className="uni_wrapper">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "410px",
                }}
              >
                <div className="uni_description">
                  <img
                    height="310px"
                    width='100%'
                    style={{ objectFit: "cover" }}
                    src={item.image}
                    alt=""
                  />
                  <div>
                    <h2>{item.shortName}</h2>
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default UniversitiesRender;
