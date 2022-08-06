import { Link } from "react-router-dom";
import { Button } from "../../UI";
import { homeHeroDecoration } from "../../../assets/img";
import classes from "./Logout.module.scss";

const Logout = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Wylogowanie nastąpiło pomyślnie!</h2>
      <img className={classes.img} src={homeHeroDecoration} alt="" />
      <Button>
        <Link to="/">Strona główna</Link>
      </Button>
    </div>
  );
};

export default Logout;
