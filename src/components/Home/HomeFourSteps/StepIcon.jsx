import classes from "./StepIcon.module.scss";

const StepIcon = ({ imgSrc, title, desc }) => {
  return (
    <section className={classes["step-icon-container"]}>
      <img className={classes["step-icon"]} src={imgSrc} alt="icon of step" />
      <p className={classes["icon-description"]}>{title}</p>
      <span className={classes.line}></span>
      <p className={classes["content-description"]}>{desc}</p>
    </section>
  );
};

export default StepIcon;
