import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Rating = ({ value, text, color }) => {
  return (
    <div>
      <span style={{ margin: "auto" }}>
        {value >= 1 ? (
          <BsStarFill style={{ fill: color }} />
        ) : value >= 0.5 ? (
          <BsStarHalf style={{ fill: color }} />
        ) : (
          <BsStar style={{ fill: color }} />
        )}
      </span>
      <span style={{ margin: "auto" }}>
        {value >= 2 ? (
          <BsStarFill style={{ fill: color }} />
        ) : value >= 1.5 ? (
          <BsStarHalf style={{ fill: color }} />
        ) : (
          <BsStar style={{ fill: color }} />
        )}
      </span>
      <span style={{ margin: "auto" }}>
        {value >= 3 ? (
          <BsStarFill style={{ fill: color }} />
        ) : value >= 2.5 ? (
          <BsStarHalf style={{ fill: color }} />
        ) : (
          <BsStar style={{ fill: color }} />
        )}
      </span>
      <span style={{ margin: "auto" }}>
        {value >= 4 ? (
          <BsStarFill style={{ fill: color }} />
        ) : value >= 3.5 ? (
          <BsStarHalf style={{ fill: color }} />
        ) : (
          <BsStar style={{ fill: color }} />
        )}
      </span>
      <span style={{ margin: "auto" }}>
        {value >= 5 ? (
          <BsStarFill style={{ fill: color }} />
        ) : value >= 4.5 ? (
          <BsStarHalf style={{ fill: color }} />
        ) : (
          <BsStar style={{ fill: color }} />
        )}
      </span>
      <span>&nbsp;</span>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
