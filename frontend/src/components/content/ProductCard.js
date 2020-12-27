import React from "react";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const { name, rating, price, image, description } = product;
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <h2>{name}</h2>
      </div>
      <div className={classes.flipCard}>
          <img src={image} alt={name} />
      </div>

      <p className={classes.price}>
        {price}
        {" €"}
      </p>
      <p className={classes.rating}>{rating}</p>
      <button className={classes.btn}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
