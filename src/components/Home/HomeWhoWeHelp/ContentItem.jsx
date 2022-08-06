import classes from "./ContentItem.jsx.module.scss";
export const ContentItem = ({ title, description, items }) => {
  return (
    <div className={classes.container}>
      <div className={classes["left-content"]}>
        <h4 className={classes.heading}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
      <span className={classes["items-list"]}>{items}</span>
    </div>
  );
};
