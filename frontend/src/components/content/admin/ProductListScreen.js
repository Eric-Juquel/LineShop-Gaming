import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductListScreen.module.scss";
import { FaPlusCircle } from "react-icons/fa";
import Spinner from "../../Spinner";
import ErrorComponent from "../../ErrorComponent";
import ProductItem from "./ProductItem";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../../../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../../../constants/productConstants";

const ProductListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    createdProduct
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts());
    }
  }, [
    dispatch,
    history,
    successDelete,
    userInfo,
    successCreate,
    createdProduct,
  ]);

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  const onDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const onEdit = (path) => {
    history.push(path);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Products</h1>
        <button onClick={createProductHandler}>
          <FaPlusCircle />
          CREATE PRODUCT
        </button>
      </div>

      {loading || loadingDelete || loadingCreate ? (
        <Spinner />
      ) : error || errorDelete || loadingCreate ? (
        <ErrorComponent err={error} />
      ) : (
        <div className={classes.productsTable}>
          <div className={classes.entitled}>
            <h2 className={classes.cell}>ID</h2>
            <h2 className={classes.cell}>NAME</h2>
            <h2 className={classes.cell}>IN STOCK</h2>
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
