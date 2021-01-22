import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { useForm } from "react-hook-form";
import classes from "./ProfileScreen.module.scss";
import { GiSplitCross } from "react-icons/gi";
import Spinner from "../../Spinner";
import ErrorComponent from "../../ErrorComponent";
import TextField from "../forms/TextField";
import {
  getUserDetails,
  updateUserProfile,
} from "../../../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../../../constants/userConstants";
import { listMyOrders } from "../../../actions/orderActions";

const ProfileScreen = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success, error: errorUpdate } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  const { register, handleSubmit, errors} = useForm();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || (!user.firstName && !user.lastName) ) {
        setMessage(null);
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const onSubmit = (data) => {
    console.log("profile data", data);
    if (data.password !== data.confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        })
      );
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <h1>User Profile</h1>
        {loading ? (
          <Spinner />
        ) : errorUpdate ? (
          <ErrorComponent err={errorUpdate} />
        ) : (
          <>
            <div className={classes.message}>
              {message && <p className={classes.danger}>{message}</p>}
              {success && <p className={classes.success}>Profile Updated</p>}
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
                  defaultValue={firstName}
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
                  defaultValue={lastName}
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
                  defaultValue={email}
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
                  label="New Password"
                  name="password"
                  placeholder="New Password"
                  mandatory={false}
                />
              </div>
              <div className={classes.formGroup}></div>
              <div className={classes.formGroup}>
                <TextField
                  type="password"
                  register={register}
                  error={errors}
                  inputwidth="100%"
                  inputheight="4rem"
                  label="Confirm New Password"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  mandatory={false}
                />
              </div>

              <button type="submit">Update</button>
            </form>
          </>
        )}
      </div>
      <div className={classes.orders}>
        <h1>My Orders</h1>
        {loadingOrders ? (
          <Spinner />
        ) : error ? (
          <ErrorComponent err={error} />
        ) : (
          <div className={classes.orderTable}>
            <div className={classes.entitled}>
              <h2 className={classes.cell}>ID</h2>
              <h2 className={classes.cell}>DATE</h2>
              <h2 className={classes.cell}>TOTAL</h2>
              <h2 className={classes.cell}>PAID</h2>
              <h2 className={classes.cell}>DELIVERED</h2>
              <h2 className={classes.cell}>{' '}</h2>
            </div>

            <div className={classes.items}>
              {orders.length === 0 ? (
                <h4>No Current Order</h4>
              ) : (
                orders.map((order) => (
                  <div key={order._id} className={classes.row}>
                    <div className={classes.cell}>{order._id}</div>
                    <div className={classes.cell}>
                      <Moment format="YYYY/MM/DD">{order.createdAt}</Moment>
                    </div>
                    <div className={classes.cell}>
                      {new Intl.NumberFormat().format(order.totalPrice)}
                    </div>
                    <div className={classes.cell}>
                      {order.isPaid ? (
                        <Moment format="YYYY/MM/DD">{order.paidAt}</Moment>
                      ) : (
                        <GiSplitCross />
                      )}
                    </div>
                    <div className={classes.cell}>
                      {order.isDelivered ? (
                        <Moment format="YYYY/MM/DD">{order.deliveredAt}</Moment>
                      ) : (
                        <GiSplitCross />
                      )}
                    </div>
                    <div className={classes.cell}>
                      <Link to={`/order/${order._id}`}>
                        <button>Details</button>
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileScreen;
