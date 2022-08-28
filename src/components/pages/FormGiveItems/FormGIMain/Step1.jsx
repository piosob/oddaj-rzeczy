import React, { useContext } from "react";
import FormContex from "../../../store/form-contex";
import { Input } from "../../../UI";
import { step1RadioData } from "../data";
import classes from "./Step1.module.scss";
const Step1 = () => {
  const formCtx = useContext(FormContex);
  const radioList = step1RadioData.map((radio) => (
    <Input
      key={radio}
      value={radio}
      label={radio}
      labelClassName={classes.label}
      inputClassName={classes.inputRadio}
      type="radio"
    >
      <span
        className={
          formCtx.step1Radio === radio
            ? classes.activeRadio
            : classes.defaultRadio
        }
      ></span>
    </Input>
  ));
  return <form>{radioList}</form>;
};

export default Step1;
