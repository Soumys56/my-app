import React, { useState } from "react";
import Card from "./Card";
import "./Main.css";

const Main = () => {
  const [item, setItem] = useState([
    {
      id: "1",
      image:
        "	https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
      name: "Grocery",
    },
    {
      id: "3",
      image:
        "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
      name: "Mobiles",
    },
    {
      id: "4",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100",
      name: "Fashion",
    },
    {
      id: "5",
      image:
        "https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100",
      name: "Electronic",
    },
    {
      id: "6",
      image:
        "https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100",
      name: "Home and Furniture",
    },
    {
      id: "7",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100",
      name: "Appliances",
    },
    {
      id: "8",
      image:
        "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100",
      name: "Travel",
    },
    {
      id: "9",
      image:
        "https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100",
      name: "Beauty,toys and more",
    },
    {
      id: "10",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100",
      name: "Two Wheelers",
    },
  ]);

  return (
    <div className="main_container">
      {item.map((item, id) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default Main;
