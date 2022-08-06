import classes from "./Column.module.scss";
const Column = (props) => {
  return (
    <section className={classes.container}>
      <h3 className={classes.heading}>{props.number}</h3>
      <span className={classes.numberDescription}>
        {props.numberDescription}
      </span>
      <p className={classes.columnDescription}>{props.columnDescription}</p>
    </section>
  );
};

export default Column;
