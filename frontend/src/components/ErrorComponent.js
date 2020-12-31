import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./ErrorComponent.module.scss";
import Modal from "../components/Modal";

const ErrorComponent = ({ err }) => {
  const history = useHistory();

  if (!err) {
    err = new Error("Error");
  }

  // Modal
  const modalRef = useRef();
  useEffect(() => {
    modalRef.current.openModal();
  }, []);

  const onClose = () => {
    history.push("/");
    modalRef.current.closeModal();
  };

  return (
    <Modal ref={modalRef} height={"30%"} width={"50%"}>
      <div className={classes.Error}>
        <h3>Error</h3>
        <div className={classes.message}>
          <p>{err}</p>
        </div>
        <button className={classes.modalCloseButton} onClick={onClose}>
          Back
        </button>
      </div>
    </Modal>
  );
};

export default ErrorComponent;
