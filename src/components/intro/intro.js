import React from "react";
import "./intro.scss";
import { Link } from "react-router-dom";

export default function Intro({ seriesList, selectSeries }) {
  return (
    <div className="series-list">
      <h1>Series</h1>
      <div className="container">
        {seriesList.map((item) => (
          <div onClick={() => selectSeries(item.id)} key={item.id}>
            <div className="series-item">
              <p className="series-item-title">{item.title}</p>
              <img className="series-item-image" src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
