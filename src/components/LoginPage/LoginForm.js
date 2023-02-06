import React from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import PagesHeader from "../Reuseables/PagesHeader";
import useInput from "../hooks/use-input";
import { toggleInvalidClass } from "../store/HelperFx";
const LoginForm = (props) => {
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailError,
    valueChangeHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordError,
    valueChangeHandler: passwordHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.length >= 8);
  ////////////////////////////////////////////
  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    passwordReset();
    emailReset();
  };
  const customClass = `${styles.main} ${props.className}`;
  const emailInavlidClass = toggleInvalidClass(
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
        <h1>Account</h1>
      </PagesHeader>
      <div className={styles.form_box}>
        <div className={styles.heading_box}>
          <h1 className={styles.heading}>Login</h1>
          <p className={styles.guide}>Enter email and password to login</p>
        </div>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <div className={styles.inputs}>
            <input
              htmlFor="email"
              placeholder="Enter your email"
              className={emailInavlidClass}
              value={email}
              onChange={emailHandler}
              onBlur={emailBlurHandler}
              autoFocus
            />
            <input
              htmlFor="password"
              placeholder="Enter your password"
              className={passwordInvalidClass}
              value={password}
              onChange={passwordHandler}
              onBlur={passwordBlurHandler}
            />
          </div>
          <div className={styles.btns_box}>
            <button
              type="submit"
              className={styles.submit}
              disabled={!formIsValid}
            >
              Sign In
            </button>
            <button type="button" className={styles.create_acc}>
              <Link to="/signup">Create Account</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
