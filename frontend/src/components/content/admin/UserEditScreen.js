import React, { useEffect } from "react";
import classes from "./UserEditScreen.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { IoIosReturnLeft } from "react-icons/io";
import TextField from "../forms/TextField";
import Checkbox from "../forms/Checkbox";
import Spinner from "../../Spinner";
import ErrorComponent from "../../ErrorComponent";
import { getUserDetails, updateUser } from "../../../actions/userActions";
import { USER_UPDATE_RESET } from "../../../constants/userConstants";

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id;

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const { register, handleSubmit, errors, control } = useForm();

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push("/admin/userlist");
    } else {
      if (!user.firstName || user._id !== userId) {
        dispatch(getUserDetails(userId));
      }
    }
  }, [dispatch, user, userId, successUpdate, history]);

  const goBackHandler = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      updateUser({
        _id: userId,
        firstname: data.firstName,
        lastName: data.lastName,
        email: data.email,
        isAdmin: data.isAdmin,
      })
    );
  };

  return (
    <div className={classes.container}>
      <h1>Edit User</h1>

      {loading || loadingUpdate ? (
        <Spinner />
      ) : error || errorUpdate ? (
        <ErrorComponent err={error} />
      ) : (
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
              defaultValue={user.firstName}
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
              defaultValue={user.lastName}
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
              defaultValue={user.email}
              mandatory={true}
            />
          </div>

          <div className={classes.formGroup}>
            <Checkbox
              register={register}
              error={errors}
              name="isAdmin"
              label="Is Admin"
              defaultChecked={user.isAdmin}
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

export default UserEditScreen;
