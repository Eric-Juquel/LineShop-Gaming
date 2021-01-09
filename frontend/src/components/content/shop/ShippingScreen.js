import React, { useState } from "react";
import classes from "./ShippingScreen.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import countryList from "react-select-country-list";
import TextField from "../forms/TextField";
import SelectField from "../forms/SelectField";

const ShippingScreen = ({ history }) => {
  const [message, setMessage] = useState(null);

  const { register, handleSubmit, errors, control } = useForm();

  const countriesOption = countryList().getData();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div className={classes.container}>
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
            name='"country'
            placeholder="Enter Country"
            options={countriesOption}
            menuPlacement="top"
            isMulti={false}
            defaultValue={""}
            mandatory={true}
          />
        </div>
        <button>Continue</button>
      </form>
    </div>
  );
};

export default ShippingScreen;
