import React, { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";

import Modal from "../Utilities/Modal/Modal";
import classes from "./Form.module.scss";

const Form = () => {
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit, errors, trigger } = useForm();
  const close = () => setOpenModal(false);
  const onSubmit = (data) => {
    console.log(data);
    setOpenModal(true);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Contact Information</h3>
      <div className={classes.formGroup}></div>
    </form>
  );
};

export default Form;
