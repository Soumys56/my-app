import React from "react";
import "./Cardtwo.css";

const Cardtwo = ({ item }) => {
  return (
    <div className="cardtwo_container">
      <img src={item.image} />
    </div>
  );
};

export default Cardtwo;
