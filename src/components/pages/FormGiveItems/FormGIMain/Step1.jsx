import React, { useContext } from "react";
import FormContex from "../../../store/form-contex";
import { step1RadioData } from "../data";
import classes from "./Step1.module.scss";
const Step1 = () => {
  const formCtx = useContext(FormContex);

  const handleInput = (event) => {
    if (typeof formCtx.onRadioClick !== "function") return;
    formCtx.onRadioClick(event.target.value);
  };
  const radioList = step1RadioData.map((radio) => (
    <label key={radio} className={classes.label}>
      <input
        className={classes.inputRadio}
        type="radio"
        value={radio}
        name="step1"
        onInput={handleInput}
      />
      <span className={classes.defaultRadio}></span>
      {radio}
    </label>
  ));
  return <form>{radioList}</form>;
};

export default Step1;
