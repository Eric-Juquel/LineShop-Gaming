import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductDetail.module.scss";
import { IoIosReturnLeft } from "react-icons/io";
import Spinner from "../../Spinner";
import ErrorComponent from "../../ErrorComponent";
import Rating from "./Rating";
import { listProductDetails } from "../../../actions/productActions";

const ProductDetail = ({ history, match }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const goBackHandler = () => {
    history.goBack();
  };

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorComponent err={error} />
      ) : (
        <div className={classes.container}>
          <button className={classes.btn} onClick={goBackHandler}>
            <IoIosReturnLeft />
            &nbsp;
            <span className={classes.text}> Go Back</span>
          </button>
          <div className={classes.image}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={classes.review}>
            <h2>Reviews</h2>
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
            <h4>Description: </h4>
            <p>{product.description}</p>
          </div>
          <div className={classes.add}>
            <div className={classes.price}>
              <p>Price :</p>
              <strong>{product.price} €</strong>
            </div>
            <div className={classes.stock}>
              <p>Status :</p>
              <p>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</p>
            </div>

            <div className={classes.qty}>
              <label htmlFor={"quantity"}>Qty :</label>
              <div className={classes.select}>
                <select
                  disabled={product.countInStock === 0}
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <span className="focus"></span>
              </div>
            </div>

            <div className={classes.addBtn}>
              <button
                onClick={addToCartHandler}
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className={classes.write}>
            <h2>Write a review</h2>
            <form>write here</form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
