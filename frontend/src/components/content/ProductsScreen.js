import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductsScreen.module.scss";
import ProductCard from "./ProductCard";
import Spinner from "../Spinner";
import { listProducts } from "../../actions/productActions";

const ProductsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log(products);

  return (
    <div className={classes.container}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          <div className={classes.prev}>{'<'}</div>
          {products.map((product) => (
            <div key={product._id} className={classes.cardContainer}>
              <ProductCard product={product} />
            </div>
          ))}
          <div className={classes.next}>{'>'}</div>
        </>
      )}
    </div>
  );
};

export default ProductsScreen;
