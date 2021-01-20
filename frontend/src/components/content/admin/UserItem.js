import React, { useRef } from "react";
import classes from "./UserListScreen.module.scss";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import Modal from "../../Modal";

const UserItem = ({ user, userInfo, deleteUser, editUser }) => {
  const modalRef = useRef();

  const onBack = () => {
    modalRef.current.closeModal();
  };

  const deleteHandler = () => {
    modalRef.current.openModal();
  };

  return (
    <div className={classes.row}>
      <div className={classes.cell}>{user._id}</div>
      <div className={classes.cell}>
        {user.firstName.charAt(0).toUpperCase() +
          user.firstName.substring(1).toLowerCase()}{" "}
        {user.lastName.toUpperCase()}
      </div>
      <div className={classes.cell}>
        <a href={`mailto:${user.email}`}>{user.email}</a>{" "}
      </div>
      <div className={classes.cell}>
        {user.isAdmin ? (
          <span className={classes.success}>
            <FaUserGraduate />
          </span>
        ) : (
          <span className={classes.danger}>
            <FaUserLock />
          </span>
        )}
      </div>
      <div className={classes.cell}>
        <button
          title="Edit User"
          className={classes.edit}
          disabled={userInfo._id === user._id}
          onClick={() => editUser(`/admin/user/${user._id}/edit`)}
        >
          <FaUserEdit />
        </button>
        <button
          title="Delete User"
          className={classes.delete}
          disabled={userInfo._id === user._id}
          onClick={() => deleteHandler()}
        >
          <FaUserMinus />
        </button>
      </div>
      <Modal ref={modalRef} height="20%" width="30%">
        <div className={classes.modal}>
          <h4>
            Delete{" "}
            {user.firstName.charAt(0).toUpperCase() +
              user.firstName.substring(1).toLowerCase()}{" "}
            {user.lastName.toUpperCase()} ?
          </h4>
          <button className={classes.cancel} onClick={onBack}>
            No
          </button>
          <button
            className={classes.validate}
            onClick={() => deleteUser(user._id)}
          >
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UserItem;
