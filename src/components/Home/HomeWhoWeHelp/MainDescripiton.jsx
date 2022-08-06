import { foundations, NGOS, collections } from "./data";
import classes from "./MainDescripiton.module.scss";
export const MainDescripiton = ({ chosenStep }) => {
  if (chosenStep === "1") {
    return <p className={classes.p}>{foundations.main_description}</p>;
  } else if (chosenStep === "2") {
    return <p className={classes.p}>{NGOS.main_description}</p>;
  } else {
    return <p className={classes.p}>{collections.main_description}</p>;
  }
};
