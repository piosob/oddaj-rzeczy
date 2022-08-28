import React, { useContext } from "react";
import FormContex from "../../store/form-contex";
import classes from "./Button.module.scss";

const Button = (props) => {
  const formCtx = useContext(FormContex);
  const handleClick = (event) => {
    props.onBrandClick && props?.onBrandClick(props.step);
    props.handleSubmit && props.handleSubmit(event);
    props.onTest && props.onTest();
    props.onLogout && props.onLogout();
    props.onLogoutNavigate && props.onLogoutNavigate();
    if (props.formClickName === "prev") {
      formCtx.onPrevClick();
    }
    if (props.formClickName === "next") {
      formCtx.onNextClick();
    }
    // props.onNextClick && props.onNextClick();
    // props.onPrevClick && props.onPrevClick();
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
