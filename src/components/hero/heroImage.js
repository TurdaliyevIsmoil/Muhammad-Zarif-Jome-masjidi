import React from "react";
import "./style.scss";

export default function HeroImage({ img }) {
  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
}
