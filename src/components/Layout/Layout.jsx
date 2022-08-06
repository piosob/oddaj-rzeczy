import PageHeader from "../Home/PageHeader/PageHeader";

import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <PageHeader />
      {props.children}
    </div>
  );
};

export default Layout;
