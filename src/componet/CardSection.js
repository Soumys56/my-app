import React, { useState } from "react";
import "./Cardsection.css";
import Cardtwo from "./Cardtwo";
const CardSection = () => {
  const [image, setImage] = useState([
    {
      id: "1",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20",
    },
    {
      id: "2",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/22e305bf45e2e1a2.jpeg?q=20",
    },
    {
      id: "3",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c3146ff3077e7744.jpg?q=20",
    },
    {
      id: "4",
      image:
        "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    },
  ]);
  return (
    <div className="cardSection">
      {image.map((item, id) => {
        return <Cardtwo item={item} />;
      })}
    </div>
  );
};

export default CardSection;
