import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import classes from "./NavLinks.module.scss";
const NavLinksOutsideHome = () => {
  return (
    <ul className={classes.ul}>
      <li className={classes.active}>
        <Link to="/">Start</Link>
      </li>
      <li>
        <Link to="/#HomeThreeColumns">O co chodzi?</Link>
      </li>
      <li>
        <Link to="/#HomeAbout">O nas</Link>
      </li>
      <li>
        <Link to="/#HomeWhoHeHelp">Fundacje i organizacje</Link>
      </li>
      <li>
        <Link to="/#HomeContact">Kontakt</Link>
      </li>
    </ul>
  );
};

export default NavLinksOutsideHome;
