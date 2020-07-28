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
      <div className={classes.f}>
        <label htmlFor="email">E-mail</label>
        <div
          className={`${classes.inputContainer} ${
            errors.email ? classes.inputContainerError : ""
          }`}
        >
          <i className="material-icons">email</i>
          <input
            name="email"
            type="text"
            placeholder="Enter your email..."
            ref={register({
              required: { value: true, message: "Email is required" },
              validate: (email) => validator.isEmail(email) || "Invalid E-mail",
            })}
          />
        </div>
        <span className={classes.error}>{errors?.email?.message}</span>
      </div>

      <div className={classes.f}>
        <label htmlFor="phone">Phone</label>
        <div
          className={`${classes.inputContainer} ${
            errors.phone && classes.inputContainerError
          }`}
        >
          <i className="material-icons">phone</i>
          <input
            name="phone"
            type="phone"
            placeholder="Enter your number..."
            onBlur={() => {
              trigger("phone");
            }}
            ref={register({
              required: { value: true, message: "Number is required." },
              minLength: { value: 10, message: "Contact number too short." },
              maxLength: { value: 13, message: "Your number is too long." },
              validate: (phone) =>
                validator.isMobilePhone(phone, "en-ZA") ||
                "Enter a valid contact number",
            })}
          />
        </div>
        <span className={classes.error}> {errors?.phone?.message} </span>
      </div>

      <h3 className={classes.ShippingHeading}>Shipping address</h3>

      <div className={classes.formGroup}>
        <label htmlFor="fullName">Full name</label>
        <div
          className={`${classes.inputContainer} ${
            errors.fullName && classes.inputContainerError
          }`}
        >
          <i className="material-icons">account_circle</i>
          <input
            name="fullName"
            type="text"
            placeholder="Enter your name..."
            ref={register({
              required: { value: true, message: "Name is required." },
              minLength: { value: 2, message: "Name too short." },
              maxLength: { value: 60, message: "Your name is too long." },
              validate: (value) =>
                validator.isAlpha(value.replace(/\s/g, "")) ||
                "Invalid characters, only alphabets allowed",
            })}
          />
        </div>
        <span className={classes.error}> {errors?.fullName?.message}</span>
      </div>

      <div className={classes.formGroup}>
        <label htmlFor="address">Address</label>
        <div
          className={`${classes.inputContainer} ${
            errors.address && classes.inputContainerError
          }`}
        >
          <i className="material-icons">house</i>
          <input
            name="address"
            type="text"
            placeholder="Your address.."
            ref={register({
              required: { value: true, message: "Address is required." },
              minLength: { value: 2, message: "Address too short." },
              maxLength: { value: 60, message: "Your Address is too long." },
              validate: (address) =>
                validator.isAlphanumeric(address.replace(/\s/g, "")) ||
                "Invalid characters.",
            })}
          />
        </div>
        <span className={classes.error}> {errors?.address?.message}</span>
      </div>

      <div className={classes.formGroup}>
        <label htmlFor="city">City</label>
        <div
          className={`${classes.inputContainer} ${
            errors.city && classes.inputContainerError
          }`}
        >
          <i className="material-icons">location_city</i>
          <input
            name="city"
            type="text"
            placeholder="Your city.."
            ref={register({
              required: { value: true, message: "City is required." },
              minLength: { value: 2, message: "City too short." },
              maxLength: { value: 60, message: "Your City is too long." },
              validate: (city) =>
                validator.isAlpha(city.replace(/\s/g, "")) ||
                "Invalid characters.",
            })}
          />
        </div>
        <span className={classes.error}> {errors?.city?.message}</span>
      </div>

      <div className={classes.twoFormGroups}>
        <div className={classes.formGroup}>
          <label htmlFor="country">Country</label>
          <div
            className={`${classes.inputContainer} ${
              errors.country && classes.inputContainerError
            }`}
          >
            <i className="material-icons">public</i>
            <span className={classes.selectDropdown}>
              <i className="material-icons" id="dropdown">
                expand_more
              </i>
            </span>
            <select
              name="country"
              ref={register({
                required: { value: true, message: "Select your country" },
                minLength: { value: 1, message: "Select your country" },
                validate: (city) =>
                  validator.isAlpha(city.replace(/\s/g, "")) ||
                  "Invalid characters.",
              })}
            >
              <option value="">Your country ..</option>
              <option value="South Africa">South Africa</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <span className={classes.error}>{errors?.country?.message}</span>
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="postalCode">Postal Code</label>
          <div
            className={`${classes.inputContainer} ${
              errors.postalCode && classes.inputContainerError
            }`}
          >
            <i className="material-icons">markunread_mailbox</i>
            <input
              name="postalCode"
              type="text"
              placeholder="Your postal code.."
              ref={register({
                required: { value: true, message: "Postal code is required." },
                minLength: { value: 4, message: "Postal code too short." },
                maxLength: {
                  value: 5,
                  message: "Your Postal code is too long.",
                },
                validate: (postalCode) =>
                  validator.isNumeric(postalCode) || "Must be a number.",
              })}
            />
          </div>
          <span className={classes.error}> {errors?.postalCode?.message} </span>
        </div>
      </div>
      <div className={classes.formGroup + " " + classes.checkBox}>
        <input type="checkbox" name="save" id="postalCode" ref={register} />
        <span className={classes.customCheckbox}></span>
        <label htmlFor="save">Save this information for next</label>
      </div>
      <footer>
        <input type="submit" value="Continue" />
      </footer>
      <Modal open={openModal} close={close} />
    </form>
  );
};

export default Form;
