import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductDetail.module.scss";
import Rating from "./Rating";
import { listProductDetails } from "../../../actions/productActions";

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product} = productDetails

  console.log(match.params)

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);



  return <div>Product</div>;
};

export default ProductDetail;
