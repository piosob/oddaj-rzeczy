import React, { useContext } from "react";
import FormContex from "../../../store/form-contex";
import Input from "../../../UI/Input/Input";
import classes from "./Step4.module.scss";
const Step4 = () => {
  const formCtx = useContext(FormContex);
  return (
    <form className={classes.container}>
      <section className={classes.adress}>
        <h3 className={classes.heading}>Adres odbioru:</h3>
        <Input
          labelClassName={classes.label}
          name="street"
          value={formCtx.step4?.street}
          label="Ulica"
        />
        <Input
          labelClassName={classes.label}
          value={formCtx.step4?.city}
          name="city"
          label="Miasto"
        />
        <Input
          labelClassName={classes.label}
          value={formCtx.step4?.postCode}
          name="postCode"
          label="Kod pocztowy"
        />
        <Input
          labelClassName={classes.label}
          value={formCtx.step4?.phoneNumber}
          name="phoneNumber"
          label="Numer telefonu"
          type="nuber"
        />
      </section>
      <section className={classes.term}>
        <h3 className={classes.heading}>Termin odbioru:</h3>
        <Input
          labelClassName={classes.label}
          value={formCtx.step4?.date}
          name="date"
          label="Data"
          type="date"
        />
        <Input
          labelClassName={classes.label}
          value={formCtx.step4?.hour}
          name="hour"
          label="Godzina"
          type="time"
        />
        <label htmlFor="remarks">Uwagi dla kuriera</label>
        <textarea
          name="remarks"
          value={formCtx.step4?.remarks}
          id="remarks"
          rows="5"
          cols="33"
        ></textarea>
        <h1>{formCtx.step3CustomOrganization}</h1>
      </section>
    </form>
  );
};

export default Step4;
