import React, { useEffect } from "react";
import classes from "./ProductEditScreen.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { IoIosReturnLeft } from "react-icons/io";
import TextField from "../forms/TextField";
import TextareaField from "../forms/Textarea";
import Checkbox from "../forms/Checkbox";
import Spinner from "../../Spinner";
import ErrorComponent from "../../ErrorComponent";
import {
  listProductDetails,
  updateProduct,
} from "../../../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../../../constants/productConstants";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;
  console.log('productId',productId)

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  console.log('product',product)

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const { register, handleSubmit, errors, control } = useForm();

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      }
    }
  }, [dispatch, product, productId, history, successUpdate]);

  const goBackHandler = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      updateProduct({
        _id: productId,
        name: data.name,
        price: data.price,
        image: data.image,
        brand: data.brand,
        category: data.category,
        countInStock: data.countInStock,
        description: data.description,
      })
    );
  };

  return (
    <div className={classes.container}>
      <h1>Edit Product</h1>

      {loading || loadingUpdate ? (
        <Spinner />
      ) : error || errorUpdate ? (
        <ErrorComponent err={error} />
      ) : (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={`${classes.formGroup} ${classes.name}`}>
            <TextField
              type="text"
              register={register}
              error={errors}
              inputwidth="100%"
              inputheight="4rem"
              label="Name"
              name="name"
              placeholder="Enter Name"
              defaultValue={product.name}
              mandatory={true}
            />
          </div>
          <div className={`${classes.formGroup} ${classes.price}`}>
            <TextField
              type="number"
              register={register}
              error={errors}
              inputwidth="100%"
              inputheight="4rem"
              label="Price"
              name="price"
              placeholder="Enter Price"
              defaultValue={product.price}
              mandatory={true}
            />
          </div>
          <div className={`${classes.formGroup} ${classes.image}`}>
            <TextField
              type="text"
              register={register}
              error={errors}
              inputwidth="100%"
              inputheight="4rem"
              label="Image"
              name="image"
              placeholder="Enter image url"
              defaultValue={product.image}
              mandatory={true}
            />
          </div>
          <div className={`${classes.formGroup} ${classes.brand}`}>
            <TextField
              type="text"
              register={register}
              error={errors}
              inputwidth="100%"
              inputheight="4rem"
              label="Brand"
              name="brand"
              placeholder="Enter Brand"
              defaultValue={product.brand}
              mandatory={true}
            />
          </div>
          <div className={`${classes.formGroup} ${classes.countInStock}`}>
            <TextField
              type="number"
              register={register}
              error={errors}
              inputwidth="100%"
              inputheight="4rem"
              label="In Stock"
              name="countInStock"
              placeholder="In Stock"
              defaultValue={product.countInStock}
              mandatory={true}
            />
          </div>
          <div className={`${classes.formGroup} ${classes.category}`}>
            <TextField
              type="text"
              register={register}
              error={errors}
              inputwidth="100%"
              inputheight="4rem"
              label="Category"
              name="category"
              placeholder="Enter Category"
              defaultValue={product.category}
              mandatory={true}
            />
          </div>
          <div className={`${classes.formGroup} ${classes.description}`}>
            <TextareaField
              register={register}
              error={errors}
              rows={6}
              cols={10}
              inputwidth="100%"
              inputheight="19rem"
              label="Description"
              name="description"
              placeholder="Enter Description"
              defaultValue={product.description}
              mandatory={true}
            />
          </div>

          <button className={classes.submit} type="submit">
            Update
          </button>
          <button className={classes.back} onClick={goBackHandler}>
            <IoIosReturnLeft />
            &nbsp;
            <span className={classes.text}> Go Back</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductEditScreen;
