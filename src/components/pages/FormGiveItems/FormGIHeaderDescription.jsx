import React, { useContext } from "react";
import { yellowDescription } from "./data";
import FormContex from "../../store/form-contex";
import classes from "./FormGIHeaderDescription.module.scss";

const setDescription = (number) => {
  let step = number;
  switch (step) {
    case 1:
      return yellowDescription.step1;
    case 2:
      return yellowDescription.step2;
    case 3:
      return yellowDescription.step3;
    case 4:
      return yellowDescription.step4;
    default:
      return yellowDescription.step1;
  }
};

const FormGIHeaderDescription = (props) => {
  const formCtx = useContext(FormContex);
  return (
    <div className={classes.BG}>
      <div className={classes.container}>
        <h4 className={classes.heading}>Ważne!</h4>
        <p className={classes.description}>
          {setDescription(formCtx.formStep)}
        </p>
      </div>
    </div>
  );
};

export default FormGIHeaderDescription;
