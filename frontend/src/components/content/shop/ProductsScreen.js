import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductsScreen.module.scss";
import ProductCard from "./ProductCard";
import Spinner from "../../Spinner";
import ErrorComponent from '../../ErrorComponent'
import { listProducts } from "../../../actions/productActions";

const ProductsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorComponent err={error} />
      ) : (
        <div className={classes.container}>
          <div className={classes.prev}>{"<"}</div>
          {products.map((product) => (
            <div key={product._id} className={classes.cardContainer}>
              <ProductCard product={product} />
            </div>
          ))}
          <div className={classes.next}>{">"}</div>
        </div>
        
      )}
    </>
  );
};

export default ProductsScreen;
