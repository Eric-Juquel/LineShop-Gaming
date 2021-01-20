import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./LoginScreen.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "../forms/TextField";
import Spinner from "../../Spinner";
import { login } from "../../../actions/userActions";

const LoginScreen = ({ location, history }) => {
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const { register, handleSubmit, errors} = useForm();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const onSubmit = (data) => {
    dispatch(login(data.email, data.password));
  };

  return (
    <div className={classes.container}>
      <h1>Sign In</h1>
      <div className={classes.message}>
        {loading && <Spinner />}
        {error && <p>{error}</p>}
      </div>
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
        <button type="submit">Login</button>
        <div className={classes.new}>
          <p>
            New Customer ?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
