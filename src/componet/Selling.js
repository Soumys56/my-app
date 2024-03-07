import React, { useState } from "react";
import "./Selling.css";
import Cardfour from "./Cardfour";

export const Selling = () => {
  const [sellproduct, setSellproduct] = useState([
    {
      id: "1",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/9926b000d9e06f79.jpg?q=20",
    },
    {
      id: "2",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/3dbceec64ee01bdc.jpg?q=20",
    },
    {
      id: "3",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6f23fc1a646a9c64.jpg?q=20",
    },
    {
      id: "4",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/9926b000d9e06f79.jpg?q=20",
    },
    {
      id: "5",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/3dbceec64ee01bdc.jpg?q=20",
    },
    {
      id: "6",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6f23fc1a646a9c64.jpg?q=20",
    },
    {
      id: "7",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/30527c6a71197cda.jpg?q=20",
    },
    {
      id: "8",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/30527c6a71197cda.jpg?q=20",
    },
    {
      id: "9",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/30527c6a71197cda.jpg?q=20",
    },
  ]);
  return (
    <div className="Selling_conatiner">
      {sellproduct.map((item, id) => {
        return <Cardfour sellproduct={item} />;
      })}
    </div>
  );
};
