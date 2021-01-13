import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductListScreen.module.scss";
import Spinner from "../../Spinner";
import ErrorComponent from "../../ErrorComponent";
import ProductItem from "./ProductItem";
import { listProducts, deleteProduct } from "../../../actions/productActions";

const ProductListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const { success: successDelete } = productDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, userInfo]);

  const onDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const onEdit = (path) => {
    history.push(path);
  };

  return (
    <div className={classes.container}>
      <h1>Products</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorComponent err={error} />
      ) : (
        <div className={classes.productsTable}>
          <div className={classes.entitled}>
            <h2 className={classes.cell}>ID</h2>
            <h2 className={classes.cell}>NAME</h2>
            <h2 className={classes.cell}>PRICE</h2>
            <h2 className={classes.cell}>CATEGORY</h2>
            <h2 className={classes.cell}>BRAND</h2>
            <h2 className={classes.cell}> </h2>
          </div>

          <div className={classes.items}>
            {products.map((product) => (
              <ProductItem
                key={product._id}
                product={product}
                deleteProduct={onDelete}
                editProduct={onEdit}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListScreen;
