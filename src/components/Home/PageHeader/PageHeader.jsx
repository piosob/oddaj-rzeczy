import LoginSection from "./LoginSection";
import Navigation from "./Navigation";
import classes from "./PageHeader.module.scss";

const PageHeader = () => {
  return (
    <div className={classes.pageHeader}>
      <LoginSection />
      <Navigation />
    </div>
  );
};

export default PageHeader;
