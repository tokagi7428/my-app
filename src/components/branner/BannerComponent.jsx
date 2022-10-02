import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import data from "../../data.js";
import "./banner.css";
function BannerComponent() {
  const [goods, setGoods] = useState(data.goods);
  return (
    <div className="banner">
      <Carousel variant="light">
        {goods.map((item, i) => (
          <Carousel.Item key={i} style={{ maxHeight: "600px" }}>
            <img className="d-block w-100 img" src={item.img} alt={item.name} />
            <Carousel.Caption>
              <h5>{item.name}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default BannerComponent;
