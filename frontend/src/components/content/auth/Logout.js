import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import classes from "./Logout.module.scss";
import Modal from "../../Modal";
import { logout } from "../../../actions/userActions";

const Logout = ({ history }) => {
  const dispatch = useDispatch();
  // Modal
  const modalRef = useRef();
  useEffect(() => {
    modalRef.current.openModal();
  }, []);

  const onLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  const onBack = () => {
    modalRef.current.closeModal();
    history.goBack();
  };

  return (
    <Modal ref={modalRef} height="20rem" width="60rem">
      <div className={classes.logout}>
        <h4>would you like to logout ?</h4>

        <button className={classes.cancel} onClick={onBack}>
          Cancel
        </button>
        <button className={classes.validate} onClick={onLogout}>
          Validate
        </button>
      </div>
    </Modal>
  );
};

export default Logout;
