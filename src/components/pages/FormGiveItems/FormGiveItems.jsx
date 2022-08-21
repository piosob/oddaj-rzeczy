import { FormGIHeader, FormGIHeaderDescription, FormGIMain } from "./";
import { HomeContact } from "../../Home";
import { FormContexProvider } from "../../store/form-contex";
import classes from "./FormGiveItems.module.scss";

const FormGiveItems = () => {
  return (
    <div className={classes.container}>
      <FormContexProvider>
        <FormGIHeader />
        <FormGIHeaderDescription />
        <FormGIMain />
        <HomeContact />
      </FormContexProvider>
    </div>
  );
};

export default FormGiveItems;
