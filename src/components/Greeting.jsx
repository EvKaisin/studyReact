import "./greeting.css"
import React from "react";
import left_up from "../pictures/left_up.png";
import left_dow from "../pictures/left_down.png";
import right_up from "../pictures/rigth_up.png";
import right_down from "../pictures/right_down.png";

export default function Greeting() {
  return (
    <div className="greeting">
      <div className="top_pic">
        <img src={left_up} alt="left_up" />
        <img src={left_dow} alt="left_dow123n" />
      </div>

      

      <div className="text">
        <h1>Where creators do business</h1>
        <p>
          Passionfroot lets you handle sponsorships, collaboration requests,
          bookings, and payments – in one single place. Stop feeling overwhelmed
          by the opportunities. Start seizing them.
        </p>
      </div>
      <div className="down_pic">
        <img src={right_up} alt="right_up" />
        <img src={right_down} alt="right_down" />
      </div>
    </div>
  );
}
