import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./UserListScreen.module.scss";
import Spinner from "../../Spinner";
import ErrorComponent from "../../ErrorComponent";
import UserItem from "./UserItem";
import { listUsers, deleteUser } from "../../../actions/userActions";

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, userInfo]);

  const onDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const onEdit = (path) => {
    history.push(path)
  }

  return (
    <div className={classes.container}>
      <h1>Users</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorComponent err={error} />
      ) : (
        <div className={classes.usersTable}>
          <div className={classes.entitled}>
            <h4 className={classes.cell}>ID</h4>
            <h4 className={classes.cell}>NAME</h4>
            <h4 className={classes.cell}>EMAIL</h4>
            <h4 className={classes.cell}>ADMIN</h4>
            <h4 className={classes.cell}>{' '}</h4>
          </div>

          <div className={classes.items}>
            {users.map((user) => (
              <UserItem key={user._id} user={user} userInfo={userInfo} deleteUser={onDelete} editUser={onEdit}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserListScreen;
