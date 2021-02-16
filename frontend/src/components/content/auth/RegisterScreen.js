import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./RegisterScreen.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "../forms/TextField";
import Spinner from "../../Spinner";
import { registerUser } from "../../../actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [message, setMessage] = useState(null);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        registerUser(data.firstName, data.lastName, data.email, data.password)
      );
    }
  };

  return (
    <div className={classes.container}>
      <h1>Sign Up</h1>
      <div className={classes.message}>
        {loading && <Spinner />}
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}
      </div>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formGroup}>
          <TextField
            type="text"
            register={register}
            error={errors}
            inputwidth="100%"
            inputheight="4rem"
            label="First Name"
            name="firstName"
            placeholder="First Name"
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
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
            mandatory={true}
          />
        </div>
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
        <div className={classes.formGroup}>
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
        <div className={`${classes.formGroup} ${classes.empty}`}></div>
        <div className={classes.formGroup}>
          <TextField
            type="password"
            register={register}
            error={errors}
            inputwidth="100%"
            inputheight="4rem"
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm Password"
            mandatory={true}
          />
        </div>

        <button className={classes.submit} type="submit">Register</button>
        <div className={classes.account}>
          <p>
            Have an Account ?{" "}
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
