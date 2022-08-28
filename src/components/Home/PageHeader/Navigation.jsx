import { useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavLinksOutsideHome from "./NavLinksOutsideHome";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  let location = useLocation().pathname;
  return (
    <nav className={classes.nav}>
      {/* {location === "/" ? <NavLinks /> : <NavLinksOutsideHome />} */}
      <NavLinks />
    </nav>
  );
};

export default Navigation;
