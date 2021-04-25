import React from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./ProductCard.module.scss";
import FlipCard from "./FlipCard";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  const history = useHistory();

  const { _id, name, rating, price, countInStock } = product;

  const addToCartHandler = () => {
    history.push(`/cart/${_id}?qty=${1}`);
  };

  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <Link to={`/product/${_id}`}>
          <h3>{name}</h3>
        </Link>
      </div>
      <div className={classes.flipCard}>
        <Link to={`/product/${_id}`}>
          <FlipCard product={product} />
        </Link>
      </div>
      <div className={classes.detail}>
        <p className={classes.price}>
          {price}
          {" €"}
        </p>
        <hr />
        <p className={classes.stock}>
          {countInStock === 0 ? "Out of stock" : `${countInStock} in stock`}
        </p>
        <hr />
        <div className={classes.rating}>
          <Rating
            value={rating}
            text={` (${product.numReviews})`}
            color={"yellow"}
          />
        </div>
      </div>

      <button
        className={classes.btnLarge}
        disabled={countInStock === 0}
        onClick={() => addToCartHandler()}
      >
        Add to cart
      </button>
      <button
        className={classes.btnSmall}
        disabled={countInStock === 0}
        onClick={() => addToCartHandler()}
      >
        Add
      </button>
    </div>
  );
};

export default ProductCard;
