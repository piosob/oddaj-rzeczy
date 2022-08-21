import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../UI/Button/Button";
import { homeHeroDecoration } from "../../../assets/img";
import classes from "./ContentForOrganize.module.scss";
const ContentForOrganize = () => {
  return (
    <div className={classes["content-for-organize-container"]}>
      <h2 className={classes.heading}>
        <span className={classes.span}>Zacznij pomagać!</span>Oddaj niechciane
        rzeczy w zaufane ręce.
      </h2>
      <img src={homeHeroDecoration} alt="decoration" />
      <div className={classes["btns-actions"]}>
        <Button className={classes.button}>
          <Link to="/oddaj-rzeczy">
            <FontAwesomeIcon icon="fa-solid fa-gifts" />
            ODDAJ RZECZY
          </Link>
        </Button>
        <Button className={classes.button}>ZORGANIZUJ ZBIÓRKĘ</Button>
      </div>
    </div>
  );
};

export default ContentForOrganize;
