import React, { useState } from "react";
import classes from "./ShippingScreen.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import countryList from "react-select-country-list";
import TextField from "../forms/TextField";
import SelectField from "../forms/SelectField";
import CheckoutSteps from "./CheckoutSteps";
import { saveShippingAddress } from "../../../actions/cartActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [message, setMessage] = useState(null);

  const { register, handleSubmit, errors, control } = useForm();

  const countriesOption = countryList().getData();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(saveShippingAddress(data));
    history.push("/payment");
  };

  return (
    <div className={classes.container}>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <div className={classes.message}>{message && <p>{message}</p>}</div>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formGroup}>
          <TextField
            type="text"
            register={register}
            error={errors}
            inputwidth="100%"
            inputheight="4rem"
            label="Address"
            name="address"
            placeholder="Enter Address"
            defaultValue={shippingAddress.address}
            mandatory={true}
          />
        </div>
        <div className={classes.formGroup}>
          <TextField
            type="text"
            register={register}
            error={errors}
            inputwidth="100%"
            inputheight="4rem"
            label="City"
            name="city"
            placeholder="Enter City"
            defaultValue={shippingAddress.city}
            mandatory={true}
          />
        </div>
        <div className={classes.formGroup}>
          <TextField
            type="text"
            register={register}
            error={errors}
            inputwidth="100%"
            inputheight="4rem"
            label="Postal Code"
            name="postalCode"
            placeholder="Enter Postal Code"
            defaultValue={shippingAddress.postalCode}
            mandatory={true}
          />
        </div>
        <div className={classes.formGroup}>
          <SelectField
            control={control}
            error={errors}
            inputwidth="100%"
            inputheight="4rem"
            label="Country"
            name="country"
            placeholder="Enter Country"
            options={countriesOption}
            menuPlacement="top"
            isMulti={false}
            defaultValue={shippingAddress.country}
            mandatory={true}
          />
        </div>
        <div className={classes.continue}>
          <button className={classes.btn} type="submit">
            <span className={classes.btn__visible}>Continue</span>
            <span className={classes.btn__invisible}>Payment</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingScreen;
