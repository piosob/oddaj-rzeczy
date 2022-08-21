import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../UI/Button/Button";
import StepIcon from "./StepIcon";
import {
  homeHeroDecoration,
  icon1,
  icon2,
  icon3,
  icon4,
} from "../../../assets/img";
import classes from "./HomeFourSteps.module.scss";

const HomeFourSteps = () => {
  return (
    <div className={classes["HomeFourSteps-container"]}>
      <h2>Wystarczą 4 proste kroki</h2>
      <img src={homeHeroDecoration} alt="decoration" />
      <div className={classes["step-icon-container"]}>
        <div className={classes["step-icon-area"]}>
          <StepIcon
            imgSrc={icon1}
            title="Wybierz rzeczy"
            desc="ubrania, zabawki, sprzęt i inne"
          />
          <StepIcon
            imgSrc={icon2}
            title="Spakuj je"
            desc="skorzystaj z worków na śmieci"
          />
          <StepIcon
            imgSrc={icon3}
            title="Zdecyduj komu chcesz pomóc"
            desc="wybierz zaufane miejsce"
          />
          <StepIcon
            imgSrc={icon4}
            title="Zamów kuriera"
            desc="kurier przyjedzie w dogodnym terminie"
          />
        </div>
      </div>
      <Button className={classes.button}>
        {/* należy poprawić bo teraz znacznik <a> nie zajmuje całego buttona i trzeba kliknąc dokładnie w tekst */}
        <Link to="/oddaj-rzeczy">
          <FontAwesomeIcon icon="fa-solid fa-gifts" />
          ODDAJ RZECZY
        </Link>
      </Button>
    </div>
  );
};

export default HomeFourSteps;
