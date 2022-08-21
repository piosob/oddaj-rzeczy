import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  const handleClick = (event) => {
    props.onBrandClick && props?.onBrandClick(props.step);
    props.handleSubmit && props.handleSubmit(event);
    props.onTest && props.onTest();
    props.onLogout && props.onLogout();
    props.onLogoutNavigate && props.onLogoutNavigate();
    props.onNextClick && props.onNextClick();
    props.onPrevClick && props.onPrevClick();
  };

  return (
    <button
      className={`${classes.button} ${props.className ? props.className : ""}`}
      type={props.type || "button"}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
