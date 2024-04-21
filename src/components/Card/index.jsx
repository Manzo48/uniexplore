import React from "react";
import { Link } from "react-router-dom";

const Card = ({item, children, link}) => {
  return (
    <Link key={item.id} className="uni_link" to={`${link}${item.id}`}>
      <div className="uni_wrapper">
        <img src={item.image} alt={item.shortName} />
        <div className="uni_description">
          {children}
        </div>
      </div>
    </Link>
  );
};

export default Card;
