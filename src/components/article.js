import React, { useEffect } from "react";

export default function Article({ data, woman = false }) {
  let countOfDesc = window.screen.width <= 480 ? 200 : window.screen.width <= 768 ? 90 : window.screen.width <= 992 ? 250 : window.screen.width <= 1200 ? 120 : 200;
  if (woman) {
    countOfDesc = window.screen.width <= 480 ? 200 : window.screen.width <= 768 ? 200 : window.screen.width <= 992 ? 360 : window.screen.width <= 1200 ? 600 : 720;
  }

  function convertor(date) {
    var mm = date.getMonth() + 1;
    var dd = date.getDate();

    return [
      date.getFullYear(),
      (mm > 9 ? "" : "0") + mm,
      (dd > 9 ? "" : "0") + dd,
    ].join(" / ");
  }
  return (
    <div className="article flex-center">
      <img className="article-img" src={data.img} />
      <div className="content">
        <h2 className="article-title">{data.title}</h2>
        <div className="article-date">{convertor(new Date(data.date))}</div>
        <div className="article-desc">
          {data.desc.slice(0, countOfDesc) + "..."}
        </div>
      </div>
    </div>
  );
}
