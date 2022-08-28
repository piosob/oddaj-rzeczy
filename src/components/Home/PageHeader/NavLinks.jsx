import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Link as Scroll } from "react-scroll";
import classes from "./NavLinks.module.scss";

const Navlinks = () => {
  let location = useLocation().pathname;
  // let [searchParams, setSearchParams] = useSearchParams({});
  // setSearchParams({ hello: "world" });
  // setSearchParams({ cos: "HomeWhoHeHelp" });
  // console.log(searchParams);
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
        {/* <Scroll
          activeClass="active"
          to="HomeWhoHeHelp"
          smooth={true}
          offset={-10}
          duration={500}
          delay={100}
        >
          Fundacje i organizacje
        </Scroll> */}
        {/* <HashLink smooth to={"#HomeWhoHeHelp"}>
          Fundacje i organizacje
        </HashLink> */}
        <Link to="/" state={{ id: "HomeWhoHeHelp" }}>
          Fundacje i organizacje
        </Link>
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
