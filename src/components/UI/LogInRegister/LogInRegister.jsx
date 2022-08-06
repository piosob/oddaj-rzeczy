import { Link } from "react-router-dom";
import { Button } from "../index";
import { homeHeroDecoration } from "../../../assets/img";
import classes from "./LogInRegister.module.scss";
const LogInRegister = (props) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>{props.title}</h2>
      <img className={classes.img} src={homeHeroDecoration} alt="" />
      <form className={classes.form} noValidate>
        <section className={classes.inputArea}>{props.children}</section>
        <section className={classes.buttonsArea}>
          <Button>
            <Link to={`/${props.path}`}>{props.firstButtonDescription}</Link>
          </Button>
          <Button handleSubmit={props.handleSubmit}>
            {props.secondButtonDescription}
          </Button>
        </section>
      </form>
    </div>
  );
};
export default LogInRegister;
