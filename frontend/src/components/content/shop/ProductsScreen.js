import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductsScreen.module.scss";
import ProductCard from "./ProductCard";
import Meta from "../../Meta";
import Spinner from "../../Spinner";
import ErrorComponent from "../../ErrorComponent";
import Paginate from "./Paginate";
import { listProducts } from "../../../actions/productActions";

const ProductsScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  return (
    <>
      <Meta />
      { error ? (
        <ErrorComponent err={error} />
      ) : (
        <div className={classes.container}>
          <div className={classes.cardsContainer}>
            {products.map((product) => (
              <div key={product._id} className={classes.cardContainer}>
                <ProductCard product={product} loading={loading}/>
              </div>
            ))}
          </div>
          <div className={classes.paginate}>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsScreen;
