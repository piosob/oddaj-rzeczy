import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formBG } from "../../../../assets/img";
import { Button } from "../../../UI";
import { setFormHeading, setFormSubPage } from "./";
import FormContex from "../../../store/form-contex";
import classes from "./FormGIMain.module.scss";

const FormGIMain = () => {
  const formCtx = useContext(FormContex);
  return (
    <div className={classes.BG} style={{ backgroundImage: `url(${formBG})` }}>
      <div className={classes.container}>
        <p className={classes.stepNumber}>Krok {formCtx.formStep}/4</p>
        <h3 className={classes.heading}>{setFormHeading(formCtx.formStep)}</h3>
        {setFormSubPage(formCtx.formStep)}
        <div className={classes.btnArea}>
          {formCtx.formStep !== 1 ? (
            <Button
              className={classes.button}
              // onPrevClick={formCtx.onPrevClick}
              formClickName="prev"
            >
              <FontAwesomeIcon icon="fa-solid fa-angles-left" />
              Wstecz
            </Button>
          ) : null}
          {formCtx.formStep !== 4 || formCtx.step3WhoHelpErrorMessage ? (
            <Button
              className={classes.button}
              // onNextClick={formCtx.onNextClick}
              formClickName="next"
            >
              Dalej
              <FontAwesomeIcon icon="fa-solid fa-angles-right" />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FormGIMain;
