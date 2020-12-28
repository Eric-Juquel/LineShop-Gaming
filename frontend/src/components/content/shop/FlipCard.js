import React from "react";
import classes from "./FlipCard.module.scss";

const FlipCard = ({product}) => {
    const {image, description, name} = product
  return (
    <div className={classes.flipcard}>
      <div className={classes.flipcardinner}>
        <div className={classes.flipcardfront}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.flipcardback}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
