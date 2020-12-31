import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./LoginScreen.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "../forms/TextField";
import ErrorComponent from "../../ErrorComponent";
import Spinner from "../../Spinner";
import { login } from "../../../actions/userActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit, errors, control } = useForm();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div className={classes.container}>
      <h1>Sign In</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorComponent err={error} />
      ) : (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.formGroup}>
            <TextField
              type="email"
              register={register}
              error={errors}
              inputwidth="100%"
              inputheight="4rem"
              label="Email"
              name="email"
              placeholder="Email"
              mandatory={true}
            />
          </div>
          <div  className={classes.formGroup}>
            <TextField 
            type="password"
            register={register}
              error={errors}
              inputwidth="100%"
              inputheight="4rem"
              label="Password"
              name="password"
              placeholder="Password"
              mandatory={true}
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      )}
    </div >
  );
};

export default LoginScreen;
