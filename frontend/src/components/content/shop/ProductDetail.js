import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductDetail.module.scss";
import { IoIosReturnLeft } from "react-icons/io";
import Select from "react-select";
import Rating from "./Rating";
import { listProductDetails } from "../../../actions/productActions";

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div className={classes.container}>
      <button className={classes.btn}>
        <Link to="/products">
          <IoIosReturnLeft />
          &nbsp;
          <span className={classes.text}> Go Back</span>
        </Link>
      </button>
      <div className={classes.image}>
        <img src={product.image} />
      </div>
      <div className={classes.review}>
        <h1>Reviews</h1>
        <p>No reviews for this article</p>
      </div>
      <div className={classes.details}>
        <h1>{product.name}</h1>
        <hr />
        <Rating
          value={product.rating}
          text={` ${product.numReviews} Reviews`}
          color={"yellow"}
        />
        <hr />
        <h3>Description: </h3>
        <p>{product.description}</p>
      </div>
      <div className={classes.add}>
        <div className={classes.price}>
          <p>Price:</p>
          <strong>{product.price} €</strong>
        </div>
        <div className={classes.stock}>
          <p>Status:</p>
          <p>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</p>
        </div>
        <div className={classes.qty}>
          <label htmlFor={"qty"}>Qty</label>
          <input type="select" />
        </div>
        <div className={classes.addBtn}>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className={classes.write}>
        <h1>Write a review</h1>
        <form>write here</form>
      </div>
    </div>
  );
};

export default ProductDetail;
