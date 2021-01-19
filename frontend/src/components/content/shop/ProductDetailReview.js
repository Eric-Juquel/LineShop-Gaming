import React, { useEffect, useState, useRef } from "react";
import classes from "./ProductDetail.module.scss";
import { useForm } from "react-hook-form";
import SelectField from "../forms/SelectField";
import TextareaField from "../forms/Textarea";
import ErrorComponent from "../../ErrorComponent";

const ProductDetailReview = ({
  dispatch,
  product,
  createReview,
  user,
  errorProductReview,
  setAddReview,
}) => {
  const { register, handleSubmit, errors, control } = useForm();

  console.log("product", product);
  const ratingOptions = [
    { label: "1 - Poor", value: "1" },
    { label: "2 - Fair", value: "2" },
    { label: "3 - Good", value: "3" },
    { label: "4 - Very Good", value: "4" },
    { label: "5 - Excellent", value: "5" },
  ];

  const onCancel = (e) => {
    e.preventDefault();
    setAddReview(false);
  };

  const onSubmit = (data) => {
    console.log("data", data);
    dispatch(
      createReview(product._id, {
        rating: data.rating.value,
        comment: data.comment,
      })
    );
    setAddReview(false);
  };

  return (
    <div className={classes.reviewContainer}>
      <h1>{product.name}</h1>
      <h2>Write a review</h2>
      {errorProductReview && <ErrorComponent />}
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formGroup}>
          <SelectField
            control={control}
            error={errors}
            inputwidth="100%"
            inputheight="4rem"
            label="Rating"
            name="rating"
            placeholder="Enter Rating"
            options={ratingOptions}
            menuPlacement="bottom"
            isMulti={false}
            mandatory={true}
          />
        </div>
        <div className={classes.formGroup}>
          <TextareaField
            register={register}
            error={errors}
            rows={4}
            // cols={21}
            inputwidth="100%"
            label="Comment"
            name="comment"
            placeholder="Enter Comment"
            mandatory={false}
          />
        </div>
        <div className={classes.btnGroup}>
          <button className={classes.submit} type="submit">
            Submit
          </button>
          <button className={classes.cancel} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductDetailReview;
