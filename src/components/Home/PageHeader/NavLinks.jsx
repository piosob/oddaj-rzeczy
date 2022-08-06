import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import classes from "./NavLinks.module.scss";

const Navlinks = () => {
  return (
    <ul className={classes.ul}>
      <li className={classes.active}>
        <Link to="/">Start</Link>
      </li>
      <li>
        <Scroll
          activeClass="active"
          to="HomeThreeColumns"
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          O co chodzi?
        </Scroll>
      </li>
      <li>
        <Scroll
          activeClass="active"
          to="HomeAbout"
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          O nas
        </Scroll>
      </li>
      <li>
        <Scroll
          activeClass="active"
          to="HomeWhoHeHelp"
          smooth={true}
          offset={-10}
          duration={500}
          delay={100}
        >
          Fundacje i organizacje
        </Scroll>
      </li>
      <li>
        <Scroll
          activeClass="active"
          to="HomeContact"
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          Kontakt
        </Scroll>
      </li>
    </ul>
  );
};

export default Navlinks;
