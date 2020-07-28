import React from "react";
import classes from "./Modal.module.scss";

const Modal = ({ open, close }) => {
  return (
    <div
      className={`${classes.modal} ${!open && classes.close}`}
      onClick={close}
    >
      <div>
        <h2>Your info has been validated</h2>
        <p>Thank you for shopping with us</p>
      </div>
    </div>
  );
};

export default Modal;
