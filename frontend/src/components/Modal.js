import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => onOpen(),
      closeModal: () => onClose(),
    };
  });

  // close Modal on  escape

  // const handleHideDropdown = (event) => {
  //   if (event.key === "Escape") {
  //     onClose();
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("keydown", handleHideDropdown, true);
  //   return () => {
  //     document.removeEventListener("keydown", handleHideDropdown, true);
  //   };
  // });

  const onOpen = () => {
    setDisplay(true);
  };

  const onClose = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className={classes.modalWrapper}>
        <div className={classes.modalBackdrop}>
          <div
            className={classes.modalBox}
            style={{ height: props.height, width: props.width }}
          >
            {props.children}
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  } else return null;
});

export default Modal;
