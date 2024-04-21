import { Flex } from "antd";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneUniversity } from "../../redux/universitiesReducer";
import Slider from "../Slider/Slider";
import "./index.css";

const Frame = () => {
  const { id } = useParams();

  const frame = useSelector((state) => state.data.university);

  const dispatch = useDispatch();

  const filteredFrame = frame?.frame.filter((item) => item.id === Number(id));
  const position = [43.312, 45.6889];

  useEffect(() => {
    dispatch(getOneUniversity(id));
  }, [dispatch, id]);

  return (
    <div>
      {filteredFrame?.map((item, index) => {
        return (
          <Flex key={index}>
            <Slider images={item.carouselElements} />
            <div style={{width: '100%'}}>
              <h1>{item.name}</h1>
              <Flex>Адрес: <h4>{item.address}</h4></Flex>
              <div style={{ height: "100vh", width: "100%" }}>
                <MapContainer
                  center={position}
                  zoom={13}
                  style={{ height: "50%", width: "70%" }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={position}>
                    <Popup>
                      <img width='100%' src={item.image} alt="" />
                      {item.name}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </Flex>
          
        );
      })}
    </div>
  );
};

export default Frame;
