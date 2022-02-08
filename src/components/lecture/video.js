import React from "react";

export default function Video({ data }) {
  function convertor(date) {
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    return [
      date.getFullYear(),
      (mm > 9 ? "" : "0") + mm,
      (dd > 9 ? "" : "0") + dd,
    ].join(" / ");
  }
  return (
    <a
      href={data.link}
      target="_blank"
      className="video"
      style={{ backgroundImage: `url(${data.thumbnail})` }}
    >
      <h1>{data.title}</h1>
      <div className="date">Sana: {convertor(new Date(data.pubDate))}</div>
      <div className="youtube flex-center">
        <img src="https://img.icons8.com/color/144/000000/youtube-play.png" />
      </div>
    </a>
  );
}
