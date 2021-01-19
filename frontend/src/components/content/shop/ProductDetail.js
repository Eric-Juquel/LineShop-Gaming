import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductDetail.module.scss";
import Moment from "react-moment";
import { IoIosReturnLeft } from "react-icons/io";
import ProductDetailReview from "./ProductDetailReview";
import Spinner from "../../Spinner";
import ErrorComponent from "../../ErrorComponent";
import Rating from "./Rating";
import {
  listProductDetails,
  createProductReview,
} from "../../../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../../constants/productConstants";

const ProductDetail = ({ history, match }) => {
  // const [alreadyReviewed, setAlreadyReviewed] = useState(false);
  const [addReview, setAddReview] = useState(false);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  let alreadyReviewed = false
  const userReviewed = product.reviews.map((r) => r.user);
  if (userReviewed.includes(userInfo._id)) {
    alreadyReviewed = true
  }

  console.log(userReviewed, userInfo._id);

  useEffect(() => {
    if (successProductReview) {
      alert("Review Submitted!");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }

    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, successProductReview]);

  const goBackHandler = () => {
    setAddReview(false);
    history.goBack();
  };

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  console.log("alreadyreviewed", alreadyReviewed);

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

          {addReview ? (
            <ProductDetailReview
              product={product}
              user={userInfo}
              errorProductReview={errorProductReview}
              dispatch={dispatch}
              createReview={createProductReview}
              setAddReview={setAddReview}
            />
          ) : (
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
          )}

          {!userInfo ? (
            <div className={classes.write}>
              <p>
                Please <Link to="/login"> Sign In </Link> to write a Review{" "}
              </p>
            </div>
          ) : addReview ? (
            ""
          ) : (
            <div className={classes.write}>
              <button
                onClick={() => setAddReview(true)}
                disabled={alreadyReviewed}
              >
                {alreadyReviewed ? "Already Reviewed" : "Write a review"}
              </button>
            </div>
          )}

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
          <div className={classes.reviews}>
            <h2>
              Reviews <span>({product.numReviews})</span>
            </h2>
            <div className={classes.text}>
              {product.reviews.length === 0 ? (
                <p>No reviews for this article</p>
              ) : (
                product.reviews.map((review) => (
                  <div key={review._id} className={classes.review}>
                    <hr />
                    <strong>
                      {review.name} -{" "}
                      <Moment format="YYYY/MM/DD">{review.createdAt}</Moment>
                    </strong>
                    <Rating value={review.rating} color={"yellow"} />
                    <p>{review.comment}</p>
                  </div>
                ))
              )}
            </div>
            {/* <div className={classes.all}>See all reviews</div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
