import React from "react";
import "./style.scss";

export default function HeroImage({ img }) {
  return (
    <div draggable="false"
      className="background-image"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
}
