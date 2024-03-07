import React, { useState } from "react";
import Cardthree from "./Cardthree";
import "./Deal.css";
const Deals = () => {
  const [Deals, setDeals] = useState([
    {
      id: "1",
      image:
        "https://rukminim2.flixcart.com/image/200/200/xif0q/shoe/7/i/x/-original-imagmh3muw48qn62.jpeg?q=70",
      des: "New Balance,Skechers",
      rupess: "Min. 50-80%off",
    },
    {
      id: "2",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/f/f/w/1-1530152-hugo-men-original-imagnyvhrzthr4kg.jpeg?q=70",
      des: "New Balance,Skechers",
      rupess: "Min. 50-80%off",
    },
    {
      id: "3",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/d/k/v/free-2556s4001-samah-unstitched-original-imaggbwbyprfux8r.jpeg?q=70",
      des: "New Balance,Skechers",
      rupess: "Min. 50-80%off",
    },
    {
      id: "4",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kvpklu80/shirt/2/r/x/44-14641384-roadster-original-imag8jmv8pzjsakj.jpeg?q=70",
      des: "New Balance,Skechers",
      rupess: "Min. 50-80%off",
    },
    {
      id: "5",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kvpklu80/shirt/2/r/x/44-14641384-roadster-original-imag8jmv8pzjsakj.jpeg?q=70",
      des: "New Balance,Skechers",
      rupess: "Min. 50-80%off",
    },
    {
      id: "5",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kvpklu80/shirt/2/r/x/44-14641384-roadster-original-imag8jmv8pzjsakj.jpeg?q=70",
      des: "New Balance,Skechers",
      rupess: "Min. 50-80%off",
    },
    {
      id: "5",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kvpklu80/shirt/2/r/x/44-14641384-roadster-original-imag8jmv8pzjsakj.jpeg?q=70",
      des: "New Balance,Skechers",
      rupess: "Min. 50-80%off",
    },
  ]);
  return (
    <div className="Deals_Container">
      <div className="heading">
        <h3>Top Deals</h3>
      </div>
      <div className="Deals_conatiner_item">
        {Deals.map((item, id) => {
          return <Cardthree item={item} />;
        })}
      </div>
    </div>
  );
};

export default Deals;
