import React, { useEffect, useState } from "react";
import styles from "./CreateAcc.module.css";
import PagesHeader from "../Reuseables/PagesHeader";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";
import { toggleInvalidClass } from "../store/HelperFx";

const CreateAcc = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameError,
    valueChangeHandler: firstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameError,
    valueChangeHandler: lastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailError,
    valueChangeHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordError,
    valueChangeHandler: passwordHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.length > 8);

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
  };

  ////////////////////////////////////////

  const customClass = `${styles.main} ${props.className}`;
  const firstNameInvalidClass = toggleInvalidClass(
    firstNameError,
    styles.input,
    styles.invalid
  );
  const lastNameInvalidClass = toggleInvalidClass(
    lastNameError,
    styles.input,
    styles.invalid
  );
  const emailInvalidClass = toggleInvalidClass(
    emailError,
    styles.input,
    styles.invalid
  );
  const passwordInvalidClass = toggleInvalidClass(
    passwordError,
    styles.input,
    styles.invalid
  );
  return (
    <div className={customClass}>
      <PagesHeader>
        <h1>Sign Up</h1>
      </PagesHeader>
      <div className={styles.form_box}>
        <div className={styles.heading_box}>
          <h1 className={styles.heading}>Sign up here</h1>
          <p className={styles.guide}>Enter the credentials</p>
        </div>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <div className={styles.inputs}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={enteredFirstName}
              className={firstNameInvalidClass}
              onChange={firstNameHandler}
              onBlur={firstNameBlurHandler}
              autoFocus
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={enteredLastName}
              className={lastNameInvalidClass}
              onChange={lastNameHandler}
              onBlur={lastNameBlurHandler}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={enteredEmail}
              className={emailInvalidClass}
              onChange={emailHandler}
              onBlur={emailBlurHandler}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              min="8"
              value={enteredPassword}
              className={passwordInvalidClass}
              onChange={passwordHandler}
              onBlur={passwordBlurHandler}
            />
          </div>
          <div className={styles.btns_box}>
            <button
              type="submit"
              disabled={!formIsValid}
              className={styles.submit}
            >
              Sign Up
            </button>
            <button type="button" className={styles.create_acc}>
              <Link to="/home">Back to store</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAcc;
