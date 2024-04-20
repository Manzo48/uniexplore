import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUniversities } from "../../redux/universitiesReducer";
import "./index.css";

const UniversitiesRender = () => {
  const searchValue = useSelector(state => state.search.searchValue); // Исправлено
  const universities = useSelector(state => state.data.universities); // Предполагаем, что universities находятся здесь
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUniversities());
  }, [dispatch]);

  const filteredUniversities = searchValue.trim() ? universities.filter(item => item.shortName.toLowerCase().includes(searchValue.toLowerCase())) : universities;

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
      {filteredUniversities.map((item) => (
        <Link key={item.id} className="uni_link" to={`university/${item.id}`}>
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
                  alt={item.shortName}
                />
                <div>
                  <h2>{item.shortName}</h2>
                  <h3>{item.name}</h3>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UniversitiesRender